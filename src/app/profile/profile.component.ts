import { Component, OnInit } from '@angular/core';
import { Author } from '../shared/author/author.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../shared/author/author.service';

@Component({
  selector: 'teewmpus-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  idAuthor: string | null = null;
  author: Author | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authorService: AuthorService) { }

  ngOnInit() {
    // this.observableId = this.route.params.pipe(
    //   switchMap((params: Params) => params['id']),
    // );
    // this.idAuthor = this.observableId.subscribe(id => id);
    this.idAuthor = this.route.snapshot.params['id'];
    this.authorService.getAuthor(this.idAuthor!).subscribe(author => this.author = author);
  }
}
