import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  user: any = {};
  cart: any[] = [];
  showProfile = false;
  showCart = false;
  showInvoice = false;
  invoiceData: any;
  successMessage: string = '';
  show = true;
  products: any[] = [];
  showUpdateProfile = false;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private userService: UserService,
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUser();
    this.loadProducts();
    this.loadCart();
  }

  getUser() {
    this.userService.getCurrentUser().subscribe(user => {
      this.user = user;
    });
  }

  loadProducts() {
    this.products = [
      {
        productId: 101,
        name: "Organic Apples",
        price: 3.99,
        quantity: 50,
        description: "Freshly picked organic apples from local farms."
      },
      {
        productId: 102,
        name: "Brown Eggs (12 count)",
        price: 2.49,
        quantity: 30,
        description: "Grade A large brown eggs, farm fresh."
      },
      {
        productId: 103,
        name: "Whole Milk (1 Gallon)",
        price: 4.29,
        quantity: 40,
        description: "Creamy whole milk from grass-fed cows."
      },
      {
        productId: 104,
        name: "Basmati Rice (5 lb)",
        price: 6.99,
        quantity: 20,
        description: "Premium quality basmati rice with rich aroma and taste."
      },
      {
        productId: 105,
        name: "Almond Butter (16 oz)",
        price: 7.89,
        quantity: 15,
        description: "All-natural almond butter with no added sugar or salt."
      },
      {
        productId: 106,
        name: "Spinach (1 bunch)",
        price: 1.99,
        quantity: 60,
        description: "Fresh green spinach, perfect for salads and cooking."
      },
      {
        productId: 107,
        name: "Greek Yogurt (Plain, 32 oz)",
        price: 5.25,
        quantity: 25,
        description: "Thick and creamy plain Greek yogurt with high protein content."
      },
      {
        productId: 108,
        name: "Honey (Raw, 16 oz)",
        price: 6.49,
        quantity: 18,
      }];
  }

  loadCart() {
    this.cartService.getCartItems().subscribe(data => {
      this.cart = data;
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product).subscribe(() => {
      this.loadCart();
    });
  }

  toggleProfile() {
    this.showProfile = true;
    this.showCart = false;
    this.showInvoice = false;
    this.show = false;
  }

  toggleCart() {
    this.showCart = true;
    this.showProfile = false;
    this.showInvoice = false;
    this.show = false;
  }

  toggleHome() {
    this.showProfile = false;
    this.showCart = false;
    this.showInvoice = false;
    this.show = true;
  }

  updateProfile() {
    this.userService.updateUser(this.user).subscribe(() => {
      alert('Profile updated!');
    });
  }

  removeItem(productId: number) {
    this.cartService.removeItem(productId).subscribe(() => {
      this.loadCart();
    });
  }

  checkout() {
    // this.orderService.checkout(this.cart).subscribe((invoice: any) => {
    //   this.invoiceData = invoice;
    //   this.successMessage = "Order placed successfully!";
    //   this.showInvoice = true;
    //   this.cart = [];
    // });

    this.router.navigate(["/transaction"]);
  }

  logout() {
    this.router.navigate(['/login']);
    this.show = false;
  }

  getTotalPrice() {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  }

  //   display(){
  //    if(this.show) {
  //   return{
  //      backgroundColor:'#007bff' ,
  //     color: white,
  //     padding: 20px 10px,
  //     width: 100%,
  //     text-align: center,
  //     position: show?'static':'absolute',
  //     margin-top: 40px,
  //     bottom: 0,
  //     height: 66Px
  //   };

  //   }
  // }

  display(): { [key: string]: string } {
    if (!this.show) {
      return {
        backgroundColor: '#007bff',
        color: 'white',
        padding: '20px 10px',
        width: '100%',
        textAlign: 'center',
        position: 'fixed',
        marginTop: '40px',
        bottom: '0',
        height: '66px'
      };
    }

    return {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '20px 10px',
      width: '100%',
      textAlign: 'center',

      marginTop: '40px',
      bottom: '0',
      height: '66px'
    };
  }
}
