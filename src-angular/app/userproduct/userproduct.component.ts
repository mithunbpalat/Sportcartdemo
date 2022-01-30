import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Productdetail } from '../gaddproductdetail';
import { User } from '../guser';
import { SportcartService } from '../sportcart.service';

@Component({
  selector: 'app-userproduct',
  templateUrl: './userproduct.component.html',
  styleUrls: ['./userproduct.component.css']
})
export class UserproductComponent implements OnInit {

  cat : any = new Productdetail(0,"","","","","","","","","","");
  cats : any;
  subcat : any = new Productdetail(0,"","","","","","","","","","");
  subcats : any;
  bran : any = new Productdetail(0,"","","","","","","","","","");
  brans : any;
  product : any = new Productdetail(0,"","","","","","","","","","");
  products : any;
  test : any = new Productdetail(0,"","","","","","","","","","");
  user : any = new User(0,"","","","","","");
  a : any;
  b : any;
  constructor(private service: SportcartService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>this.a=data.get('id'));

    let resp = this.service.getUserById(this.a);
    resp.subscribe((data)=>this.user=data);

    let resp1 = this.service.getProductsByCategory();
    resp1.subscribe((data)=>this.cats=data);

    let resp2 = this.service.getProductsBySubcategory();
    resp2.subscribe((data)=>this.subcats=data);

    let resp3 = this.service.getProductsByBrand();
    resp3.subscribe((data)=>this.brans=data);
  }

  public search(tc:string, ts:string , tb:string){
    let resp = this.service.getProductdetailByCat(tc,ts,tb);
    resp.subscribe((data)=>this.products=data);
  }

  public order(pi:number, ui:number){
    this.b = pi+"-"+ui;
    this.router.navigate(["/userorder/",this.b])

  }
}
