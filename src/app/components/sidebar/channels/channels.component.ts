import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css'],
})
export class ChannelsComponent implements OnInit {
  data: any = [];
  constructor(private Service: SharedService) {}

  ngOnInit(): void {
    this.getdata();
  }
  getdata() {
    return this.Service.getchannel().subscribe((result) => {
      console.log(result);
      this.data = result;
    });
  }
}
