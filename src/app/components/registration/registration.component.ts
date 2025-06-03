import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  confirmationMessage: string = '';

  constructor(private fb: FormBuilder, private registrationService: RegistrationService) {
    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.pattern(/^[A-Za-z ]+$/)]],
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%*?&]+$/)]],
      userAddress: ['', [Validators.required]],
      userContact: ['', [Validators.required, Validators.pattern(/^\d+$/)]]
    });
  }

  onSubmit(): void {
    if (this.registrationForm.invalid) {
      alert('Please correct the form errors before submitting.');
      return;
    }

    this.registrationService.registerCustomer(this.registrationForm.value)
      .subscribe({
        next: (response) => {
          this.confirmationMessage = `Registration successful! Name: ${response.userName}, Email: ${response.userEmail}, Customer ID: ${response.userId}`;
        },
        error: () => {
          alert('Registration failed. Please try again.');
        }
      });
  }
}