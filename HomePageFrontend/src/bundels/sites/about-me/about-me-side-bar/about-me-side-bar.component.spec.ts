import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeSideBarComponent } from './about-me-side-bar.component';

describe('AboutMeSideBarComponent', () => {
  let component: AboutMeSideBarComponent;
  let fixture: ComponentFixture<AboutMeSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMeSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
