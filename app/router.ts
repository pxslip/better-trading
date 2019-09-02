import EmberRouter from '@ember/routing/router';
import config from './config/environment';

class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('main', {path: '/'});
});

export default Router;
