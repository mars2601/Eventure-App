App = Ember.Application.create();

App.Router.map(function() {
  this.resource('profil');
  this.resource('nowEvents');
  this.resource('addEvent');
});
