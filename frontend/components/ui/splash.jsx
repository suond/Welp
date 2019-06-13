import React from 'react'
import {Link} from 'react-router-dom'
import IndexNavBar from './index_navbar'
class Splash extends React.Component{


    render(){
        return (
        <div className="splash-container">
            <IndexNavBar currentUser={this.props.currentUser} logout={this.props.logout} />
            <div className="index-upper">
                <Link to="/">
                    <div className="index-big-logo">
                            
                    </div>
                </Link>
                <div className="index-search-wrapper">
    
                    <form>
                        <div>
                            <span>Find</span>
                            <input type="text" placeholder="Looking for a spolusing?" className="index-search-input"/>
                        </div>
                        <div>
                            <span>Near</span>
                            <input type="text" placeholder="Looking for a spolusing?" className="index-search-input"/>
    
                        </div>
                        <button>
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