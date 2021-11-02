import React from 'react';
import SiteNavigationElement from './../SiteNavigationElement/SiteNavigationElement';

interface Funcy {
  (title: string): void
}

interface PropsSiteElement {
  header: string,
  url: string,
  func: Funcy
}



const Navigation: React.FC = () => {
  const siteMap: PropsSiteElement[] = [{
    header: 'example.com',
    url: 'http://example.com',
    func: (title: string) => {
      console.log('TITLE', title)
    }
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
                func={siteMapNavigationElement.func}
              />
            )
          })
        }
      </div>
    </>
  );
};


export default Navigation;
