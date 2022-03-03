import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'brilliant-business';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('sv');
    translate.use('sv');
  }
}
