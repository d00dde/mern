import React, {useState, useContext, useEffect} from 'react';
import Loader from '../components/loader';
import LinkCard from '../components/link-card';
import {useParams} from 'react-router-dom';
import {AuthContext} from '../context/auth-context';
import {useHttp} from '../hooks/http-hook';

export default () => {
  const [link, setLink] = useState(null);
  const {request, loading} = useHttp();
  const {token} = useContext(AuthContext);
  const linkId = useParams().id;
  
  useEffect( () => {
    async function getLink () {
      try {
        const responce = await request (`/api/link/${linkId}`, 'GET', null, {
          Authorization: `Bearer ${token}`
        });
        setLink(responce);
      } catch (err) {}
    }
    getLink();
  }, [token, linkId, request]);

  if(loading) {
    return <Loader />
  }

  return (
    <>
      {!loading && link && <LinkCard link={link}/>}
    </>
  )
}