import { Component } from '@angular/core';
import { CustomerService } from './service/customer.service'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anguarhapppy';
  aboutus='welcome to about us';
  myInputMessage:string="I am the parent component";

  GetChildData(data:any){  
    console.log(data);  
 }  
 customers:any;
 constructor(private service:CustomerService){
  this.service.getdata().subscribe((res:any)=>{
    // console.log(data);s
    this.customers=res.data;
  })
 }
}
