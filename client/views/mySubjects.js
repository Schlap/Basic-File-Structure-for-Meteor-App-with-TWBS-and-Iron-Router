Template.mySubjects.events({
  'submit form': function (event) {
    event.preventDefault();
    var subjectName = event.target.subjectName.value;
    var subjectLevel = event.target.subjectLevel.value;
    var subjectPrice = event.target.subjectPrice.value;
    Meteor.call('addSubject', subjectName, subjectLevel, subjectPrice);
  }
});
