import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompParalBannerComponent } from './comp-paral-banner.component';

describe('CompParalBannerComponent', () => {
  let component: CompParalBannerComponent;
  let fixture: ComponentFixture<CompParalBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompParalBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompParalBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
