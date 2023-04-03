import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.page.html',
  styleUrls: ['./card-details.page.scss'],
})
export class CardDetailsPage implements OnInit {
  public card: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private libraryService: LibraryService,
    private navController: NavController
  ) {}

  ngOnInit() {
    const cardJson = this.activatedRoute.snapshot.queryParamMap.get('card');
    if (cardJson) {
      this.card = JSON.parse(cardJson);
    }
  }
  

  public addToLibrary(): void {
    this.libraryService.addToLibrary(this.card);
    this.navController.navigateBack('/tabs/tab3');
  }

  openFile(url: string) {
    const firebaseStorageUrl = `https://firebasestorage.googleapis.com/v0/b/ecaps-31ffe.appspot.com/o/${encodeURIComponent(url)}?alt=media`;
    window.open(firebaseStorageUrl, '_system');
  }
  

  public goBack(): void {
    this.navController.navigateBack('/tabs/tab1');
  }
  
}