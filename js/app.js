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
    	return (
	        <div className="counter">
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

