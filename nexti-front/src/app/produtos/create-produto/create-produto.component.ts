import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-create-produto',
  templateUrl: './create-produto.component.html',
  styleUrls: ['./create-produto.component.css']
})
export class CreateProdutoComponent implements OnInit {

  request: RequestCreate = {
    nome: '',
    sku: '',
    descricao: '',
    preco:0,
    quantidade: 0
  }
  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
  }

  save() {
    this.produtoService.createProduto(this.request).subscribe(
      res => {}
    );
  }

}
