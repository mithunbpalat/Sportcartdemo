import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SportcartService } from '../sportcart.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  message : any;
  msg : any;
  username : any;
  password : any;
  constructor(private service: SportcartService , private router:Router) { }

  ngOnInit(): void {
  }

  public searchById(){
    let resp = this.service.login(this.username,this.password);
    resp.subscribe((data)=>this.message=data);
    this.msg = "Check the username or password";
    if(this.username && this.password){
    if(this.message == "authenticated successfully"){
      this.router.navigate(["/adminadduser"])
    }
  }
  }
}
