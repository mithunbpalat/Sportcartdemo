import { Component, OnInit } from '@angular/core';
import { Order } from '../gorder';
import { Search } from '../gsearch';
import { SportcartService } from '../sportcart.service';

@Component({
  selector: 'app-adminorder',
  templateUrl: './adminorder.component.html',
  styleUrls: ['./adminorder.component.css']
})
export class AdminorderComponent implements OnInit {

  order : any = new Order(0,"","","","","","","","","","");
  orders : any;
  search :any =new Search(0);
  constructor(private service: SportcartService) { }

  ngOnInit(): void {
    let resp = this.service.getOrders();
    resp.subscribe((data)=>this.orders=data);
  }

  
  public postOrderNow(){
    let resp = this.service.postOrder(this.order);
    resp.subscribe((data)=>this.orders=data);
  }

  public updateOrderNow(){
    let resp = this.service.updateOrder(this.order);
    resp.subscribe((data)=>this.orders=data);
  }

  public delOrder(a: number){
    let resp = this.service.deleteOrder(a);
    resp.subscribe((data)=>this.orders=data);
  }

  public searchById(a:number){
    let resp = this.service.getOrderById(a);
    resp.subscribe((data)=>this.order=data);
  }

}
