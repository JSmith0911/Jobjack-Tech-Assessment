import { Component, Query } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontEnd';
  search:'';
  http: any;

  onSubmit(search: NgForm) {
    this.search = search.value;
    console.log(this.search);

    this.http.get('/post', this.onSubmit)
  }
}
