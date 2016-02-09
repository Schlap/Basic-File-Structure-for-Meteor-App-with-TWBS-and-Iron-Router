Template.layout.events({
  'click li.login-link': function (event) {
    event.preventDefault()
    Modal.show('login');
  }
});
