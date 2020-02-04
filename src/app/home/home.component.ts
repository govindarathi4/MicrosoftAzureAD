import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  createInfrastructure = () => {
    this.http.get('https://clean-room-builder-api.azurewebsites.net/api/buildcleanroom', {
      headers: {
          'Authorization': 'Bearer ' + localStorage['msal.idtoken']        
      }
    }).subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    })
  }
}
