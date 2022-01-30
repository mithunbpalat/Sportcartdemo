import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../guser';
import { SportcartService } from '../sportcart.service';

@Component({
  selector: 'app-userviewprofile',
  templateUrl: './userviewprofile.component.html',
  styleUrls: ['./userviewprofile.component.css']
})
export class UserviewprofileComponent implements OnInit {

  user : any = new User(0,"","","","","","");
  a : any;
  b : any;
  constructor(private service: SportcartService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>this.a=data.get('id'));

    this.b = this.a;
    let resp = this.service.getUserById(this.a);
    resp.subscribe((data)=>this.user=data);
  }

  public updateUserNow(){
    let resp = this.service.updateUserProfile(this.user);
    resp.subscribe((data)=>this.user=data);
  }

  public getUser(){
    let resp = this.service.getUserById(this.b);
    resp.subscribe((data)=>this.user=data);
  }
}
