import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;

  constructor(private http: HttpClient) {}
  ngOnInit() {
     this.getUsers();
  }

  getUsers() {
    this.http.get('https://localhost:6101/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    });
  }
}