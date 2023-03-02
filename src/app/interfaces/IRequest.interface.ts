export interface IRequest {
  body: {
    codigo_rastreamento: string;
    descricao_encomenda?: string;
  };
}
