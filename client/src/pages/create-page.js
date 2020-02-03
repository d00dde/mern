import React, {useState, useContext} from 'react';
import {useHttp} from '../hooks/http-hook';
import {AuthContext} from '../context/auth-context';
import {useHistory} from 'react-router-dom';

export default () => {
  const [link, setLink] = useState('');
  const {request} = useHttp();
  const auth = useContext(AuthContext);
  const history = useHistory();
  const enterHandler = async (e) => {
    if(e.key !== 'Enter'){
      return;
    }
    try{
      const data = await request('/api/link/generate', 'POST', { from: link }, { Authorization: `Bearer ${auth.token}`});
      history.push(`/detail/${data.link._id}`);
    } catch(err) {}
  }
  return (
    <div className='row create-page'>
      <div className='col s8 offset-s2'>
        <input 
                placeholder='Вставьте исходную ссылку' 
                type='text' 
                name='link'
                onChange = {(e) => setLink(e.target.value)}
                value={link}
                onKeyPress={enterHandler}
        />
      </div>
    </div>
  )
}