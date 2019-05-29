import React from 'react'
import FormNavbar from './form_navbar';
import {Link} from 'react-router-dom'

class SessionForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            fName: "",
            lName: "",
            zipcode: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    renderErrors() {
        return (
            <ul className="form-errors">
                {this.props.errors.map( (err, idx) => {
                    return <li key={idx}>{err}</li>
                })}
            </ul>
        );
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.processForm(this.state)
    }

    update(field){
        return e => {
            this.setState( {[field]: e.target.value} )
        }
    }

    componentWillUnmount(){
        this.props.clearErrors()
    }

    render(){
        return(
            <div>
                <FormNavbar />
            <div className="form-all">
                <section className="form-section-left">

                <h3>{this.props.formType} Up for Welp</h3>
                <p>Connect with great local businesses</p>
                
                
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit} className="form-login">
                    <div className="input-name-divs">
                        <input type="text" placeholder="First Name" onChange={this.update("fName")} className="input-fname"/>
                        <input type="text" placeholder="Last Name" onChange={this.update("lName")}/>
                    </div>
                    <div>
                    <input type="text" placeholder="Email" onChange={this.update("email")}/>
                    <input type="password" placeholder="Password"onChange={this.update("password")}/>
                    <input type="text" placeholder="Zip Code "onChange={this.update("zipcode")}/>

                    </div>
                    <div className="form-warning-message">
                        <p>
                        You also understand that Welp may send marketing emails about Welp’s products, 
                        services, and local events. 
                        You can unsubscribe at any time.
                        </p>
                    </div>
                    <input type="submit" value="Sign Up" className="form-btn"/>
                    <small className="small-swap-text">Already on Welp? <Link to="/login">Log in</Link> </small>
                </form>
                </section>

               <section className="form-image-right">
                    
                </section>
            </div>
        </div>
        )
    }
}




export default SessionForm