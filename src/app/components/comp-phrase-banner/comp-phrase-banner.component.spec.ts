import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPhraseBannerComponent } from './comp-phrase-banner.component';

describe('CompInfoBannerComponent', () => {
  let component: CompPhraseBannerComponent;
  let fixture: ComponentFixture<CompPhraseBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompPhraseBannerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompPhraseBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
