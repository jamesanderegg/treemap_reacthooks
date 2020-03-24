import React, {Component} from 'react';
import { login } from './UserFunctions'


class Login extends Component{
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            errors: [],
        }
        this.validate = this.validate.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
        
    }
    onSubmit(e){
        e.preventDefault()
        const errors = this.validate(this.state.email, this.state.password)
        if (errors.length > 0){
            this.setState({ errors: errors });
            return;
        }
        
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        
        login(user).then(res => {
            if(res.length > 0){
                this.setState({ 
                    email: "",
                    password: "",
                    errors: res });
                    
                this.props.history.push('/login')
            }
            else{
                this.props.history.push('/')
   
            }
            
        })
    }
    validate(email,password){
        const errors=[];

        if((!email.length) || (!password.length)){
            
            errors.push("You forgot to fill something in.");
        }
        
        if (email.length < 5){
            errors.push("Email should be at least 5 charcters long");
        }
        if(email.split("").filter(x => x === "@").length !== 1){
            errors.push("Email should contain @");
        }
        if(email.indexOf(".") === -1){
            errors.push("Email should contain at least one dot");
        }
        if (password.length < 6) {
            errors.push("Password should be at least 6 characters long");
        }
        
        if (errors.length > 0){
            return errors;
        }
        return errors;
    }

    render(){
        let { errors } = this.state;
        
        return(

            <div className="container">
                
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                        {errors.map(error => (
                            <p key={error}>Error: {error}</p>
                                ))}
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter Email"
                                value={this.state.email}
                                onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                className="form-control"
                                name="password"
                                placeholder="Enter password"
                                value={this.state.password}
                                onChange={this.onChange}
                                />
                            </div>
                            <button type="submit"
                            className="btn btn-lg btn-primary btn-block">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login