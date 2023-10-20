import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColombiaApiComponent } from './colombia-api.component';

describe('ColombiaApiComponent', () => {
  let component: ColombiaApiComponent;
  let fixture: ComponentFixture<ColombiaApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColombiaApiComponent]
    });
    fixture = TestBed.createComponent(ColombiaApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
