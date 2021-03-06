import { Component, OnInit, Input } from '@angular/core';
import { faEnvelope, faMapMarkedAlt, faPhone, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() user;
faEnvelope = faEnvelope;
faMapMarkedAlt = faMapMarkedAlt;
faPhone = faPhone;
faDatabase = faDatabase;
  router: any;

  constructor(private route: ActivatedRoute) { }



  ngOnInit(): void {
  }

  goToItems() {
    this.router.navigate(['card']);
  }


}
