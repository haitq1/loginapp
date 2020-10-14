import React from 'react';
import {useDispatch} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {logout} from '../actions/Home.act';
import './Home.css';
const HomePage =() => {
    const dispatch = useDispatch();
    const submit = () => {
        dispatch(logout());
        localStorage.removeItem('token');
    }
    return (
        <div>
            <h1 className="h1">Bạn đã đăng nhập thành công</h1>
            <form>
               
                <button type="button" className="btn btn-success" onClick={submit}>Đăng xuất</button>
                
            </form>
        </div>
    )
}
export default HomePage;