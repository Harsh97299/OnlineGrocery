import { Component } from '@angular/core';
import { TransactionData,TransactionService } from 'src/app/services/transaction.service';
import { transAuthService } from 'src/app/services/trans-auth.service';
import { CartService } from 'src/app/services/cart.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  paymentMethod: string = '';
  totalPrice: any = 0;
  discount: number = 0;
  gst: number = 0;
  delivery: number = 40;
  orderTotal: number = 0;

  customerId = '';
  productIds:any;
  numberOfItems: any=0;

  showInvoice = false;
  transactionId = '';

  constructor(
    private transactionService: TransactionService,
    private authService: transAuthService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.customerId = this.authService.getCustomerId();
    this.productIds = this.cartService.getProductIds();
    this.numberOfItems = this.cartService.getTotalItems();
    this.totalPrice = this.cartService.getTotalPrice();
    this.gst = this.totalPrice * 0.05; // example GST calculation
    this.discount = this.totalPrice > 500 ? 50 : 0;
    this.calculateOrderTotal();
  }

  calculateOrderTotal() {
    this.orderTotal = this.totalPrice - this.discount + this.gst + this.delivery;
  }

  proceedToBuy() {
    const transactionData: TransactionData = {
      customerId: this.customerId,
      productIds: this.productIds,
      totalAmount: this.orderTotal,
      numberOfItems: this.numberOfItems,
      paymentMethod: this.paymentMethod
    };

    this.transactionService.createTransaction(transactionData).subscribe({
      next: (response) => {
        this.transactionId = response.transactionId;
        this.showInvoice = true;
      },
      error: () => {
        alert('Transaction failed!');
      }
    });
  }
}