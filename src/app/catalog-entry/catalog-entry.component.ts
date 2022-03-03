import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog-entry',
  templateUrl: './catalog-entry.component.html',
  styleUrls: ['./catalog-entry.component.css']
})
export class CatalogEntryComponent implements OnInit {
  @Input() url = "";
  @Input() name = "No name";
  @Input() imgName = "";

  imgSrc = "";

  constructor() { }

  ngOnInit(): void {
    this.imgSrc = 'assets/img/catalogs/' + this.imgName +'.jpg';
  }

}
