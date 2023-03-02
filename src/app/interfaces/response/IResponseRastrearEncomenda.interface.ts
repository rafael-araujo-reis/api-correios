export interface IResponseRastrearEncomenda {
  codObjeto: string;
  eventos: IEventos[];
  modalidade: string;
  tipoPostal: ITipoPostal;
  habilitaAutoDeclaracao: boolean;
  permiteEncargoImportacao: boolean;
  habilitaPercorridaCarteiro: boolean;
  bloqueioObjeto: boolean;
  possuiLocker: boolean;
  habilitaLocker: boolean;
  habilitaCrowdshipping: boolean;
}

interface ITipoPostal {
  categoria: string;
  descricao: string;
  sigla: string;
}

interface IEventos {
  codigo: string;
  descricao: string;
  dtHrCriado: Date;
  tipo: string;
  unidade: IUnidade;
  unidadeDestino: IUnidade;
  urlIcone: string;
}

interface IUnidade {
  endereco: IEndereco;
  tipo: string;
}

interface IEndereco {
  cidade: string;
  uf: string;
}
