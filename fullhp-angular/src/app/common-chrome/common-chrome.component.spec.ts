import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonChromeComponent } from './common-chrome.component';

describe('CommonChromeComponent', () => {
  let component: CommonChromeComponent;
  let fixture: ComponentFixture<CommonChromeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonChromeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonChromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
