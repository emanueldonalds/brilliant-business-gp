import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { CatalogsComponent } from './catalogs/catalogs.component';
import { ContactComponent } from './contact/contact.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CatalogEntryComponent } from './catalog-entry/catalog-entry.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FrontPageComponent,
    CatalogsComponent,
    ContactComponent,
    FooterComponent,
    CatalogEntryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader) ,
        deps: [HttpClient]
      },
      defaultLanguage: 'sv'
    }),
    RouterModule.forRoot([
      {path: '', component: FrontPageComponent},
      {path: 'catalogs', component: CatalogsComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
