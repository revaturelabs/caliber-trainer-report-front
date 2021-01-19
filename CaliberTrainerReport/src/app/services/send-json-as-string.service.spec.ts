import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { SendJSONAsStringService } from './send-json-as-string.service';

describe('SendJSONAsStringService', () => {
  let service: SendJSONAsStringService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SendJSONAsStringService]
    });
    service = TestBed.inject(SendJSONAsStringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a json string to the back-end', (done: DoneFn) => {
    let json = JSON.stringify({
      id: 1,
      firstName: 'name',
      lastName: 'name',
      email: 'email'
    });

    service.sendJSON(json).subscribe(resp => {
      console.log(resp);
      expect(resp).toBeTruthy();
    });

  });
});
