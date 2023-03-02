import { IRequestListarEncomendas } from "./../interfaces/request/IRequestListarEncomendas.interface";
import { IRequestDeletarEncomenda } from "./../interfaces/request/IRequestDeletarEncomenda.interface";
import { IRequestRastrearEncomenda } from "./../interfaces/request/IRequestRastrearEncomenda.interface";
import { IRequestCadastrarEncomenda } from "./../interfaces/request/IRequestCadastrarEncomenda.interface";
import { IResponseRastrearEncomenda } from "./../interfaces/response/IResponseRastrearEncomenda.interface";
import express from "express";

const { rastrearEncomendas } = require("correios-brasil");
const router = express.Router();
const Encomendas = require("../models/encomendas");

router.post(
  "/cadastrar_encomenda",
  async (req: IRequestCadastrarEncomenda, res) => {
    try {
      const { codigo_rastreamento, descricao_encomenda } = req.body;

      const encomenda = await Encomendas.create({
        codigo_rastreamento,
        descricao_encomenda,
      });

      res.send({ encomenda });
    } catch (error) {
      res
        .status(400)
        .send({ error: "Erro ao salvar o código de rastreamento" });
    }
  }
);

router.get("/encomendas", async (req: IRequestListarEncomendas, res) => {
  try {
    const encomendas = await Encomendas.find();
    res.send({ encomendas });
  } catch (error) {
    res.status(400).send({ error: "Erro ao listar as encomendas cadastradas" });
  }
});

router.get(
  "/encomenda/:codigo_rastreamento",
  (req: IRequestRastrearEncomenda, res) => {
    try {
      const { codigo_rastreamento } = req.params;

      rastrearEncomendas([codigo_rastreamento]).then(
        (response: IResponseRastrearEncomenda) => {
          res.send(response);
        }
      );
    } catch (error) {
      res.status(400).send({
        error: "Erro genérico no rastreamento da encomenda informada",
      });
    }
  }
);

router.delete(
  "/encomenda/:id_encomenda",
  async (req: IRequestDeletarEncomenda, res) => {
    try {
      const { id_encomenda } = req.params;
      await Encomendas.findByIdAndRemove(id_encomenda);
      return res.send({ return: "Encomenda excluída com sucesso" });
    } catch (error) {
      res.status(400).send({
        error: "Erro ao excluir a encomenda. Tente em alguns instantes",
      });
    }
  }
);

module.exports = (app: any) => app.use("/rastreamento", router);
