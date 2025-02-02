import React from 'react';
import ContentComponent from '../components/ContentComponent';
import contentLoad from '../data/contentData.js';

import './PythonPage.css';

const PythonPage = () => {
  const content  = contentLoad.find((page) => page.id === 'pythons');  

    if(!content) {
        return <div>Content Not Found</div>;
    }
  return (
    <ContentComponent
      content={content}
      className="python"
      imgUrl={content.imgUrl}       
    />    
  )
}

export default PythonPage;