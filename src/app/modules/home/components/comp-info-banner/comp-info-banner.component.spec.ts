import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompInfoBannerComponent } from './comp-info-banner.component';

describe('CompInfoBannerComponent', () => {
  let component: CompInfoBannerComponent;
  let fixture: ComponentFixture<CompInfoBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompInfoBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompInfoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
