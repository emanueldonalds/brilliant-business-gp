import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  translateService: TranslateService;
  constructor(translateService: TranslateService) { 
    this.translateService = translateService;
  }

  ngOnInit(): void {

  }

  setLang(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem('lang', lang);
  }

}
