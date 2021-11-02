import React from 'react';

interface PropsSiteElement {
  header: string,
  url: string
}


const SiteNavigationElement: React.FC<PropsSiteElement> = (props: PropsSiteElement) => {
  const ajaxClick = (event: React.UIEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    console.log('GET:', props.url)
  }
  return (
    <li>
      <a onClick={ajaxClick} href={props.url}>{props.header}</a>
    </li>
  );
};


export default SiteNavigationElement;
