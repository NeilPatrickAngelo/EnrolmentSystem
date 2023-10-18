import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import * as fs from 'fs';
// import * as studentData from '/users.json';
declare const getUser: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../style.component.css']
})
export class LoginComponent implements OnInit {
  // userNames = getUser();
  userNames = '';
  url: string = '/assets/data/users.json';
  studentData:any;

  // ngOnInit() {
  //   console.log('Data', this.data);
  // }
  
  constructor(private router: Router){}
  
  
  submitLogin(username: string, password: string){
    // this.userNames = username + ' - ' + password;
    fetch(this.url).then(res => res.json())
    .then(json => {
      this.userNames = 'lastName: '+json[0]['lastName'];
    });
    // this.router.navigateByUrl('/enrolment');
  }

  ngOnInit() {
  }
}
