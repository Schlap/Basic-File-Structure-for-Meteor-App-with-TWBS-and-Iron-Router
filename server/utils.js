Accounts.onCreateUser(function (options, user) {
  user.subjects = "Maths";
  if(options.profile)
    user.profile = options.profile;
  return user;
});
