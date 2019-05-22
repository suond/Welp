import React from 'react'

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

    render(){
        return(
            <div className="form-all">
                <section className="form-section-left">

                <h3>{this.props.formType} Up for Welp</h3>
                <p>By continuing, you agree to Yelp’s Terms of Service and acknowledge Yelp’s Privacy Policy.</p>
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit} className="form-login">
                    <div className="input-name-divs">
                        <input type="text" placeholder="first name" onChange={this.update("fName")}/>
                        <input type="text" placeholder="last name" onChange={this.update("lName")}/>
                    </div>
                    <input type="text" placeholder="email" onChange={this.update("email")}/>
                    <input type="password" placeholder="password"onChange={this.update("password")}/>
                    <input type="text" placeholder="Zip Code "onChange={this.update("zipcode")}/>
                    <small className="small-swap-text">Already on Yelp? <a href="/#/login">Log in</a> </small>
                    <input type="submit" value="Sign Up" className="form-btn"/>
                </form>
                </section>

               <section className="form-image-right">
                    image from yelp
                </section>
            </div>
        )
    }
}




export default SessionForm