import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
})
export class ActivityComponent implements OnInit {
  data: any = [];
  constructor(private Service: SharedService) {}

  ngOnInit(): void {
    this.getdata();
  }
  getdata(): any {
    this.Service.getUser().subscribe((response) => {
      response.data.length -= 15;
      this.data = response.data;
      console.log(response.data);
    });
  }
}
