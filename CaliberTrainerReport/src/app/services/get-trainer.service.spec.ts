import { HttpClientModule } from '@angular/common/http';
import { UrlService } from './url.service';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../environments/environment'

import { GetTrainerService } from './get-trainer.service';

describe('GetTrainerService', () => {
  let service: GetTrainerService;
  let urlServ: UrlService;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[GetTrainerService, UrlService]
    });
    service = TestBed.inject(GetTrainerService);
    urlServ = TestBed.inject(UrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set the currentTrainers item for session storage upon successful getTrainerList()', async() => {
    console.log(await service.getTrainerList());
    expect(sessionStorage.getItem('currentTrainers')).toEqual('[]');
  });

  it('should get all the trainers', async() => {
    const trainers = await service.getAllTrainers().toPromise();
    expect(trainers).toBeTruthy();
    expect(trainers.length).toBeGreaterThan(0);
  });

});
