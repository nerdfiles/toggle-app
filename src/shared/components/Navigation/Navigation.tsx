import React from 'react';
import SiteNavigationElement from './../SiteNavigationElement/SiteNavigationElement';

interface SiteMapItem {
  header: string,
  url: string
}

const Navigation: React.FC = () => {
  const siteMap: SiteMapItem[] = [{
    header: 'example.com',
    url: 'http://example.com'
  }];

  return (
    <>
      <div className="app--navigation">
        <h2>Navigation</h2>
        {
          siteMap.map((siteMapNavigationElement) => {
            return (
              <SiteNavigationElement 
                header={siteMapNavigationElement.header}
                url={siteMapNavigationElement.url}
              />
            )
          })
        }
      </div>
    </>
  );
};


export default Navigation;
