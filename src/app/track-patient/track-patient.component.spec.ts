import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackPatientComponent } from './track-patient.component';

describe('TrackPatientComponent', () => {
  let component: TrackPatientComponent;
  let fixture: ComponentFixture<TrackPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
