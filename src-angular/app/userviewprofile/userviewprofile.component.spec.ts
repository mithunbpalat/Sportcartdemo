import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewprofileComponent } from './userviewprofile.component';

describe('UserviewprofileComponent', () => {
  let component: UserviewprofileComponent;
  let fixture: ComponentFixture<UserviewprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserviewprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserviewprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
