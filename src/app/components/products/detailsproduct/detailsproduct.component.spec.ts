import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsproductComponent } from './detailsproduct.component';

describe('DetailsproductComponent', () => {
  let component: DetailsproductComponent;
  let fixture: ComponentFixture<DetailsproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
