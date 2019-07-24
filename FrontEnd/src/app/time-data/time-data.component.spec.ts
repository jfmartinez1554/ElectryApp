import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeDataComponent } from './time-data.component';

describe('TimeDataComponent', () => {
  let component: TimeDataComponent;
  let fixture: ComponentFixture<TimeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
