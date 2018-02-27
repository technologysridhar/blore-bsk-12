import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('App Title');
    this.meta.addTags(
      [
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Heroku Angular5 Demo' },
        { property: 'og:url', content: window.location.href },
        { property: 'og:title', content: 'Title for Facebook' },
        {
          property: 'og:description',
          content: 'This is the description for facebook'
        },
        {
          property: 'og:image',
          content:
            'https://firebasestorage.googleapis.com/v0/b/outdoor-lease-development.appspot.com/o/listings%2Fe11a3e13-fe7e-ab1d-f089-65f6f171aed3%2Fpexels-photo-102730.jpg?alt=media&token=33ed7d3c-b46e-46dc-aea2-bb0cb969e038'
        },
        { property: 'og:locale', content: 'en_US' },
        { property: 'fb:app_id', content: '1847116265300003' },
        { name: 'twitter:site', content: '@collinkueter' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:description', content: 'Twitter description' },
        { name: 'twitter:title', content: 'Twitter Title' },
        {
          name: 'twitter:image',
          content:
            'https://firebasestorage.googleapis.com/v0/b/outdoor-lease-development.appspot.com/o/listings%2Fe11a3e13-fe7e-ab1d-f089-65f6f171aed3%2Fpexels-photo-102730.jpg?alt=media&token=33ed7d3c-b46e-46dc-aea2-bb0cb969e038'
        }
      ],
      true
    );
  }
}
