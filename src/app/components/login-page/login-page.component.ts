import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {
    this.loginForm = this.fb.group({
      emailId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    const { emailId, password } = this.loginForm.value;

    this.authService.login(emailId, password).subscribe({
      next: (response) => {
        {
          console.log(JSON.parse(response).body);
          let userContext = JSON.parse(response).body;
          localStorage.setItem('userContext', JSON.stringify(userContext));
          this.router.navigate(['/home']);
        }
      },
      error: (err) => {
        this.errorMessage = err.error;
      }
    });
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }
}