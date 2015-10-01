App.config(function($stateProvider, $urlRouterProvider) {
	// Route to Login and Register page if they type root directory
	$urlRouterProvider.otherwise("/locations");
	// 
// ****************************************************************************
// *                    THis is for testing purposes only:  				  *
//						Setting a default test user id for url params         *
// ****************************************************************************
	var user_id = "1234asdfsfsa76df5asrfasdf8";
//
// ****************************************************************************
// *                                   	// 									  *
//		For now, untill we get the params for user_id and login to link		  *
//			to the locations page, use key: "value", 						  *
// 																			  *
//					http://localhost:6789/log-reg.html    					  *
//					  														  *
//									to access login page                      *
// *                                   	//                                    *
// ****************************************************************************

	// states
	$stateProvider
// ****************************************************************************
// *                                   	Locations                             *
// ****************************************************************************
		.state("locations", {
			url: "/locations",
			templateUrl: "partials/locations.html"
		})
// ****************************************************************************
// *                                  Topics                                  *
// ****************************************************************************
	// PARENT
		.state("topics", {
			url: "/topics",
			templateUrl: "partials/topics.html"
		})
	// CHILDREN
		// General
		.state("topics.general", {
			url: "/general",
			templateUrl: "partials/topics/general.html"
		})
		// Meet-ups
		.state("topics.meetups", {
			url: "/meetups",
			templateUrl: "partials/topics/meetups.html"
		})
		// Night Life
		.state("topics.nightlife", {
			url: "/nightlife",
			templateUrl: "partials/topics/nightlife.html"
		})
// ****************************************************************************
// *                                   	Profiles                             *
// ****************************************************************************
		// PARENT
		.state("profiles", {
			url: "/profiles",
			templateUrl: "partials/profiles.html"
		})
		// CHILDREN

		// Users Profile page
		// Profile with id in url that DOES matches current users id
		.state("profiles.my-profile" ,{
			url: "/" + user_id,
			templateUrl: "partials/profiles/my-profile.html"
		})
		// Other users Profile page
		// Profile with id in url that DOES NOT match current users id
		.state("profiles.other-profile", {
			url: "/" + user_id + "/other",
			templateUrl: "partials/profiles/other-profile.html"
		})
})
