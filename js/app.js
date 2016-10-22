var Counter = React.createClass({
 
	incrementCount: function(){
	    this.setState({
	    	count: this.state.count + 1
	    });

	    this.setState({
	        random: Math.floor(Math.random()*(this.state.tab.length - 0))
	    });
	 
	    if(this.state.count !== 0 && this.state.count%10 === 0){
	      	alert(this.state.tab[this.state.random]);
	     }
	},

 	getInitialState: function(){
    	return {
	        count: 0,
	        tab : ['click plus vite','t\'as mal au doigt ?','feignasse !'],
	        random : null,
        }
    },

    render: function(){
    	// L'image est effectivement un message subliminal !
    	return (
	        <div className="counter">
	        	<img src='http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Apps-preferences-web-browser-cookies-icon.png' alt='coockies'/>
	        	<h1>{this.state.count}</h1>
	       		<button className ="clicker" type="button" onClick={this.incrementCount}>Increment</button>
	        </div>
    	);
    }
});

ReactDOM.render(
	<Counter/>,
	document.getElementById('mount-point')
);

