import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  listadoProductos = [];
  constructor() { }

  ngOnInit() {
    this.listadoProductos.push(
      {
        precio: 300,
        nombre: 'Producto 1',
        urlImagen: 'https://images.eldiario.es/clm/Libros_EDIIMA20170423_0117_19.jpg'
      }
    );
    this.listadoProductos.push(
      {
        precio: 500,
        nombre: 'Producto 2',
        urlImagen: 'https://cdn.shopify.com/s/files/1/0160/5094/products/librorojo2_1024x1024.jpg?v=1361402336'
      }
    );
    this.listadoProductos.push(
      {
        precio: 500,
        nombre: 'Producto 3',
        urlImagen: 'https://cdn.shopify.com/s/files/1/0160/5094/products/librorojo2_1024x1024.jpg?v=1361402336'
      }
    );
    this.listadoProductos.push(
      {
        precio: 500,
        nombre: 'Producto 4',
        urlImagen: 'https://cdn.shopify.com/s/files/1/0160/5094/products/librorojo2_1024x1024.jpg?v=1361402336'
      }
    );
  }

}
