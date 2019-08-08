import React from 'react'
import {Link, withRouter } from 'react-router-dom'
class ReviewCreateForm extends React.Component{
    constructor(props){
        super(props)

        // console.log(props)
        this.state = props.review;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.sss;
    }
    
    componentDidMount(){
        this.props.fetchRestaurant(this.props.match.params.restaurantId)
        this.setState( {restaurant_id: this.props.match.params.restaurantId, selectedOption: 3})
        // this.sss= document.getElementById("sss").addEventListener("mouseover", consolePosition)
    }

    onChange(field){
        return (e) => {
            this.setState( {[field]: e.target.value} )
        }
    }

    handleSubmit(e){
        e.preventDefault()
        let review = this.state;
        delete review[selectedOption];
        this.props.processData(review).then(review => {
            
            
            this.props.history.push(`/restaurants/${review.review.restaurant_id}`)
        })
    }

    handleOptionChange(changeEvent) {
        this.setState({
            rating: changeEvent.target.value,
            selectedOption: changeEvent.target.value
        })
        
    }

    render() {
        let rest = this.props.restaurant || {};
        console.log(this.state)
        return (
            <div className="review-form-wrapper">
                <Link to={`restaurant/${this.props.match.params.restaurantId}`} className="review-form-header">
                    <h2 >{rest.name}</h2>
                </Link>
                
                <form onSubmit={this.handleSubmit}>
                    <div className="review-pseudo-input">
                        <div className="review-radio-container">
                            <label>
                                <input type="radio" value="1" onChange={this.handleOptionChange} checked={this.state.selectedOption == 1}/> 1 star
                            </label>
                            <label>
                                <input type="radio" value="2" onChange={this.handleOptionChange} checked={this.state.selectedOption == 2}/> 2 star
                            </label>
                            <label>
                                <input type="radio" value="3" onChange={this.handleOptionChange} checked={this.state.selectedOption == 3}/> 3 star
                            </label>
                            <label>
                                <input type="radio" value="4" onChange={this.handleOptionChange} checked={this.state.selectedOption == 4}/> 4 star
                            </label>
                            <label>
                                <input type="radio" value="5" onChange={this.handleOptionChange} checked={this.state.selectedOption == 5}/> 5 star
                            </label>
                        </div>
                        <textarea className="review-body-area" value={this.state.body} onChange={this.onChange("body")} placeholder="write your review here"></textarea>
                    </div>
                        <div className="review-form-submit-gtn">
                            <input type="submit" value="Post Review" className="form-btn"/>
                            <Link to={`/restaurants/${this.props.match.params.restaurantId}`}> cancel</Link>
                        </div>
                    
                    
                </form>
            </div>
        )
    }
}

function getPosition(e){
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    return {
        x,
        y
    }
}

function consolePosition(e){
    let position = getPosition(e)

    console.log(`x: ${position.x}, y: ${position.y}`)
}

export default withRouter(ReviewCreateForm)