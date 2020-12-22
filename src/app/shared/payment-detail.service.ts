import { EmployeeDetail } from './employee-detail.model';
import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  [x: string]: any;

  formData: PaymentDetail= new PaymentDetail();
  NewData: EmployeeDetail= new EmployeeDetail();

  readonly baseURL = 'http://localhost:53843/api/PaymentDetail';
  readonly base1URL = 'http://localhost:53843/api/Check';
  list : PaymentDetail[] | undefined;
  list1 : EmployeeDetail[] | undefined

  constructor(private http: HttpClient) { }

  // Check API url //
  postPaymentDetail12(data : any) {
    return this.HttpClient.post(this.base1URL, data);
  }

  postPaymentDetail1() {
    return this.http.post(this.base1URL, this.NewData);
  }

  deletedata(id: number) {
    return this.http.delete(`${this.base1URL}/${id}`);
  }

  getSdata1() {
    return this.http.get(this.base1URL);
  }

  refreshList1() {
    this.http.get(this.base1URL)
      .toPromise()
      .then(res =>this.list1 = res as EmployeeDetail[]);
  }

  addFireAlaramData(data: any) {
    return this.http.post(`this.base1URL.addfirealaram`, data);
  }
  // `${this.API}api/FireAlarm/addfirealaram`

  // other API url //


  postPaymentDetail() {
    return this.http.post(this.baseURL, this.formData);
  }


  putPaymentDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.paymentDetailId}`, this.formData);
  }
  deletePaymentDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }



  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as PaymentDetail[]);
  }

  getNewsFeed() {
    return this.http.get(this.baseURL);
  }


  deleteEmployeeDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
