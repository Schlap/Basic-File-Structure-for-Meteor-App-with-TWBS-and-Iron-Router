Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  this.route('index', {
    path: '/'
  });
  this.route('howItWorks', {
    path: '/how-it-works'
  });
  this.route('register', {
    path: '/register'
  });
  this.route('dashboard', {
    path: '/dashboard'
  });
  this.route('inbox', {
    path: '/inbox',
    template: 'dashboard',
    layoutTemplate: 'layout',
    yieldTemplates: {'inbox' : { to: 'inbox' }}
  });
  this.route('accountType', {
    path: '/account-type'
  });
});
