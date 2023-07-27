import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';

import { AuthorService } from '../shared/author/author.service';
import { AuthenticationService } from '../core/authentication.service';
import { TwimpService } from '../shared/twimp/twimp.service';
import { Twimp } from '../shared/twimp/twimp.model';

@Component({
  selector: 'teewmpus-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  twimpList: Twimp[] = [];

  constructor(
    private authorService: AuthorService,
    private twimpService: TwimpService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    // this.authorService
    //   .getAuthor('1')
    //   .subscribe((author) => console.log(author));

    // this.twimpService
    //   .getTwimps()
    //   .subscribe((twimps) => (this.twimpList = twimps));

    this.twimpService.getTwimps().subscribe((twimps) => {
      let observableArray = from(twimps);
      observableArray.subscribe((twimp) => {
        this.authorService.getAuthor(twimp.author.id).subscribe((author) => {
          twimp.author = author;
          this.twimpService
            .getFavoritesByAuthor(this.authService.token.idAuthor, twimp.id)
            .subscribe((favorite) => {
              twimp.favorite = favorite;
              this.twimpList.push(twimp);
            });
        });
      });
    });

  }
}
