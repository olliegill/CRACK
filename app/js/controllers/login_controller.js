App.LoginController = Ember.Controller.extend({
  needs: ['application'],
  username: '',
  email: '',

  actions: {
    logIn: function(){
      this.set('controllers.application.currentUser', {
        username: this.get('username'),
        email: this.get('email')
      });
      this.transitionToRoute('application');
    }
  }
});
