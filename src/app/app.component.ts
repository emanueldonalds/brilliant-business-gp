import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'brilliant-business';

  constructor(translate: TranslateService) {
    if (localStorage.getItem('lang')) {
      var lang: string = localStorage.getItem('lang') as string;
      translate.setDefaultLang(lang);
      translate.use(lang);
    }
    else {
      translate.setDefaultLang('sv');
      translate.use('sv');
    }
  }
}
