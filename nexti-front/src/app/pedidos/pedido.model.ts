export interface Pedido {
    id: number;
    idCliente: number;
    valorTotalCompra: number;
    dataCompra: string;
    idProduto: number;
}

export interface ResponsePedido{
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Pedido[];
}

export interface RequestCreate{
    idCliente: number;
    valorTotalCompra: number;
    dataCompra: string;
    idProduto: number;
}
export interface ResponseCreate{
    idCliente: number;
    valorTotalCompra: number;
    dataCompra: string;
    idProduto: number;
    id: number;

}