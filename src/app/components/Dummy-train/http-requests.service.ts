import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class HttpRequestsService {

    url = "https://dummyjson.com/products/1";

    constructor(private http: HttpClient) {}

    getProducts() {
        this.http.get(this.url).subscribe((res) => {
            console.log(res);
        })
    }
}