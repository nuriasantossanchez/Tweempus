import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile.component';
import { FavoriteTwimpsComponent } from './favorite-twimps/favorite-twimps.component';
import { MyTwimpsComponent } from './my-twimps/my-twimps.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [ProfileComponent, FavoriteTwimpsComponent, MyTwimpsComponent],
  exports: [ProfileComponent],
  imports: [CommonModule, SharedModule, ProfileRoutingModule],
})
export class ProfileModule {}
