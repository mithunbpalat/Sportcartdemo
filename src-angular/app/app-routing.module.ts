import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminaddproductComponent } from './adminaddproduct/adminaddproduct.component';
import { AdminadduserComponent } from './adminadduser/adminadduser.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminorderComponent } from './adminorder/adminorder.component';
import { AdminviewfeedbackComponent } from './adminviewfeedback/adminviewfeedback.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { UserfeedbackComponent } from './userfeedback/userfeedback.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserorderComponent } from './userorder/userorder.component';
import { UserproductComponent } from './userproduct/userproduct.component';
import { UserviewprofileComponent } from './userviewprofile/userviewprofile.component';

const routes: Routes = [
  {path:"",redirectTo:"adminlogin", pathMatch:"full"},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"userlogin",component:UserloginComponent},
  {path:"adminadduser",component:AdminadduserComponent},
  {path:"adminaddproduct",component:AdminaddproductComponent},
  {path:"adminaddorder",component:AdminorderComponent},
  {path:"adminviewfeedback",component:AdminviewfeedbackComponent},
  {path:"registeruser",component:RegisteruserComponent},
  {path:"userviewprofile/:id",component:UserviewprofileComponent},
  {path:"userproductpurchase/:id",component:UserproductComponent},
  {path:"userfeedback/:id",component:UserfeedbackComponent},
  {path:"userorder/:id",component:UserorderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
