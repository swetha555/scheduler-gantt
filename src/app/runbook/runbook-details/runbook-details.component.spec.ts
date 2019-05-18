import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunbookDetailsComponent } from './runbook-details.component';

describe('RunbookDetailsComponent', () => {
  let component: RunbookDetailsComponent;
  let fixture: ComponentFixture<RunbookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunbookDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunbookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
