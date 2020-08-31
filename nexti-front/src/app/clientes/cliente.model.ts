export interface Cliente {
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: string;
}

export interface RequestCreate{
    nome: string;
    cpf: string;
    dataNascimento: string;
}
export interface ResponseCreate{
    nome: string;
    cpf: string;
    dataNascimento: string;
    id: number;
}