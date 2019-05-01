import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private spinner: NgxSpinnerService) { }

  ngOnInit() {
      this.contactForm = this.formBuilder.group({
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          message: ['', [Validators.required, Validators.minLength(10)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.contactForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.contactForm.invalid) {
          return;
      }
    this.spinner.show();
 
    setTimeout(() => {
        this.spinner.hide();
         alert('SUCCESS!! :-)')
    }, 5000);

     
  }
}
