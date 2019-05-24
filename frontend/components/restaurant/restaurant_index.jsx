import React from 'react'

class RestaurantIndex extends React.Component {
    
    constructor(props){
        super(props);
    }

    createRestaurant(){
        Object.keys(this.props.restaurants).map(key => {
            return (
                <div>
                    <p>{this.props.restaurants[key].name }</p>
                </div>
            )
        })
    }

    componentDidMount(){
        this.props.fetchRestaurants();
        this.rests = this.createRestaurant()
    }
    
    render(){
        return (
            <div>
            Restaurant Index
            {this.rests}
        </div>
        )
    }
}


export default RestaurantIndex