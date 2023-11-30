import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class LoginService {

    url = "https://dummyjson.com/products/add";

    constructor(private http: HttpClient) {}

    login(email: string, password: string): Observable<any> {
        const body = new HttpParams().set('email', email).set('password', password);
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(this.url, body.toString, {headers});
    }
    
}