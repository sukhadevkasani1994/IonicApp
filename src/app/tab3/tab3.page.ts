import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  providers : [AppService]
})
export class Tab3Page implements OnInit {

  UsersList = [];

  constructor(public service: AppService) { }

  ngOnInit() {
    this.LoadUsers();
  }

  LoadUsers() {
    this.service.GetUsers().subscribe(data => {
      this.UsersList = data.data;
      console.log(this.UsersList);

    })
  }

}
