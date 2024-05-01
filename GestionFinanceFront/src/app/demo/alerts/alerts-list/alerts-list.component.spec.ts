import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsListComponent } from './alerts-list.component';

describe('AlertsListComponent', () => {
  let component: AlertsListComponent;
  let fixture: ComponentFixture<AlertsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertsListComponent]
    });
    fixture = TestBed.createComponent(AlertsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
