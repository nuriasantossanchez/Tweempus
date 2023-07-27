import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../core/auth-guard.service';
import { CreateTwimpComponent } from './create-twimp.component';

const dashboardRoutes: Routes = [
  {
    path: 'create-twimp',
    component: CreateTwimpComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
})
export class CreateTwimpRoutingModule {}
