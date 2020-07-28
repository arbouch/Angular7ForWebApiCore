import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import {  HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
formData:PaymentDetail;
readonly root ='http://localhost:59570/api';
list : PaymentDetail[];

constructor( private http:HttpClient) { }
 

  postPayementDetail() {
return  this.http.post(this.root + '/PayementDetail',this.formData)
  }
  putPayementDetail() {
    return  this.http.put(this.root + '/PayementDetail/'+this.formData.PMId,this.formData)
      }
      deletePayementDetail(id) {
        return  this.http.delete(this.root + '/PayementDetail/'+id)
          }
  refreshList()
  {
    this.http.get(this.root + '/PayementDetail').toPromise().then(res => this.list = res as  PaymentDetail[]);
  }

}


