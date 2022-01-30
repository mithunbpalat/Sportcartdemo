import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SportcartService } from './sportcart.service';
import { GooglePayButtonModule } from '@google-pay/button-angular';

@NgModule({
  declarations: [
    AppComponent,
    AdminaddproductComponent,
    AdminadduserComponent,
    AdminloginComponent,
    AdminorderComponent,
    AdminviewfeedbackComponent,
    RegisteruserComponent,
    UserfeedbackComponent,
    UserloginComponent,
    UserorderComponent,
    UserproductComponent,
    UserviewprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GooglePayButtonModule
  ],
  providers: [SportcartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
