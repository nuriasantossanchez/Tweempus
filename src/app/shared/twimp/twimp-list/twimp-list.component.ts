import { Component, Input, OnInit } from '@angular/core';

import { Twimp } from '../twimp.model';
import { Author } from '../../author/author.model';

@Component({
  selector: 'tweewmpus-twimp-list',
  templateUrl: './twimp-list.component.html',
  styleUrls: ['./twimp-list.component.css'],
})
export class TwimpListComponent {
  // text: string =
  //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur sodales libero, sit amet  posuere arcu consectetur ut. Nam volutpat ligula ac  nunc consectetur vestibulum.';
  // authors: Author[] = [];
  @Input() twimps: Twimp[] = [];

  // ngOnInit() {
  //   this.authors.push(new Author('1'));
  //   //datos: el array de twimps, seran datos que le lleguen de otro componente, los recibira del dashboard
  //   this.twimps.push(
  //     new Twimp('1', '', this.authors[0], this.text, '01/01/2023')
  //   );
  //   this.twimps.push(
  //     new Twimp('2', '', this.authors[0], this.text, '01/01/2023')
  //   );
  //   this.twimps.push(
  //     new Twimp('3', '', this.authors[0], this.text, '01/01/2023')
  //   );
  //   this.twimps.push(
  //     new Twimp('4', '', this.authors[0], this.text, '01/01/2023')
  //   );
  // }
}
