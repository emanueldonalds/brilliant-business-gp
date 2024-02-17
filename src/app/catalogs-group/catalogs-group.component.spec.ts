import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogsGroupComponent } from './catalogs-group.component';

describe('CatalogsGroupComponent', () => {
  let component: CatalogsGroupComponent;
  let fixture: ComponentFixture<CatalogsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogsGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
