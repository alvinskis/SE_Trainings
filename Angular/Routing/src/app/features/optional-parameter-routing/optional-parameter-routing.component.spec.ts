import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalParameterRoutingComponent } from './optional-parameter-routing.component';

describe('OptionalParameterRoutingComponent', () => {
  let component: OptionalParameterRoutingComponent;
  let fixture: ComponentFixture<OptionalParameterRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionalParameterRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionalParameterRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
