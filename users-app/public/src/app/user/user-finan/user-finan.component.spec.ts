import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFinanComponent } from './user-finan.component';

describe('UserFinanComponent', () => {
  let component: UserFinanComponent;
  let fixture: ComponentFixture<UserFinanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFinanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFinanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
