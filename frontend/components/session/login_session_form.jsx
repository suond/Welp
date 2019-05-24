import React from 'react'
import {Link} from 'react-router-dom'
import FormNavbar from './form_navbar';
class SessionForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDummySubmit = this.handleDummySubmit.bind(this);
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

    handleDummySubmit(e){
        e.preventDefault()
        const dummyCred = {
            email: "fake@this.com",
            password: "123456"
        }
        this.props.processForm(dummyCred);
    }

    dummySubmitButton() {
        return (
            <button onClick={this.handleDummySubmit} className="form-btn">Dummy Account</button>
        )
    }

    render(){
        return(
            <div>
                <FormNavbar />
            <div className="form-all">
                <section className="form-section-left" >

                <h3>{this.props.formType} to Welp</h3>
                <small>
                    New to Welp? <Link to="/signup">Sign up</Link>
                </small>
                
                
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit} className="form-login">
                        <input type="text" placeholder="Email" onChange={this.update("email")} className="input-blue"/>
                        <input type="password" placeholder="Password" onChange={this.update("password")} className="input-blue"/>
                        <div className="align-self-right">
                            <small>
                                <a href="#">Forgot password?</a>                  
                            </small>
                        </div>
                        <input type="submit" value="Log In" className="form-btn"/>
                        <small className="small-swap-text">New to Welp? <Link to="/signup">Sign Up</Link> </small>
                        <div className="hr-line-parent">
                            <div className="hr-line">
                            </div>
                                <legend>OR</legend>
                            <div className="hr-line">
                            </div>

                        </div>
                        {this.dummySubmitButton()}
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