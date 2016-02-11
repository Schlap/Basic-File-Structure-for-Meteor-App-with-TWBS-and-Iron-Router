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
  this.route('studentRegistrationForm', {
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
  this.route('editProfile', {
    path: '/edit-profile',
    template: 'dashboard',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'editProfile': { to: 'aside'}
    }
  });
  this.route('tutorAccount', {
    path: '/tutor-account',
    template: 'dashboard',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'tutorAccount': { to: 'aside'}
    }
  });
  this.route('studentAccount', {
    path: '/student-account',
    template: 'dashboard',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'studentAccount': { to: 'aside'}
    }
  });

  this.route('accountType', {
    path: '/account-type'
  });
  this.route('tutorRegistrationForm', {
    path: '/tutor-registration-form'
  });
  this.route('tutorsList', {
    path: '/tutors-list'
  });
  this.route('myProfile', {
    path: '/my-profile'
  });
});
