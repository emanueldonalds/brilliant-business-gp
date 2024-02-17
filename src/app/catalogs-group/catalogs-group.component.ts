import { Component, Input } from '@angular/core';
import { Catalog } from '../models/Catalog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalogs-group',
  templateUrl: './catalogs-group.component.html',
  styleUrls: ['./catalogs-group.component.css'],
})
export class CatalogsGroupComponent {
  @Input() group: Catalog[] = [];
  categoryName: string = '';
  constructor() {
    this.categoryName = this.group[0]?.category || '';
  }
}
