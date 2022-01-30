import { Component, OnInit } from '@angular/core';
import { Feedback } from '../gfeedback';
import { Search } from '../gsearch';
import { SportcartService } from '../sportcart.service';

@Component({
  selector: 'app-adminviewfeedback',
  templateUrl: './adminviewfeedback.component.html',
  styleUrls: ['./adminviewfeedback.component.css']
})
export class AdminviewfeedbackComponent implements OnInit {

  feedback : any = new Feedback(0,"","");
  feedbacks : any;
  search :any =new Search(0);
  constructor(private service: SportcartService) { }

  ngOnInit(): void {
    let resp = this.service.getFeedbacks();
    resp.subscribe((data)=>this.feedbacks=data);
  }


  public delFeedback(a: number){
    let resp = this.service.deleteFeedback(a);
    resp.subscribe((data)=>this.feedbacks=data);
  }

  public searchById(a:number){
    let resp = this.service.getFeedbackById(a);
    resp.subscribe((data)=>this.feedback=data);
  }

}
