import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { Routes, RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailFormComponent } from './payment-details/payment-detail-form/payment-detail-form.component';
import { HttpClientModule } from '@angular/common/http';
import { DataTableComponent } from './data-table/data-table.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeDetailFormComponent } from './employee-details/employee-detail-form/employee-detail-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormCheck01Component } from './form-check01/form-check01.component';



@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailFormComponent,
    DataTableComponent,
    EmployeeDetailsComponent,
    EmployeeDetailFormComponent,
    ReactiveFormComponent,
    FormCheck01Component,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: 'dataTable', component: DataTableComponent },
      { path: 'payment', component: PaymentDetailsComponent },
      { path: 'EmployeeDetails', component: EmployeeDetailsComponent },
      { path: 'EmployeeForm', component: EmployeeDetailFormComponent },
      { path: 'ReactiveForm', component: ReactiveFormComponent },
      { path: 'FormCheck', component: FormCheck01Component }
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
