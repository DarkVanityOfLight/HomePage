import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeMainContainerComponent } from './about-me-main-container.component';

describe('AboutMeMainContainerComponent', () => {
  let component: AboutMeMainContainerComponent;
  let fixture: ComponentFixture<AboutMeMainContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMeMainContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeMainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
