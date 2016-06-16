Template.Home.rendered = function() {
	
};

Template.Home.events({
	
});

Template.Home.helpers({
	
});

Template.HomeRestCall.created = function() {

};

Template.HomeRestCall.destroyed = function() {

};

Template.HomeRestCall.rendered = function() {

};

Template.HomeRestCall.helpers({

});

Template.HomeRestCall.events({
	"click .client-request": function(event, template) {
		event.preventDefault();
      
		// read params from input box
		var params = template.find("input[name='params']").value;

		// construct URL with params
		var url = "http://swapi.co/api/" + params;

		// animate loading
		$(template.find(".client-request")).button("loading");

		// HTTP call
		HTTP.call("GET", url, function(err, res){
			// stop animating loading
			$(template.find(".client-request")).button("reset");

			// process result
			if(err){
				// error
				alert(err.reason);
			} else {
				// success: show result
				$(template.find(".result")).text("\n" + JSON.stringify(JSON.parse(res.content), null, '\t') + "\n");
			}
		});

		return false;
	},
  
	"click .server-request": function(event, template) {
		event.preventDefault();
      
		// read params from input box
		var params = template.find("input[name='params']").value;

		// animate loading
		$(template.find(".server-request")).button("loading");

		// Call server method (HTTP call is executed server-side and result returned here)
		Meteor.call("starWars", params, function(err, res){
			// stop animating loading
			$(template.find(".server-request")).button("reset");

			// process result
			if(err){
				// error
				alert(err.reason);
			} else {
				// success: show result
				$(template.find(".result")).text("\n" + JSON.stringify(res, null, '\t') + "\n");
			}
		});

		return false;
	}

});
