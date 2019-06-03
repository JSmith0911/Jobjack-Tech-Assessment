import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, Query } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GreetingComponent } from './components/greeting';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';


const routes: Routes = [
  {path: '',component: AppComponent}];
  
@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent
  ],
  imports: [
    AppModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
  })
  
  export class AppModule { };


  
@Injectable()
class DirectoryService {
  constructor(private http: HttpClient) {}

  getFilepath(name: string): Observable<Query> {
    return this.http.get<Query>('http://localhost:3000/api')
  }
}
