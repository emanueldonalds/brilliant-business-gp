import { Component, Input, OnInit } from '@angular/core';
import { Catalog } from '../models/Catalog';

@Component({
  selector: 'app-catalog-entry',
  templateUrl: './catalog-entry.component.html',
  styleUrls: ['./catalog-entry.component.css'],
})
export class CatalogEntryComponent implements OnInit {
  @Input() catalog: Catalog | undefined = undefined;

  constructor() {}

  ngOnInit(): void {}
}
