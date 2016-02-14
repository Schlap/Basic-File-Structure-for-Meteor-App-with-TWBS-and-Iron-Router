// reroute to login page if not logged in and trying to access restricted route
var loginRequired = function () {
  if(!Meteor.userId()){
    this.render('loginPage');
  } else {
    this.next();
  }
}

var restrictedRoutes = ['dashboard', 'userProfile', 'inbox', 'editProfile', 'tutorAccount', 'studentAccount', 'myProfile']
Router.onBeforeAction(loginRequired, { only: restrictedRoutes });

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function () {
    return [Meteor.subscribe('tutorsList'), Meteor.subscribe('subjects')];
  },
  data: function () { return Meteor.subscribe('users')}
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
  this.route('mySubjects', {
    path: '/my-subjects',
    template: 'dashboard',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'mySubjects': { to: 'aside'}
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
  this.route('userProfile', {
    path: '/profiles/:_id',
    data: function () {
      return Meteor.users.findOne({_id: this.params._id});
    }
  });
  this.route('myProfile', {
    path: '/my-profile'
  });
  this.route('subjectsList', {
    path: '/subjects-list'
  });
});
