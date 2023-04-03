import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  private library: any[] = [];
  public libraryChange$: Subject<any[]> = new Subject<any[]>();
  public filteredLibrary: Subject<any[]> = new Subject<any[]>(); // declare filteredLibrary variable

  constructor(private dataService: DataService) { }

  public addToLibrary(item: any): void {
    this.library.push(item);
    this.libraryChange$.next(this.library);
    this.dataService.saveData(this.library);
  }

  public getLibrary(): any[] {
    return this.library;
  }

  public setLibrary(library: any[]): void {
    this.library = library;
    this.libraryChange$.next(this.library);
  }
}
