import { Component, OnInit } from '@angular/core';

import { UrlService } from 'src/app/url.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  dataIsDoneLoading: any;
  constructor(private urlService: UrlService) { }

  ngOnInit(): void {
    this.urlService.initializeData().subscribe(
      resp => {
        this.dataIsDoneLoading = resp.status;

        if(this.dataIsDoneLoading === 200){
          console.log("Data is done loading.");
        }
      }
    );
  }
  title = 'CaliberTrainerReport';
}
