import React, {useState, useContext, useEffect} from 'react';
import Loader from '../components/loader';
import LinksList from '../components/links-list';
import {AuthContext} from '../context/auth-context';
import {useHttp} from '../hooks/http-hook';

export default () => {
  const [links, setLinks] = useState([]);
  const {request, loading} = useHttp();
  const {token} = useContext(AuthContext);
  
  useEffect( () => {
    async function getLinks () {
      try {
        const responce = await request ('/api/link', 'GET', null, {
          Authorization: `Bearer ${token}`
        });
        setLinks(responce);
      } catch (err) {}
    }
    getLinks();
  }, [token, request]);

  if(loading) {
    return <Loader />
  }

  return (
    <>
      {!loading && links && <LinksList links={links}/>}
    </>
  )
}