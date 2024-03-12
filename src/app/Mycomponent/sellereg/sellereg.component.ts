import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';
import { MyserviceService } from '../../myservice.service';

@Component({
  selector: 'app-sellereg',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './sellereg.component.html',
  styleUrl: './sellereg.component.css'
})
export class SelleregComponent implements OnInit {
    formData: any={data:[]}
    becomeSeller: FormGroup= new FormGroup({});
    constructor(private router: Router, private myservice:MyserviceService) {}

    ngOnInit(): void {
      console.log(this.becomeSeller);
      this.becomeSeller = new FormGroup({
        FirstName: new FormControl(null, Validators.required),
        LastName: new FormControl(null, Validators.required),
        BusinessName: new FormControl(null, Validators.required),
        Address: new FormControl(null, Validators.required),
        City:new FormControl(null, Validators.required),
        State: new FormControl(null, Validators.required),
        ZipCode: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
        MobileNumber: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
        EmailId: new FormControl(null ,[Validators.required,  Validators.email]),
        BusinessTiming: new FormControl(null , [Validators.required]),
        OpenAt: new FormControl(null, Validators.required),
        ClosedAt: new FormControl(null, Validators.required),
        MonthOfEstablishment: new FormControl('January', Validators.required),
        YearofEstablishment: new FormControl(null, Validators.required),
        BusinessCategory: new FormControl('Category1', Validators.required),
        BusinessWebsite: new FormControl(null, Validators.required)
      });
    }

    SellerSubmit() {
      if (this.becomeSeller.valid) {
        const formData = this.becomeSeller.value; 
        this.myservice.sellerForm(formData).subscribe(
          (response: any) => {
            if (response.success) {
              console.log('Response:', response);
              this.router.navigate(['/selleradd']);
            } else {
              console.error("Something went wrong...");
            }
          }
        );
      }
    }
}
