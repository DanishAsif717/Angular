import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  myPro:any[] =[{
    id: 1,
    name: "Product 1",
    price: 10.99,
    description :"pro3 ",
  }  
  ,{
    id: 23,
    name: "Product 2",
    price: 10.99,
    description :"pro3 ",
  }  
  ,{
    id: 91,
    name: "Product 3",
    price: 10.99,
    description :"pro4 ",
  }

  ]


//event binding
  ShowProduct(scent:any){
    alert(`${scent.name} has price of Rs${scent.price}`)
  }

  //data binding 
price :any = 0;
}


