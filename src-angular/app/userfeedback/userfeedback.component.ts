import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Feedback } from '../gfeedback';
import { User } from '../guser';
import { SportcartService } from '../sportcart.service';

@Component({
  selector: 'app-userfeedback',
  templateUrl: './userfeedback.component.html',
  styleUrls: ['./userfeedback.component.css']
})
export class UserfeedbackComponent implements OnInit {

  feedback : any = new Feedback(0,"","");
  msg : any;
  a : any;
  user : any = new User(0,"","","","","","");
  constructor(private service: SportcartService,  private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>this.a=data.get('id'));

    let resp = this.service.getUserById(this.a);
    resp.subscribe((data)=>this.user=data);
  }

  
  public postFeedbackNow(){
    let resp = this.service.postFeedback(this.feedback);
    resp.subscribe((data)=>this.msg=data);
  }
}
