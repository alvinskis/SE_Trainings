import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeChartDataComponent } from './employee-chart-data.component';

describe('EmployeeChartDataComponent', () => {
  let component: EmployeeChartDataComponent;
  let fixture: ComponentFixture<EmployeeChartDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeChartDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeChartDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
