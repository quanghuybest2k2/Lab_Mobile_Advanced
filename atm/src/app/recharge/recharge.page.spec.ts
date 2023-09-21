import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RechargePage } from './recharge.page';

describe('RechargePage', () => {
  let component: RechargePage;
  let fixture: ComponentFixture<RechargePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RechargePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
