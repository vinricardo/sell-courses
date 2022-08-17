import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { InviteComponent } from './invite/invite.component';
import { ListCourseComponent } from './list-course/list-course.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { StatsComponent } from './stats/stats.component';
import { SubscriptionNewsletterComponent } from './subscription-newsletter/subscription-newsletter.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { WhyUsComponent } from './why-us/why-us.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  @ViewChild('header', { read: ViewContainerRef })
  entryHeader?: ViewContainerRef;
  @ViewChild('presentation', { read: ViewContainerRef })
  entryPresentation?: ViewContainerRef;
  @ViewChild('stats', { read: ViewContainerRef }) entryStats?: ViewContainerRef;
  @ViewChild('invite', { read: ViewContainerRef })
  entryInvite?: ViewContainerRef;
  @ViewChild('list', { read: ViewContainerRef }) entryList?: ViewContainerRef;
  @ViewChild('about', { read: ViewContainerRef })
  entryAboutUs?: ViewContainerRef;
  @ViewChild('why', { read: ViewContainerRef }) entryWhyUs?: ViewContainerRef;
  @ViewChild('thumbnail', { read: ViewContainerRef })
  entryThumbnail?: ViewContainerRef;
  @ViewChild('reviews', { read: ViewContainerRef })
  entryReviews?: ViewContainerRef;
  @ViewChild('newsletter', { read: ViewContainerRef })
  entryNewsletter?: ViewContainerRef;
  @ViewChild('footer', { read: ViewContainerRef })
  entryFooter?: ViewContainerRef;
  constructor() {}

  ngOnInit(): void {}

  ngAfterContentChecked(): void {
    this.clearEntries()
    this.entryHeader?.createComponent(HeaderComponent);
    this.entryPresentation?.createComponent(PresentationComponent);
    this.entryStats?.createComponent(StatsComponent);
    this.entryInvite?.createComponent(InviteComponent);
    this.entryList?.createComponent(ListCourseComponent);
    this.entryAboutUs?.createComponent(AboutUsComponent);
    this.entryWhyUs?.createComponent(WhyUsComponent);
    this.entryThumbnail?.createComponent(ThumbnailComponent);
    this.entryReviews?.createComponent(ReviewsComponent);
    this.entryNewsletter?.createComponent(SubscriptionNewsletterComponent);
    this.entryFooter?.createComponent(FooterComponent);
  }

  clearEntries(){
    this.entryHeader?.clear();
    this.entryPresentation?.clear();
    this.entryStats?.clear();
    this.entryInvite?.clear();
    this.entryList?.clear();
    this.entryAboutUs?.clear();
    this.entryWhyUs?.clear();
    this.entryThumbnail?.clear();
    this.entryReviews?.clear();
    this.entryNewsletter?.clear();
    this.entryFooter?.clear();
  }
}
