
angular.module('resources.songs', ['restResource']);
angular.module('resources.songs').factory('Songs', ['restResource', function ($restResource) {
  var Songs = $restResource('songs');
  return Songs;
}]);

angular.module('resources.shell', ['restResource']);
angular.module('resources.shell').factory('Shell', ['restResource', function ($restResource) {
  var Shell = $restResource('shell');
  return Shell;
}]);

angular.module('resources.userlogged', ['restResource']);
angular.module('resources.userlogged').factory('UserLogged', ['restResource', function ($restResource) {
  var UserLogged = $restResource('userlogged','http://www.7chaos.com/api');
  return UserLogged;
}]);

angular.module('resources.profile', ['restResource']);
angular.module('resources.profile').factory('UserProfile', ['restResource', function ($restResource) {
  var UserProfile = $restResource('user/profile','http://www.7chaos.com/api');
  return UserProfile;
}]);

angular.module('resources.user', ['restResource']);
angular.module('resources.user').factory('User', ['restResource', function ($restResource) {
  var User = $restResource('adm/user','http://www.7chaos.com/api');
  return User;
}]);

angular.module('resources.contact', ['restResource']);
angular.module('resources.contact').factory('Contact', ['restResource', function ($restResource) {
  var Contact = $restResource('contact','http://www.7chaos.com/api');
  return Contact;
}]);
