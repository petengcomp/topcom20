export type Member = {
  nome: string;
  email: string;
  telefone: number;
  IES: string;
  curso: string;
  semestre: number;
}

export type TeamType = {
  nomeEquipe: string;
  integrante1: Member;
  integrante2?: Member;
  integrante3?: Member;
  cartoonPreferido: string;
}