import React from 'react'
import {Link} from 'react-router-dom'
import IndexNavBar from './index_navbar'
class Splash extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            term: '',
            autoCompleteResults: [],
            itemSelected: {},
            showItemSelected: false
        };

        // $.getJSON('/search?q=' + this.state.term)
        // .then(response => this.setState( {autoCompleteResults: response.items}))
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    handleSubmit(e) {
        e.preventDefault();

        let url = `/search/${this.state.term}`
        // console.log(url)
        this.props.history.push(url)
    }

    getAutoCompleteResults(e){
        this.setState({
          term: e.target.value
        }, () => {
        //   $.getJSON('/api/search?q=' + this.state.term)
        //     .then(response => this.setState({ autoCompleteResults: response.items }))
        this.props.fetchSearchRestaurants(this.state.term)
        .then(response => {
            
            return this.setState({ autoCompleteResults: response.restaurants.items})
            })
        });
      }

    render(){
        let autoCompleteList = <ul> 
            {this.state.autoCompleteResults.map( (response, index) => {
                
                return ( <Link to={`restaurants/${response.id}`} key={index}>
                    <li className="search-res-item" tabIndex={index}>
                        <div>
                            <img src={response.photoUrl[0] } alt="nothing" className="search-res-thumb"/>
                        </div>
                        <h2>{response.name}</h2>
                    </li>
                </Link>)
        })}
        </ul>
        return (
        <div className="splash-container">
            <IndexNavBar currentUser={this.props.currentUser} logout={this.props.logout} path={this.props.match.path}/>
            <div className="index-upper">
                <Link to="/">
                    <div className="index-big-logo">
                            
                    </div>
                </Link>
                <div className="index-search-wrapper">
    
                    <form onSubmit={this.handleSubmit}>
                        <div className="search-find-wrapper">
                            <span>Find</span>
                            <input type="text" ref={ (input) => {this.searchBar = input} } 
                            value={this.state.term} 
                            onChange={this.getAutoCompleteResults.bind(this) }
                            className="index-search-input"/>
                            <div className="auto-complete-res ">
                                {autoCompleteList}
                            </div>
                        </div>
                        

                        {/* <div>
                            <span>Near</span>
                            <input type="text" placeholder="Looking for a spolusing?" className="index-search-input"/>
                        </div> */}
                        <button type="submit">
                            <span><i className="fas fa-search"></i></span>
                        </button>
                    </form>
    
                </div>
                    
            </div>
            
        </div>
        )
    }
}



export default Splash