export interface IRequestCadastrarEncomenda {
  body: {
    codigo_rastreamento: string;
    descricao_encomenda?: string;
  };
}
