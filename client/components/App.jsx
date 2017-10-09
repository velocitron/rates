import React from 'react';
import xhr from "xhr";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ActionLockOpen from 'material-ui/svg-icons/action/lock-open';
import {red500, yellow500, green800} from 'material-ui/styles/colors';

class App extends React.Component {
	constructor() {
		super();
		this.state = {market_status:"closed"}
		this.getMarketStatus = this.getMarketStatus.bind(this);
	}

	getMarketStatus() {
		var self = this;
		var market_status = "open";
		xhr({
			url : "https://forex.1forge.com/1.0.2/market_status?api_key=D9dtjPDUVlbbtJxiYIq31Wl6r64eGDgY"
			}, function(err, data) {
		 			market_status = JSON.parse(data.body)["market_is_open"].toString();
		 			if (market_status == "true") market_status = "open";
		 			if (market_status == "false") market_status = "closed";
		 			self.setState({market_status:market_status});
			});
	}

	componentDidMount() {
		this.getMarketStatus();
	}



	render() {
		const iconStyles = {
  		display: "inline",
  		marginTop:7
		};
		const Lock = () => (
  		<MuiThemeProvider>
    		<ActionLockOpen style = {iconStyles} color={green800}/> 
  		</MuiThemeProvider>
		);


		return (
			<div>
			<div className="market_status">
			Market Status: {this.state.market_status}
			</div>
			<span className = "lock-icon">
			<Lock/>
			</span>
			</div>

		)
	}

}

export default App;