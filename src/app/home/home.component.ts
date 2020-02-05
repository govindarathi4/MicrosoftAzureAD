import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as decoder from 'jwt-decode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) {
    let token = localStorage['msal.idtoken'];
    if (token) {
      let decodedToken = decoder(token);
      if (decodedToken) {
        this.loggedInUser = decodedToken['name'];
      }
    }
  }

  public response: string = '';
  public loggedInUser: string = '';

  ngOnInit() {
  }

  createInfrastructure = () => {
    this.response = "Sending request to start building Clean Room";
    this.http.get('https://clean-room-builder-api.azurewebsites.net/api/buildcleanroom'//, {
      //   headers: {
      //       'Authorization': 'Bearer ' + localStorage['msal.idtoken']        
      //   }
      // }
    ).subscribe(res => {
      console.log(res);
      this.response = "Clean room build process started. (Note: It takes a while to complete the process)";
    }, error => {
      console.log(error);
      this.response = "Clean room build process failed to start. Please connect with System Admin.";
    })
  }
}
