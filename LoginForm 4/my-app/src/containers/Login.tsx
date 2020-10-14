import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect, useDispatch } from 'react-redux';
import { LoginRequested } from '../actions/Login.act';
import React, { useState, useEffect, FormEvent } from 'react';
import './Login.css';
interface Props {
    isAuthenticated: boolean,
    history: any,
    LoginPage: any
}
const LoginPage = (props: Props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { isAuthenticated } = props;
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    const submit = (event: FormEvent) => {
        event.preventDefault();
        dispatch(LoginRequested(Username, Password));
        localStorage.setItem('token',props.LoginPage.token);
    }
    useEffect(() => {
        if (isAuthenticated) {
            history.push('/');
        }
        else {
            history.push('/login');
        }
    }, [isAuthenticated]);
    return (
        <div>
        <form className="h1" onSubmit={submit}>
            <h1 className="header" >Đăng nhập</h1>
            <div className="form-group"  >
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Username"
                    onChange={handleUsername} required/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password"
                    onChange={handlePassword} required/>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Login</button>
            <p className="forgot-password text-right">
                Forgot <a href="/#">password?</a>
            </p>
        </form>
        </div>
    )
}
const mapState = (state: any) => ({
    LoginPage: state.login,
    isAuthenticated : state.home.isAuthenticated
})
export default connect(
    mapState
)(LoginPage);