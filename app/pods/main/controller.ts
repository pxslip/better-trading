// Vendors
import Controller from '@ember/controller';
import {action} from '@ember/object';
import {inject as service} from '@ember/service';

// Types
import LocalStorage from 'better-trading/services/local-storage';
import {MainMode} from 'better-trading/types/main';

export default class MainController extends Controller {
  @service('local-storage')
  localStorage: LocalStorage;

  currentMode: MainMode;

  init(): void {
    const initialMode =
      (this.localStorage.getValue('main-mode') as MainMode) || 'history';
    this.set('currentMode', initialMode);
  }

  @action
  navigateTo(mode: MainMode) {
    this.localStorage.setValue('main-mode', mode);
    this.set('currentMode', mode);
  }
}
