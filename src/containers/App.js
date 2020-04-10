import React, { Component } from 'react'
import Cardlist from '../components/Cardlist';
import SearchBox from "../components/SearchBox"
import Scroll from "../components/Scroll.js"
import './App.css'


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [] ,
            searchField: ''
        }
    }
	
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots : users }))
    }

    render() {
        const filteredRobots = this.state.robots
            .filter(
                robot => {
                    return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
                }
            )
        if (this.state.robots.length === 0) {
            return <h1 className="tc f1">LOADING</h1>
        }
        return (
            <div className="tc">
		    	<h1 className="f1">Robofriends</h1>
		    	<SearchBox 
		    		searchChange = { this.onSearchChange }
		    	/>
                <Scroll>
		          <Cardlist robots={ filteredRobots }/>
                </Scroll>
	        </div>
        )
    }
}


export default App;