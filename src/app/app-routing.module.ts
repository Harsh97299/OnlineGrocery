// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components here
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TransactionComponent } from './components/transaction/transaction.component';

// Import guards if you have them
// import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  // Default route - redirects to home
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  // Home page
  { path: 'home', component: HomePageComponent },
  
  // Authentication routes
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegistrationComponent },
  
  // Transaction route
  { path: 'transaction', component: TransactionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }