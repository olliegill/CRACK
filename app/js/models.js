App.Chat = DS.Model.extend({
  username: DS.attr('string'),
  timestamp: DS.attr('date'),
  message: DS.attr('string')
});


App.ChatAdapter = App.ApplicationAdapter.extend({
  pathForType: function(type){
    return "general";
  }
});
