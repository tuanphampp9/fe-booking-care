import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import './Login.scss';
import { handleLogin } from '../../services/userService';
class Login extends Component {
    constructor(props) {
        //declare state
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            isLoading: false,
            errMsg: ''
        }
    }

    handleOnChange = (inputId, event) => {
        this.setState({
            [inputId]: event.target.value
        });
    }
    handleSubmit = async () => {
        try {
            this.setState({
                isLoading: true,
                errMsg: ''
            })
            const res = await handleLogin(this.state.username, this.state.password);
            console.log(res);
            if (res.status === 200) {
                this.props.userLoginSuccess(res.data.user);
                this.props.navigate('/system/user-manage');
            }
        } catch (error) {
            this.setState({
                errMsg: error.response.data.message
            })
        } finally {
            this.setState({
                isLoading: false
            })
        }

    }
    handleShowPassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })

    }
    render() {
        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content">
                        <div className="col-12 text-login">
                            Login
                        </div>
                        <div className="col-12 form-group login-input">
                            <label htmlFor="">Username</label>
                            <input type="email"
                                className='form-control'
                                placeholder='Enter your username'
                                onChange={(e) => this.handleOnChange('username', e)} />
                        </div>
                        <div className="col-12 form-group login-input">
                            <label htmlFor="">Password</label>
                            <div className='custom-input'>
                                <input type={this.state.isShowPassword ? 'text' : "password"}
                                    className='form-control'
                                    placeholder='Enter your password'
                                    onChange={(e) => this.handleOnChange('password', e)} />
                                <i className={this.state.isShowPassword ?
                                    "fas fa-eye icon-eye" :
                                    "fas fa-eye-slash icon-eye"
                                }
                                    onClick={this.handleShowPassword}
                                ></i>
                            </div>
                        </div>
                        <div className="col-12 form-group">
                            <span className='error-msg'>{this.state.errMsg}</span>
                        </div>
                        <div className="col-12">
                            <button
                                className='btn-login'
                                onClick={() => this.handleSubmit()}
                                disabled={this.state.isLoading}>
                                {this.state.isLoading ? <i className="fas fa-spinner"></i> : 'Login'}
                            </button>
                        </div>
                        <div className="col-12">
                            <span className='forgot-password'>Forgot your password?</span>
                        </div>
                        <div className="col-12 text-center">
                            <span className='text-other-login'>Or login with?</span>
                        </div>
                        <div className="col-12 social-login">
                            <i className="fab fa-google google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
