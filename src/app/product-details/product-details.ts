import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {

  productId: any;
  product:any;
  constructor(private route: ActivatedRoute){
    this.productId = this.route.snapshot.paramMap.get('id');
    console.log(this.productId);
  }

}