import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [CommonModule, LoginRoutingModule, ReactiveFormsModule],
  declarations: [LoginComponent, SignupComponent],
  exports: [LoginComponent],
})
export class LoginModule {}
