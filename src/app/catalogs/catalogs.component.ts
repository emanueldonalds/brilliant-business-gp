import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Catalog } from '../models/Catalog';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.css'],
})
export class CatalogsComponent implements OnInit {
  catalogs: Catalog[] = [];
  catalogGroups: { [key: string]: Catalog[] } = {};

  constructor(client: HttpClient) {
    client.get('assets/img/catalogs/metadata.json').subscribe((data) => {
      this.catalogs = data as Catalog[];
      this.catalogs.forEach((catalog: Catalog) => {
        if (!this.catalogGroups[catalog.category]) {
          this.catalogGroups[catalog.category] = [];
        }
        this.catalogGroups[catalog.category].push(catalog);
      });
    });
  }

  ngOnInit(): void {}
}
