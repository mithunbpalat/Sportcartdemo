import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Productdetail } from '../gaddproductdetail';
import { Search } from '../gsearch';
import { SportcartService } from '../sportcart.service';

@Component({
  selector: 'app-adminaddproduct',
  templateUrl: './adminaddproduct.component.html',
  styleUrls: ['./adminaddproduct.component.css']
})
export class AdminaddproductComponent implements OnInit {

  msg : any;
  product :any = new Productdetail(0,"","","","","","","","","","");
  products: any;
  search : any = new Search(0);

    selectedFiles?: FileList;
    currentFile?: File;
    progress = 0;
    message = '';
  
    fileInfos?: Observable<any>

  constructor(private uploadService: SportcartService ,private service: SportcartService) { }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    this.product.filename = event.target.files[0].name
  }

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();

    let resp = this.service.getProductdetails();
    resp.subscribe((data)=>this.products=data);
  }


  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;
        

        this.uploadService.upload(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.uploadService.getFiles();
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }

            this.currentFile = undefined;
          }
        });
      }

      this.selectedFiles = undefined;
    }
  }






  public select(a: string){

  }

  public postProduct(){
    let resp = this.service.postProductdetail(this.product);
    resp.subscribe((data)=>this.products=data);
  }

  public updateProduct(){
    let resp = this.service.updateProductdetail(this.product);
    resp.subscribe((data)=>this.products=data);
  }

  public delProduct(a: number){
    let resp = this.service.deleteProductdetail(a);
    resp.subscribe((data)=>this.products=data);
  }

  public searchById(a:number){
    let resp = this.service.getProductdetailById(a);
    resp.subscribe((data)=>this.products=data);
  }

  public delFile(a: string){
  let resp = this.service.deleteFile(a);
  resp.subscribe((data)=>this.msg=data)    

  }
  
}
