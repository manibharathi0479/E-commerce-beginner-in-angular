import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class headerComponent {
  title = 'ecommerce';
  cartProducts: any[] = [];
  subTotal: number = 0;
  constructor(private productService: ProductService, private router: Router) {
    this.productService.cartAddedSubject.subscribe(res=> {
      debugger;
      this.loadCart();
    })
  }

  ngOnInit(): void {
    this.loadCart();
  }
  redirectToSale() {
    this.router.navigateByUrl("/sale");
  }

  loadCart() {
    this.subTotal = 0;
    this.productService.getCartItemsByCustId(1).subscribe((res: any)=> {
      this.cartProducts = res.data;
      this.cartProducts.forEach(element => {
          this.subTotal =  this.subTotal + element.productPrice;
      });
      debugger;
    })
  }
  contact(){
    this.router.navigateByUrl("/contact");
  }


  increaseQuantity(cartItem: any) {
    cartItem.quantity += 1;
    this.updateSubTotal();
  }

  decreaseQuantity(cartItem: any) {
    if (cartItem.quantity > 1) {
      cartItem.quantity -= 1;
      this.updateSubTotal();
    }
  }

  updateSubTotal() {
    this.subTotal = this.cartProducts.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.productPrice,
      0
    );
  }
}


