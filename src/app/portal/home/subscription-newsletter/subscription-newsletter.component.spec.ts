import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionNewsletterComponent } from './subscription-newsletter.component';

describe('SubscriptionNewsletterComponent', () => {
  let component: SubscriptionNewsletterComponent;
  let fixture: ComponentFixture<SubscriptionNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionNewsletterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
