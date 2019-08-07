import React from 'react'
import {Link } from 'react-router-dom'
class ReviewCreateForm extends React.Component{
    constructor(props){
        super(props)

        // console.log(props)
        this.state = props.review;
    }
    
    componentDidMount(){
        this.setState( {restaurant_id: 1})
        
    }

    onChange(field){
        return (e) => {
            this.setState( {[field]: e.target.value} )
        }
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.processData(this.state)
    }

    render() {
        console.log(this.state)
        return (
            <div className="restaurant-form-wrapper">
                <h2 className="restaurant-form-header">{this.props.formtype}</h2>
                <form onSubmit={this.handleSubmit}>
                    <ul>
                        <li className="restaurant-form-input">
                            <label >
                                Business Name
                            </label>
                            <input type="text" value={this.state.name} onChange={this.onChange("name")} placeholder="name"/>
                        </li>
                        <li>
                            <label >
                                Address
                            </label>
                            <input type="text" value={this.state.address} onChange={this.onChange("address")} placeholder="address"/>
                        </li>
                        <li>
                            <label>
                                City
                            </label>
                            <input type="text" value={this.state.city} onChange={this.onChange("city")} placeholder="city"/>
                        </li>
                        
                    </ul>
                    <div className="restaurant-form-confirm-container">
                        <input type="submit" value={`${this.props.formtype} restaurant`}/>
                        <Link to="/restaurants"> cancel</Link>
                    </div>
                </form>
                </div>
        )
    }
}

export default ReviewCreateForm