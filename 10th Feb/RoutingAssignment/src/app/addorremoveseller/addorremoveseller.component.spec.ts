import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorremovesellerComponent } from './addorremoveseller.component';

describe('AddorremovesellerComponent', () => {
  let component: AddorremovesellerComponent;
  let fixture: ComponentFixture<AddorremovesellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddorremovesellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddorremovesellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
