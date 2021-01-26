import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {
  baseUrl = 'https://localhost:6101/api/';
  validationErrors: string[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  get404Error() {
    this.http.get(this.baseUrl + 'buggy/not-found').subscribe(resposne => {
      console.log(resposne);
    }, error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line: typedef
  get400Error() {
    this.http.get(this.baseUrl + 'buggy/bad-request').subscribe(resposne => {
      console.log(resposne);
    }, error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line: typedef
  get500Error() {
    this.http.get(this.baseUrl + 'buggy/server-error').subscribe(resposne => {
      console.log(resposne);
    }, error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line: typedef
  get401Error() {
    this.http.get(this.baseUrl + 'buggy/auth').subscribe(resposne => {
      console.log(resposne);
    }, error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line: typedef
  get400ValidationError() {
    this.http.post(this.baseUrl + 'account/register', {}).subscribe(resposne => {
      console.log(resposne);
    }, error => {
      console.log(error);
      this.validationErrors = error;
    });
  }

}
