import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRouteFormComponent } from './new-route-form.component';

describe('NewRouteFormComponent', () => {
  let component: NewRouteFormComponent;
  let fixture: ComponentFixture<NewRouteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRouteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRouteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
