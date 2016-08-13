export class RecipeAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ra-root h1')).getText();
  }
}
