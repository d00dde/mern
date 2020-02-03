import React, {useState, useEffect, useContext} from 'react';
import {useHttp} from '../hooks/http-hook';
import {useMessage} from '../hooks/message-hook';
import {AuthContext} from '../context/auth-context';
import './pages.css';


export default () => {
  const auth = useContext (AuthContext);
  const {loading, error, request, clearErrors} = useHttp();
  const message = useMessage();
  const [form, setForm] = useState({
    email: '', password: ''
  });

  useEffect (() => {
    message(error.message)
  }, [error, clearErrors, message])

  const inputsHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form});
      message(data.message)
      console.log('Data: ', data);
    } catch (error) { }
  }
  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', {...form});
      message(data.message);
      auth.login(data.token, data.userID);
    } catch (error) { }
  }

  return (
    <div className='row auth-page'>
      <div className="col s6 offset-3">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Авторизация</span>
            <input 
              placeholder='Email' 
              type='text' 
              name='email'
              onChange = {inputsHandler}
              value={form.email}
            />
            <input 
              placeholder='Password' 
              type='password' 
              name='password'
              onChange = {inputsHandler} 
              value={form.password}
            />
          </div>  
          <div className="card-action">
            <button 
              className='btn blue'
              onClick={registerHandler}
              disabled={loading}
            >Регистрация</button>
            <button 
              className='btn'
              onClick={loginHandler}
              disabled={loading}
            >Вход</button>
          </div>
        </div>
      </div>
    </div>
  )
}