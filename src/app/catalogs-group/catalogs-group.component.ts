import { Component, Input } from '@angular/core';
import { Catalog } from '../models/Catalog';

@Component({
  selector: 'app-catalogs-group',
  templateUrl: './catalogs-group.component.html',
  styleUrls: ['./catalogs-group.component.css'],
})
export class CatalogsGroupComponent {
  @Input() group: Catalog[] = [];
  constructor() {}
}
