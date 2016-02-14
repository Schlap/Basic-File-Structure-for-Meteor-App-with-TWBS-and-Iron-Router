Meteor.methods({
  addSubject: function (subjectName, subjectLevel, subjectPrice, userId) {

    const subject = {
        name: subjectName,
        level: subjectLevel,
        price: subjectPrice
    }

    Meteor.users.update(userId, {
      $set: {
        subject: subject
      }
    });
    console.log(subject, "Submitted!");
  }
});
