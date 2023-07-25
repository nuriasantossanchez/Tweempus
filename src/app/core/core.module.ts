import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { AuthenticationService } from './authentication.service';


@NgModule({
  declarations: [HeaderComponent, NavComponent],
  imports: [CommonModule, RouterModule, HttpClientModule] ,
  providers: [AuthGuardService, AuthenticationService],
  exports: [HeaderComponent, NavComponent],
})
export class CoreModule {}
