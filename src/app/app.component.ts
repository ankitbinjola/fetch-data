import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Api-App';
  user : any;


constructor(private userservice: UserService, private toastr : ToastrService){}


ngOnInit(){
  this.userservice.getUser().subscribe(( url: any) => {
    this.user = url.results[0];    
    console.log(this.user);
  }, error=>{this.toastr.error(error.status, 'oops')} );
}


}
