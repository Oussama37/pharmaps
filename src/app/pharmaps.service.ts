import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PharmapsService {
  PATH_OF_API = 'http://localhost:8080';
  constructor(private httpclient: HttpClient ) { }

  public getposition(){
    return this.httpclient.get(this.PATH_OF_API + "/map/pharmas");
  }
}
