window.App = Ember.Application.create();

App.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: new Firebase("http://crack.firebaseio.com/rooms/"),

});
