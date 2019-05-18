import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunbookListComponent } from './runbook-list.component';

describe('RunbookListComponent', () => {
  let component: RunbookListComponent;
  let fixture: ComponentFixture<RunbookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunbookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunbookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
