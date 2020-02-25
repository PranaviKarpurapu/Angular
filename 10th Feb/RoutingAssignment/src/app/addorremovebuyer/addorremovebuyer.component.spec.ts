import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorremovebuyerComponent } from './addorremovebuyer.component';

describe('AddorremovebuyerComponent', () => {
  let component: AddorremovebuyerComponent;
  let fixture: ComponentFixture<AddorremovebuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddorremovebuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddorremovebuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
