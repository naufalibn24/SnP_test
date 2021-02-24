import { Component, OnInit } from '@angular/core';

import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  data: any = [];
  image: any = [];
  profile: any;

  constructor(private Service: SharedService) {}

  ngOnInit(): void {
    this.getdata();
    this.getpicture();
  }

  getdata() {
    this.Service.getUser().subscribe((result) => {
      result.data.length -= 15;
      this.data = result.data.slice(0, 2);
      this.image = result.data.slice(3, 5);
    });
  }
  getpicture() {
    this.Service.getphoto().subscribe((result) => {
      console.log(result);
      this.profile = result.download_url;
    });
  }
}
