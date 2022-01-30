import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productdetail } from './gaddproductdetail';
import { Feedback } from './gfeedback';
import { Order } from './gorder';
import { User } from './guser';

@Injectable({
  providedIn: 'root'
})
export class SportcartService {

  private baseUrl = 'http://localhost:8083';
  
  constructor(private http: HttpClient) { }





  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      headers,
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get(`${this.baseUrl}/files`,{headers});
  }
  public deleteFile(a:any){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.delete("http://localhost:8083/deletefile?name="+a,{headers});
  }
  public searchFile(a:any){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/searchfile?name="+a,{headers});
  }









  public postUser(user: User){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/postuser",user,{headers,responseType:'text' as 'json'});
  }
  public updateUser(user: User){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.put("http://localhost:8083/updateuser",user,{headers,responseType:'text' as 'json'});
  }
  public getUsers(){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getallusers",{headers});
  }
  public getUserByUsername(a:string){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getuserbyusername?username="+a,{headers});
  }
  public getUserById(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getuserbyid?uid="+a,{headers});
  }
  public deleteUser(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.delete("http://localhost:8083/deleteuserbyid?uid="+a,{headers});
  }
  public getUseryByUname(user: User){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/getuserbyuname",user,{headers,responseType:'text' as 'json'});
  }
  public updateUserProfile(user: User){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.put("http://localhost:8083/updateuserprofile",user,{headers,responseType:'text' as 'json'});
  }






  public postProductdetail(productdetail: Productdetail){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/postproductdetail",productdetail,{headers,responseType:'text' as 'json'});
  }
  public updateProductdetail(productdetail: Productdetail){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.put("http://localhost:8083/updateproductdetail",productdetail,{headers,responseType:'text' as 'json'});
  }
  public getProductdetails(){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getallproductdetails",{headers});
  }
  public getProductdetailById(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getproductdetailbyid?pid="+a,{headers});
  }
  public deleteProductdetail(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.delete("http://localhost:8083/deleteproductdetailbyid?pid="+a,{headers});
  }
  public getProductdetailByCat(a:string,b:string,c:string){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getproductdetailbycat?category="+a+"&subcategory="+b+"&brand="+c,{headers});
  }
  public getProductsByCategory(){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getproductsbycategory",{headers});
  }public getProductsBySubcategory(){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getproductsbysubcategory",{headers});
  }public getProductsByBrand(){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getproductsbybrand",{headers});
  }







  public postOrder(order: Order){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/postorder",order,{headers,responseType:'text' as 'json'});
  }
  public postOrderone(order: Order){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/postorderone",order,{headers,responseType:'text' as 'json'});
  }
  public updateOrder(order: Order){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.put("http://localhost:8083/updateorder",order,{headers,responseType:'text' as 'json'});
  }
  public getOrders(){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getallorders",{headers});
  }
  public getOrdersByUsername(a: string){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getordersbyusername?username="+a,{headers});
  }
  public getOrderById(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getorderbyid?oid="+a,{headers});
  }
  public deleteOrder(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.delete("http://localhost:8083/deleteorderbyid?oid="+a,{headers});
  }







  public postFeedback(feedback: Feedback){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/postfeedback",feedback,{headers,responseType:'text' as 'json'});
  }
  public updateFeedback(feedback: Feedback){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.put("http://localhost:8083/updatefeedback",feedback,{headers,responseType:'text' as 'json'});
  }
  public getFeedbacks(){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getallfeedbacks",{headers});
  }
  public getFeedbackById(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getfeedbackbyid?fid="+a,{headers});
  }
  public deleteFeedback(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.delete("http://localhost:8083/deletefeedbackbyid?fid="+a,{headers});
  }






  public login(username:string, password:string){
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/",{headers,responseType:'text' as 'json'});
  }
}
