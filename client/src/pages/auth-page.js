import React, {useState} from 'react';
import {useHttp} from '../hooks/http-hook';
import './pages.css';


export default () => {
  const {loading, error, request} = useHttp();
  const [form, setForm] = useState({
    email: '', password: ''
  });
  const inputsHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  const registerHandler = async () => {
    try {
      console.log( [] == false == [1] )
      const data = await request('/api/auth/register', 'POST', {...form});
      console.log('Data: ', data);
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
            />
            <input 
              placeholder='Password' 
              type='password' 
              name='password'
              onChange = {inputsHandler} 
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
              disabled={loading}
            >Вход</button>
          </div>
        </div>
      </div>
    </div>
  )
}