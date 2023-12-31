import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthorService } from './author/author.service';
import { TwimpService } from './twimp/twimp.service';
import { TwimpCardComponent } from './twimp/twimp-card/twimp-card.component';
import { TwimpListComponent } from './twimp/twimp-list/twimp-list.component';
import { AuthorCardComponent } from './author/author-card/author-card.component';
import { SortByPipe } from './sort-by.pipe';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TwimpCardComponent, TwimpListComponent, AuthorCardComponent, SortByPipe],
  providers: [AuthorService, TwimpService],
  exports: [
    TwimpListComponent,
    TwimpCardComponent,
    AuthorCardComponent,
    RouterModule,
  ],
})
export class SharedModule {}
