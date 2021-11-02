import React from 'react';

interface Funcy {
  (title: string): void
}

interface PropsSiteElement {
  header: string,
  url: string,
  func: Funcy
}


const SiteNavigationElement: React.FC<PropsSiteElement> = (props: PropsSiteElement) => {
  const ajaxClick = (event: React.UIEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    console.log('GET:', props.url)
    props.func(props.header)
  }
  return (
    <li>
      <a onClick={ajaxClick} href={props.url}>{props.header}</a>
    </li>
  );
};


export default SiteNavigationElement;
