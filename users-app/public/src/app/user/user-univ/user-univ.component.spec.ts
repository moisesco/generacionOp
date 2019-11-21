import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUnivComponent } from './user-univ.component';

describe('UserUnivComponent', () => {
  let component: UserUnivComponent;
  let fixture: ComponentFixture<UserUnivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserUnivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUnivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
