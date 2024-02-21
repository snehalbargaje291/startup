import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-sellereg',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './sellereg.component.html',
  styleUrl: './sellereg.component.css'
})
export class SelleregComponent implements OnInit {

    becomeSeller: FormGroup= new FormGroup({});
    constructor(private router: Router) {}

    ngOnInit(): void {
      console.log(this.becomeSeller);
      this.becomeSeller = new FormGroup({
        firstname: new FormControl(null, Validators.required),
        lastname: new FormControl(null, Validators.required),
        startupname: new FormControl(null, Validators.required),
        address: new FormControl(null, Validators.required),
        city:new FormControl(null, Validators.required),
        state: new FormControl(null, Validators.required),
        zipcode: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
        mobnumber: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
        email: new FormControl(null ,[Validators.required,  Validators.email]),
        buztime: new FormControl(null , [Validators.required]),
        opensat: new FormControl(null, Validators.required),
        closesat: new FormControl(null, Validators.required),
        yoemonth: new FormControl('January', Validators.required),
        yoeyear: new FormControl(null, Validators.required),
        bcategory: new FormControl('Category1', Validators.required),
        bwebsite: new FormControl(null, Validators.required)
      });
    }

      SellerSubmit(){
        console.log(this.becomeSeller);
        const zipcodeControl = this.becomeSeller?.get('zipcode');
          if (zipcodeControl) {
            console.log(zipcodeControl.value);
            console.log(zipcodeControl.errors);
          }
        if (this.becomeSeller.valid) {
          this.router.navigate(['/selleradd']);
          
      }
      }
    }
