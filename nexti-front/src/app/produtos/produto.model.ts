export interface Produto {
    id: number;
    sku: string;
    nome: string;
    descricao: string;
    preco: number;
    quantidade: number;
}

export interface ResponseProduto{
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Produto[];
}
export interface RequestCreate{
    sku: string;
    nome: string;
    descricao: string;
    preco: number;
    quantidade: number;
}
export interface ResponseCreate{
    sku: string;
    nome: string;
    descricao: string;
    preco: number;
    quantidade: number;    
    id: number;

}

