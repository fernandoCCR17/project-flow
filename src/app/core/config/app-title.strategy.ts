import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable()
export class AppTitleStrategy extends TitleStrategy {

  private readonly appTitle = 'ProjectFlow';

  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot): void {
    const routeTitle = this.buildTitle(routerState);

    if (routeTitle) {
      this.title.setTitle(`${this.appTitle} | ${routeTitle}`);
      return;
    }

    this.title.setTitle(this.appTitle);
  }
}