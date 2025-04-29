import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollAnimation2Component } from './scroll-animation2.component';

describe('ScrollAnimation2Component', () => {
  let component: ScrollAnimation2Component;
  let fixture: ComponentFixture<ScrollAnimation2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollAnimation2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollAnimation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
