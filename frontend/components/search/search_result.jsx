import React from 'react'
import {Link} from 'react-router-dom'
import IndexNavBar from '../ui/index_navbar'
import SearchRestaurantItem from './search_result_item'

class SearchResult extends React.Component{

    componentDidMount(){
        // console.log(this.props)
        
        this.props.fetchSearchRestaurants(this.props.match.params.query)
    }

    componentDidUpdate(prevProps){
        if (this.props.match.params.query !== prevProps.match.params.query){
            this.props.fetchSearchRestaurants(this.props.match.params.query)
        }
    }

    renderSearchResult() {
        let rests = this.props.restaurants || []
        // console.log(rests)
        return (
            <ul className="search-result-ul">
                {rests.map( (ele,idx) => {
                   return (
                        <SearchRestaurantItem restaurant={ele} key={idx} num={idx}/>
                   )
                })}
            </ul>
        )
    }
    render() {
        
        return (
            <div className="eight-vh">
            <IndexNavBar currentUser={this.props.currentUser} logout={this.props.logout} path={this.props.match.path}/>
                <div className="show-result-container">
                    {this.renderSearchResult()}
                </div>
            </div>
        )
    }
}

export default SearchResult

