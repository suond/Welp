import React from 'react'
import {withRouter} from 'react-router-dom'

class RestaurantForm extends React.Component {

    constructor(props){
        super(props)
        this.state = props.restaurant;
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    onChange(field){
        return (e) => {
            this.setState( {[field]: e.target.value} )
        }
    }

    handleSubmit(e){
        e.preventDefault()
        const formData = new FormData();

        Object.keys(this.state).forEach(key => {
            if (key === 'photos') {
                for (let i = 0; i < this.state.photos.length; i++){
                    formData.append('restaurant[photos][]', this.state.photos[i])
                }
            } else {
                formData.append(`restaurant[${key}]`, this.state[key])
            }
        })
        debugger
        if(this.props.formtype === 'edit'){
            this.props.processData(formData, this.props.restaurant.id)
            .then( restaurant=> {
                debugger 
                 this.props.history.push(`/restaurants/${restaurant.restaurant.id}`)
            })
        } else {
            this.props.processData(formData)
            .then( restaurant=> {
                debugger 
                 this.props.history.push(`/restaurants/${restaurant.restaurant.id}`)
            })
        }
    }

    render() {
        
        return (
            <div className="restaurant-form-container">
                <h2>{this.props.formtype}</h2>
                <form onSubmit={this.handleSubmit}>
                    <ul>
                        <li>
                            <label >
                                Business Name
                            </label>
                            <input type="text" value={this.state.name} onChange={this.onChange("name")}/>
                        </li>
                        <li>
                            <label >
                                Address
                            </label>
                            <input type="text" value={this.state.address} onChange={this.onChange("address")}/>
                        </li>
                        <li>
                            <label >
                                City
                            </label>
                            <input type="text" value={this.state.city} onChange={this.onChange("city")}/>
                        </li>
                        <li>
                            <label >
                                State
                            </label>
                            <select onChange={this.onChange("state")} value={this.props.state}>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AS">American Samoa</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="GU">Guam</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="MP">Northern Mariana Islands</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UM">United States Minor Outlying Islands</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VI">Virgin Islands</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                        </select>
                        </li>

                        <li>
                            <label >
                                ZIP
                            </label>
                            <input type="text" value={this.state.zipcode} onChange={this.onChange("zipcode")} />
                        </li>
                        <li>
                            <label >
                                Phone
                            </label>
                            <input type="text" value={this.state.phone_number} onChange={this.onChange("phone_number")}/>
                        </li>
                        <li>
                            <label >
                                Website
                            </label>
                            <input type="text" value={this.state.website} onChange={this.onChange("website")}/>
                        </li>
                        <li>
                            <label>
                                Hours
                            </label>
                            <select name="opening" id="" onChange={this.onChange("opening_time")} value={this.state.opening_time}>
                                <option value="7:00 am">7:00 am</option>
                                <option value="8:00 am">8:00 am</option>
                                <option value="9:00 am">9:00 am</option>
                            </select> --- 
                            <select name="closing" id="" onChange={this.onChange("closing_time")} value={this.state.closing_time}>
                                <option value="7:00 pm">7:00 pm</option>
                                <option value="8:00 pm">8:00 pm</option>
                                <option value="9:00 pm">9:00 pm</option>
                            </select>
                        </li>
                        <li>
                            <label>Photos (add multiples photos at once)</label>
                            <input type="file" onChange={e => this.setState({photos: e.target.files })} multiple />
                        </li>
                    </ul>
                    <input type="submit" value={`${this.props.formtype} restaurant`}/>
                </form>

            </div>
        )
    }

}

export default withRouter(RestaurantForm)