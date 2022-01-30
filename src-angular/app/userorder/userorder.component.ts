import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productdetail } from '../gaddproductdetail';
import { Order } from '../gorder';
import { User } from '../guser';
import { SportcartService } from '../sportcart.service';

@Component({
  selector: 'app-userorder',
  templateUrl: './userorder.component.html',
  styleUrls: ['./userorder.component.css']
})
export class UserorderComponent implements OnInit {

  a: any;
  msg : any;
  pid : any;
  uid : any;
  user : any = new User(0,"","","","","","");
  product : any = new Productdetail(0,"","","","","","","","","","");
  order : any = new Order(0,"","","","","","","","","","");
  orders : any;

  
  constructor(private service: SportcartService, private route:ActivatedRoute,private http: HttpClient) { }





    
  paymentRequest: google.payments.api.PaymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD']
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId'
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant'
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '0.10',
      currencyCode: 'EUR',
      countryCode: 'BE'
    },
    callbackIntents: ['PAYMENT_AUTHORIZATION']
  };

  onLoadPaymentData = (
    event: Event
  ): void => {
    const eventDetail = event as CustomEvent<google.payments.api.PaymentData>;
    console.log('load payment data', eventDetail.detail);
  }

  onPaymentDataAuthorized: google.payments.api.PaymentAuthorizedHandler = (
    paymentData
    ) => {
      console.log('payment authorized', paymentData);
      return {
        transactionState: 'SUCCESS'
      };
    }

  onError = (event: ErrorEvent): void => {
    console.error('error', event.error);
  }











  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>this.a=data.get('id'));

    let aa: Array<string>=this.a.split("-"); 
    this.pid = aa[0];
    this.uid = aa[1];

    let resp = this.service.getUserById(this.uid);
    resp.subscribe((data)=>this.user=data);

    let respo = this.service.getProductdetailById(this.pid);
    respo.subscribe((data)=>this.product=data);

    let respon = this.service.getOrders();
    respon.subscribe((data)=>this.orders=data);
  }

   
  public postOrderNow(){
    let resp = this.service.postOrderone(this.order);
    resp.subscribe((data)=>this.orders=data);
  }

  public delOrder(a:number){
    let resp = this.service.deleteOrder(a);
    resp.subscribe((data)=>this.msg=data);
  }


}
