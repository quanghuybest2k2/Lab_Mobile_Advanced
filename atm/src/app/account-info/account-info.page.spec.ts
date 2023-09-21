import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountInfoPage } from './account-info.page';

describe('AccountInfoPage', () => {
  let component: AccountInfoPage;
  let fixture: ComponentFixture<AccountInfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AccountInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
