import React, {Component} from 'react';
import { register } from './UserFunctions';


class Register extends Component{
    constructor(){
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            repassword: '',
            errors: []
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e){
        e.preventDefault()    
        const newUser = {
            first_name: this.state.first_name,
            last_name:this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            repassword: this.state.repassword
        }
        const errors = this.validate(newUser)
        if (errors.length > 0){
            this.setState({ errors: errors });
            return;
        }
        register(newUser).then(res => {
            this.props.history.push('/login')
        })
        
    }
    validate(newUser){
        const errors=[];
        console.log("newUser", newUser.first_name.length)
        if(newUser.password !== newUser.repassword){
            errors.push("Your passwords do not match.")
        }
        if((!newUser.first_name.length) || (!newUser.last_name.length) ||(!newUser.email.length) || (!newUser.password.length)){      
            errors.push("You forgot to fill something in.");
        }
        if (newUser.email.length < 5){
            errors.push("Email should be at least 5 charcters long");
        }
        if(newUser.email.split("").filter(x => x === "@").length !== 1){
            errors.push("Email should contain @");
        }
        if(newUser.email.indexOf(".") === -1){
            errors.push("Email should contain at least one dot");
        }
        if (newUser.password.length < 6) {
            errors.push("Password should be at least 6 characters long");
        }
        
        if (errors.length > 0){
            return errors;
        }
        return errors;
    }
    render(){
        const { errors } = this.state;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                        {errors.map(error => (
                            <p key={error}>Error: {error}</p>
                                ))}
                            <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                            <div className="form-group">
                                <label htmlFor="first_name">First Name</label>
                                <input type="text"
                                className="form-control"
                                name="first_name"
                                placeholder="Enter First Name"
                                value={this.state.first_name}
                                onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="last_name">Last Name</label>
                                <input type="text"
                                className="form-control"
                                name="last_name"
                                placeholder="Enter Last Name"
                                value={this.state.last_name}
                                onChange={this.onChange}
                                />
                            </div>
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
                            <div className="form-group">
                                <label htmlFor="repassword">Confirm Password</label>
                                <input type="password"
                                className="form-control"
                                name="repassword"
                                placeholder="Confirm password"
                                value={this.state.repassword}
                                onChange={this.onChange}
                                />
                            </div>
                            <button type="submit"
                            className="btn btn-lg btn-primary btn-block">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register