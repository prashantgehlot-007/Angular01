import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';

import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-employee-detail-form',
  templateUrl: './employee-detail-form.component.html',
  styleUrls: ['./employee-detail-form.component.css']
})


export class EmployeeDetailFormComponent implements OnInit{
  profileForm = this.fb.group({
    paymentDetailId: [''],
    cardOwnerName: [''],
    cardNumber: [''],
    expirationDate: [''],
    securityCode: [''],
  });
  submitted = false;
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(public service: PaymentDetailService,
    private toastr: ToastrService, private fb: FormBuilder) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  // insertRecord(_profileForm: FormArray) {
  //   this.service.postPaymentDetail().subscribe(
  //     res => {

  //       this.service.refreshList();
  //       this.toastr.success('Submitted successfully', 'Payment Detail Register')
  //     },
  //     err => { console.log(err); }
  //   );
  // }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
  }
  // onSubmit() {
  //   this.submitted = true;
  //   if (this.profileForm.invalid) {
  //     return;
  //   }
  //   console.log("this", this.profileForm.value)


  //   this.service.postPaymentDetail(this.profileForm.value).subscribe((data: any)=>{
  //     if(data.statusReason) {


  //       this.toastr.success(data.message)

  //     }
  //     if(!data.statusReason) {

  //       this.toastr.info(data.message)
  //     }
  //   }, (error: HttpErrorResponse)=> {

  //     this.toastr.error(error.message);
  //   })
  // }
}
