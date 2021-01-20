import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Trainer } from '../class/trainer';
import { ErrorHandlerService } from './error-handler.service';
import { LocalStorageService } from './local-storage.service';

import { TrainerService } from './trainer.service';
import { UrlService } from './url.service';

describe('TrainerService', () => {
  let service: TrainerService;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers: [TrainerService, UrlService, ErrorHandlerService, LocalStorageService]
    });
    service = TestBed.inject(TrainerService);
  });

  it('should be created', () => {
    const service: TrainerService = TestBed.get(TrainerService);
    expect(service).toBeTruthy();
  });

  it('should set currentTrainers after getting trainer list', async() => {
    sessionStorage.setItem('currentTrainers', undefined);
    await service.getTrainerList();
    expect(sessionStorage.getItem('currentTrainers')).toBeTruthy();
  });

  it('should get all trainers', () => {
    expect(service.getAllTrainers()).toBeTruthy();
  });

  it('should get a list of trainers', () => {
    expect(service.setTrainerList([])).toBeTruthy();
  });

  it('should get selected value of some sort', () => {
    let trainer:Trainer[] = [{
      id: 1,
      firstName: 'name',
      lastName: 'name',
      email: 'email'
    }];
    sessionStorage.setItem('currentTrainers', JSON.stringify(trainer));
    service.getSelectedValue([]);
    expect(sessionStorage.getItem('selectedId')).toEqual('1');
    
    sessionStorage.clear();

    let fakeTrainer:Trainer[] = [];
    sessionStorage.setItem('currentTrainers', JSON.stringify(fakeTrainer));
    service.getSelectedValue([]);
    expect(sessionStorage.getItem('selectedId')).toEqual(null);
  });
});
