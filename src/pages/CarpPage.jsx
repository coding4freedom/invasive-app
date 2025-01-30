import React from 'react';
import ContentComponent from '../components/ContentComponent';
import contentLoad from '../data/contentData';
import './CarpPage.css';

const CarpPage = () => {
  const content = contentLoad.find((page) => page.id === 'carps');

  if (!content) {
    return <div>Content Not Found</div>
  }
  return (
    <ContentComponent
      content={content} 
      className='carp'
    />
  )
}

export default CarpPage;