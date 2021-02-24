import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
})
export class DocumentsComponent implements OnInit {
  data: any = [];
  pict: any = [];
  constructor(private Service: SharedService) {}

  ngOnInit(): void {
    this.getdata();
  }

  getdata(): any {
    this.Service.getData().subscribe((response) => {
      console.log(response.data);
      this.pict = response.data.slice(2, 4);
      response.data.length -= 6;
      this.data = response.data;
    });
  }
}
