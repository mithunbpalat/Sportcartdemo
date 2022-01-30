import { Component, OnInit } from '@angular/core';
import { Search } from '../gsearch';
import { User } from '../guser';
import { SportcartService } from '../sportcart.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  msg : any;
  user : any = new User(0,"","","","","","");
  users : any;
  constructor(private service: SportcartService) { }

  ngOnInit(): void {
   
  }

  
  public postUserNow(){
    let resp = this.service.postUser(this.user);
    resp.subscribe((data)=>this.msg=data);
  }
}
