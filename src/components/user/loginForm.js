import React, { Component, Fragment } from "react";
import loginAction from "../../actions/user/loginAction";
import { connect } from "react-redux";

import LoginFormView from "../../views/loginView";

export class Login extends Component {
    state={}

    componentWillReceiveProps(nextProps){
        if(nextProps.user.isLoggedIn){
            localStorage.setItem("token", nextProps.user.user.token)
            this.props.history.push("/home")
        }
    }
    handleLogin = (event,loginData)=>{
        this.props.loginAction(loginData)
    }
    render() {
        return (
            <Fragment>
                <LoginFormView login={this.handleLogin}/>
                
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        user:state.userReducer
    };
}

export default connect(
    mapStateToProps,
    {loginAction}
)(Login);
