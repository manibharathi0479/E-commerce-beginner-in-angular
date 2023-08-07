import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  productList: any [] = [];
  cartObj : any = {
    "CustId": 1,
    "ProductId": 0,
    "Quantity": 0,
  
  };
  constructor(private productService: ProductService) {

  }
  ngOnInit(): void {
    debugger;
    this.loadAllProducts();
  }

  loadAllProducts() {
    debugger;
    this.productService.getAllProducts().subscribe((result: any)=>{
      this.productList = result.data;
    })
  }

  addItemToCart(productId: number) {
    debugger;
    this.cartObj.ProductId = productId;
    this.productService.addToCart(this.cartObj).subscribe((result: any)=>{
       if(result.result) {
        // alert("Product Added To Cart");
        this.productService.cartAddedSubject.next(true);
       }
    })
  }
}
