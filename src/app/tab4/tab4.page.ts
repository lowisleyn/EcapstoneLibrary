import { Component} from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page{

  constructor(private themeService: ThemeService, private router:Router) {}

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }
  ab(){
    this.router.navigate(['about'])
  }
  fqs(){
    this.router.navigate(['faqs'])
  }
  um(){
    this.router.navigate(['usermanual'])
  }
}