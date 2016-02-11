Template.editProfile.events({
  'submit .form-group': function (event) {
    event.preventDefault();
    var firstName = event.target.firstName.value;
    var lastName = event.target.lastName.value;
    var bio = event.target.bio.value;


    if(firstName.length >= 3) {
      Meteor.users.update({_id: Meteor.userId()}, {$set: { "profile.firstName": firstName }});
    }

    if(lastName.length >= 3) {
      Meteor.users.update({_id: Meteor.userId()}, {$set: { "profile.lastName": lastName }});
    }

    Meteor.users.update({ _id: Meteor.userId()}, { $set: { "profile.bio": bio }});
  }
});
