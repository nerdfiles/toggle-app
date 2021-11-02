import React from 'react';

interface PropsSiteElement {
  header: string,
  url: string
}


const SiteNavigationElement: React.FC<PropsSiteElement> = (props: PropsSiteElement) => {
  console.log({ props })
  return (
    <>
    </>
  );
};


export default SiteNavigationElement;
