export interface Produto {
  id: string;
  imagem: string;
  nome: string;
  detalhes: string;
  tipo: string;
  preco: string;
}

export interface Categoria {
  id: string;
  nome: string;
  imagem: string;
  idPalavra: string;
}