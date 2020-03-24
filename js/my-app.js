// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'App Coffee', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
        {
		path: '/mujer/',
    	url: 'mujer.html',
    	name: 'mujer',
  		},
		{
		path: '/hombre/',
    	url: 'hombre.html',
    	name: 'hombre',
  		},
		{
		path: '/nino/',
    	url: 'nino.html',
    	name: 'nino',
  		},
		{
		path: '/nino-tabs/',
    	url: 'nino-tabs.html',
    	name: 'nino-tabs',
  		},


   
	]
});

// Export selectors engine
var $$ = Dom7;





 

