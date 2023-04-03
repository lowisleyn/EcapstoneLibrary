import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.page.html',
  styleUrls: ['./faqs.page.scss'],
})
export class FaqsPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  public goBack(): void {
    this.navController.navigateBack('/tabs/tab4');
  }

}