import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private httpclient : HttpClient) { }

private API_URL = 'https://randomuser.me/api'

getUser(){
  return this.httpclient.get(this.API_URL);
}




}
