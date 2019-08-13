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
        console.log(changeEvent.target.value)
        this.setState({
            rating: changeEvent.target.value,
            selectedOption: changeEvent.target.value
        })
        
        //changeEvent.target.classList.toggle("radio-star-unfilled")
        // this.handleRadioStarClasses();
    }

    handleRadioStarClasses(){
        let radioBtns = document.querySelectorAll(".radio-star");
        // a[4].classList.add("filled");
        // console.log(this.state.rating)
        radioBtns.forEach( (radio, idx) => {
            if (idx + 1 <= this.state.rating) {
                radio.classList.remove("unfilled")
                radio.classList.add("filled")
            } else {
                radio.classList.remove("filled")
                radio.classList.add("unfilled")
                
            }
        })
    }

    render() {
        let rest = this.props.restaurant || {};
        // console.log(this.state)
        this.handleRadioStarClasses()
        return (
            <div className="review-form-wrapper">
                <Link to={`restaurant/${this.props.match.params.restaurantId}`} className="review-form-header">
                    <h2 >{rest.name}</h2>
                </Link>
                
                <form onSubmit={this.handleSubmit}>
                    <div className="review-pseudo-input">
                        
                        <div className="review-radio-container">
                            <label>
                                <input className="radio-star unfilled" type="radio" value="1" onChange={this.handleOptionChange} checked={this.state.selectedOption == 1}/> 
                            </label>
                            <label>
                                <input  className="radio-star unfilled" type="radio" value="2" onChange={this.handleOptionChange} checked={this.state.selectedOption == 2}/> 
                            </label>
                            <label>
                                <input className="radio-star unfilled" type="radio" value="3" onChange={this.handleOptionChange} checked={this.state.selectedOption == 3}/>
                            </label>
                            <label>
                                <input className="radio-star unfilled" value="4" type="radio" onChange={this.handleOptionChange} checked={this.state.selectedOption == 4}/> 
                            </label>
                            <label>
                                <input className="radio-star unfilled" value="5" type="radio" onChange={this.handleOptionChange} checked={this.state.selectedOption == 5}/>
                            </label>
                            <span className="span-beside-radio">Select your rating</span>
                        </div>
                        <textarea className="review-body-area" value={this.state.body} onChange={this.onChange("body")} placeholder="Your review helps others learn about great local businesses."></textarea>
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