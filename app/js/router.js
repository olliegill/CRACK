App.Router.map(function(){
  this.route("login");
});


App.ApplicationRoute = Ember.Route.extend({
  // beforeModel: function(){
  //   var user = this.controllerFor('application').get('currentUser');
  //   if(!user){
  //     this.transitionTo('login');
  //   }
  // },

  //to here
  model: function() {
    return this.store.find('chat');
  }
});
