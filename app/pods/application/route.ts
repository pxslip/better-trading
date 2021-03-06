// Vendor
import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

// Types
import ItemResults from 'better-trading/services/item-results';
import IntlService from 'ember-intl/services/intl';
import DexieService from 'better-trading/services/dexie';
import Bookmarks from 'better-trading/services/bookmarks';

// Constants
const DEFAULT_LOCALE = 'en';

export default class ApplicationRoute extends Route {
  @service('bookmarks')
  bookmarks: Bookmarks;

  @service('intl')
  intl: IntlService;

  @service('item-results')
  itemResults: ItemResults;

  @service('dexie')
  dexie: DexieService;

  beforeModel() {
    this.intl.setLocale(DEFAULT_LOCALE);
    this.itemResults.watchResults();
    this.dexie.initialize();
  }

  async model() {
    // TODO: remove after Delirium league
    return this.bookmarks.migrateFromLocalStorage();
  }
}
