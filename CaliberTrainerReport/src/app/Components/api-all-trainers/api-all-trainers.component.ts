import { Component, OnInit } from '@angular/core';
import { GetTrainerService } from 'src/app/get-trainer.service';

@Component({
  selector: 'app-api-all-trainers',
  templateUrl: './api-all-trainers.component.html',
  styleUrls: ['./api-all-trainers.component.css']
})
export class ApiAllTrainersComponent implements OnInit {

  constructor(private trainerService : GetTrainerService) { }

  ngOnInit(): void {
    this.getAllTrainers();
  }

  getAllTrainers(){
    this.trainerService.getAllTrainers().subscribe((response)=>{
      console.log(response);
    }, (response)=>{console.log(response)} )
  }

}
