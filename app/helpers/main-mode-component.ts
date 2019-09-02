// Vendors
import {helper} from '@ember/component/helper';

// Types
import {MainMode} from 'better-trading/types/main';

export function MainModeComponents([mode]: [MainMode]): string {
  return {
    favorites: 'bt-page/favorites',
    history: 'bt-page/history'
  }[mode];
}

export default helper(MainModeComponents);
