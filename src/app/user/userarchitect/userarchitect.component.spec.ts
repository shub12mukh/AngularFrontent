import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserarchitectComponent } from './userarchitect.component';

describe('UserarchitectComponent', () => {
  let component: UserarchitectComponent;
  let fixture: ComponentFixture<UserarchitectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserarchitectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserarchitectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
