import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogEntryComponent } from './catalog-entry.component';

describe('CatalogEntryComponent', () => {
  let component: CatalogEntryComponent;
  let fixture: ComponentFixture<CatalogEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
