import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-form-check01',
  templateUrl: './form-check01.component.html',
  styleUrls: ['./form-check01.component.css']
})
export class FormCheck01Component implements OnInit {

  data = new FormGroup({
    bioSection : new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      age: new FormControl(''),
      stackDetails: new FormGroup({
        stack: new FormControl(''),
        experience: new FormControl('')
      }),
      address: new FormGroup({
          country: new FormControl(''),
          city: new FormControl('')
      })
    })
  });

constructor() { }
ngOnInit() {
  }
  callingFunction() {
    console.log(this.data.value);
   }

}
