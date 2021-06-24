import { useContext } from 'react';
import { SiteContext } from '../app.js';

function Header(props) {

  const siteInformation = useContext(SiteContext);

  return (
    <header>{siteInformation.title}</header>
  )
}

export default Header;