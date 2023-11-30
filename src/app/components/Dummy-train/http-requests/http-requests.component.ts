import { Component } from '@angular/core';
import { HttpRequestsService } from '../http-requests.service';

@Component({
  selector: 'app-http-requests',
  templateUrl: './http-requests.component.html',
  styleUrl: './http-requests.component.css'
})

export class HttpRequestsComponent {

  constructor(private httpService: HttpRequestsService) {}

  omClick() {
    console.log("Clicked");
    alert("clicked")
  }

  getproduct() {
    this.httpService.getProducts();
    alert("Clicked")
  }
}
