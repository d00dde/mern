import React, {useState,useContext} from 'react';
import {useParams} from 'react-router-dom';
import {AuthContext} from '../context/auth-context';
import {useHttp} from '../hooks/http-hook';

export default () => {
  const [link, setLink] = useState(null);
  const {request, loading} = useHttp();
  const {token} = useContext(AuthContext);
  const linkId = useParams().id;
  
  const getLink = () => {
    
  }

  return (
    <div>
      <h1>Details Page</h1>
    </div>
  )
}