export interface BookProps {
  bookId: number;
  author: {
    authorId: number;
    firstName: string;
    lastName: string;
  };
  title: string;
  subtitle: string;
  link: string;
  datePublication: Date;
}

export interface BookApiProps {
  livroId: number;
  autor: {
    nome: string;
    autorId: number;
    sobrenome: string;
  };
  titulo: string;
  subtitulo: string;
  linkLivro: string;
  dataPublicacao: Date;
}
