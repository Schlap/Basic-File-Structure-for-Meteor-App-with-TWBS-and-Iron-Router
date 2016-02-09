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
    path: '/student-registration-form'
  });
  this.route('dashboard', {
    path: '/dashboard',
  });
  this.route('inbox', {
    path: '/inbox',
    template: 'dashboard',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'inbox' : { to: 'aside' }
    }
  });
  this.route('myProfile', {
    path: '/my-profile',
    template: 'dashboard',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'myProfile': { to: 'aside'}
    }
  });
  this.route('account', {
    path: '/account',
    template: 'dashboard',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'account': { to: 'aside'}
    }
  });
  this.route('accountType', {
    path: '/account-type'
  });
  this.route('tutorRegistrationForm', {
    path: '/tutor-registration-form'
  });

});
