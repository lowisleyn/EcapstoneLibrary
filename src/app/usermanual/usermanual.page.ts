import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-usermanual',
  templateUrl: './usermanual.page.html',
  styleUrls: ['./usermanual.page.scss'],
})
export class UsermanualPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  public goBack(): void {
    this.navController.navigateBack('/tabs/tab4');
  }

}