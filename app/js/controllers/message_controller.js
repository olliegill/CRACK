App.ApplicationController = Ember.ArrayController.extend({
   sortProperties: ['timestamp'],
  sortAscending: false,
  actions: {
    createPost: function(){
     //var post = this.get('newUsername', 'newMessage');
     var post = this.store.createRecord('chat', {
       username: this.get('newUsername'),
       message: this.get('newMessage'),
       timestamp: new Date(),
     });
     this.set('newUsername', '');
     this.set('newMessage', '');

     post.save();
}
  },

});

Ember.Handlebars.helper('from-now', function(timestamp){
	return moment(timestamp).fromNow();
});
