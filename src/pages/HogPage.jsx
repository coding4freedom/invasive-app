import React from 'react';
import ContentComponent from '../components/ContentComponent';
import contentLoad from '../data/contentData';

import './HogPage.css';

const HogPage = () => {
  const content = contentLoad.find((page) => page.id === 'hogs');

  if (!content) {
    return <div>Content Not Found</div>
  }
  return (
    <ContentComponent 
      content={content}
      className='hog'
    />
  )
}

export default HogPage;