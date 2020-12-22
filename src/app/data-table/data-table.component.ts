import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { PaymentDetailService } from '../shared/payment-detail.service';

interface FireAlarmSystem {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})


export class DataTableComponent implements OnInit{

  fireAlarm: FormGroup;
  CustomerData: any;
  submitted = false;
  UserId: any;

  // data = new FormGroup({
  //     fireAlarm : this.fb.group({
  //       Id :['0'],
  //       MyId: ['',[ Validators.required ]],
  //       Name: ['',[ Validators.required ]],
  //       Address: ['',[ Validators.required ]],
  //       Email: ['',[ Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
  //     })
  //   })
    newdata = new FormGroup({
      fireAlarm : new FormGroup({
        Id: new FormControl(''),
        MyId: new FormControl(''),
        Name: new FormControl(''),
        Address: new FormControl(''),
        Email: new FormControl(''),
      })
    });


  Sdata: Object;
  constructor(private fb: FormBuilder,
    private router: Router,
    public service: PaymentDetailService,
    private formbuilder: FormBuilder,
    private toastr: ToastrService,
    ) {
    this.UserId = localStorage.getItem('ActiveUser');
    }

  ngOnInit() {


    this.Getnewsfeed();

  }

  get f() { return this.fireAlarm.controls; }
  get d() { return this.fireAlarm.value};


  onSubmit() {

    console.log(this.newdata.value);
    console.log(JSON.stringify(this.newdata.value));

    var r = this.newdata.value;
    //this.service.postPaymentDetail1(this.fireAlarm.value);

      this.service.postPaymentDetail12(this.newdata.value).subscribe((data : any)=>{

      }, (error: HttpErrorResponse)=> {

        this.toastr.error();
      })
    }
    // getD(){
    //   var r = this.service.NewData;
    //   return r = this.fireAlarm.value;
    // }

    // addData() {
    //   return this.fireAlarm.value;

    // }

    Getnewsfeed(){
      //to get USER ID

     this.service.getSdata1().subscribe((res) => {
       this.Sdata = res;
       console.log(this.Sdata);
     });
    }

    onDelete(id: number) {
      console.log(id);
      if (confirm('Are you sure to delete this record?')) {
        this.service.deletedata(id)
          .subscribe(
            res => {
              this.service.refreshList();
              this.toastr.error("Deleted successfully", 'Payment Detail Register');
            },
            err => { console.log(err) }
          )
      }
    }

    // onSubmit() {
    //   this.submitted = true;
    //   if (this.fireAlarm.invalid) {
    //     return;
    //   }
    //   console.log(this.fireAlarm.value)
    //   this.fireAlarm.value.UserId = this.UserId;

    //   this.service.addFireAlaramData(this.fireAlarm.value).subscribe((data: any)=>{
    //     if(data.statusReason) {

    //       this.fireAlarm.reset();
    //       this.toastr.success(data.message)
    //       this.router.navigateByUrl('forms/ViewFire-alarm-management');
    //     }
    //     if(!data.statusReason) {

    //       this.toastr.info(data.message)
    //     }
    //   }, (error: HttpErrorResponse)=> {

    //     this.toastr.error(error.message);
    //   })
    // }
}
