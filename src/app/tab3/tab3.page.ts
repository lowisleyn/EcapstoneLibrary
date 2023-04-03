import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LibraryService } from '../services/library.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnDestroy {
  public library: any[] = [];
  private libraryChangeSub: Subscription | null = null;

  constructor(private libraryService: LibraryService, private dataService: DataService) {}

  openFile(url: string) {
    const firebaseStorageUrl = `https://firebasestorage.googleapis.com/v0/b/ecaps-31ffe.appspot.com/o/${encodeURIComponent(url)}?alt=media`;
    window.open(firebaseStorageUrl, '_system');
  }
  

  ionViewDidEnter() {
    this.library = this.libraryService.getLibrary();
    this.libraryChangeSub = this.libraryService.libraryChange$.subscribe((library: any[]) => {
      this.library = library;
    });
  }

  ionViewWillLeave() {
    if (this.library.length > 0) {
      this.dataService.saveData(this.library);
    }
  }

  ngOnDestroy() {
    if (this.libraryChangeSub) {
      this.libraryChangeSub.unsubscribe();
    }
  }

  loadData() {
    const data = this.dataService.loadData();
    if (data) {
      this.libraryService.setLibrary(data);
    }
  }
  
}
