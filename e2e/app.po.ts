import { browser, by, element } from 'protractor';

export class P9PlatziAngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mvat-root h1')).getText();
  }
}
