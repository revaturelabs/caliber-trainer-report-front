import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from './url.service';
import { finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  fileList: string[] = new Array<string>();
  private fileList$: Subject<string[]> = new Subject<string[]>();
  private displayLoader$: Subject<boolean> = new BehaviorSubject<boolean>(false);
  private regHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private urlService: UrlService){}

    public isLoading(): Observable<boolean> {
      return this.displayLoader$;
    }

    public upload(fileName: string, fileContent: string): void {
      if (fileName && fileContent) {
        const body = fileContent;
        this.displayLoader$.next(true);
        setTimeout( () => {this.http.post(this.urlService.getUrl() + 'JSONController', body,
          {headers: this.regHeaders, withCredentials: true})
          .pipe(finalize(() => this.displayLoader$.next(false)))
          .subscribe(res => {
            this.fileList.push(fileName);
            this.fileList$.next(this.fileList);
            location.reload();
          }, error => {
              this.displayLoader$.next(false);
          });
        }); // pacman timeout
      }
    }

    public list(): Observable<string[]> {
      return this.fileList$;
    }

    private addFileToList(fileName: string): void {
      this.fileList.push(fileName);
      this.fileList$.next(this.fileList);
    }
}
