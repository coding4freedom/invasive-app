import React from 'react';

import './ContentComponent.css';


const ContentComponent = ({content, className}) => {
    

    return(
        <div className={`content wrap ${className || ''}`}>
          <div className="row">
            <h1 className="content-header">{content.header}</h1>
            <section className="intro">
              <h3 className="intro-header">Intro</h3>
              <p className="intro-para">
                {content.introPara}
              </p>
              <figure className="image-wrapper">
                <img src={content.imgUrl} alt={`${content.imgAuth || ''}`} className={content.imgClass} />
                <figcaption>{content.caption}</figcaption>
              </figure>
            </section>
            <section className="native">
              <h3 className="native-header">Native</h3>
              <span className="native-para">
                {content.nativePara}
              </span>
            </section>
            <section className="diet">
              <h3 className="diet-header">Diet</h3>
              <p className="diet-para">
                {content.diet}
              </p>
            </section>
            <section className="history">
              <h3 className="history-header">History</h3>
              <p className="history-para">
                {content.history}
              </p>
            </section>
            <section className="control">
              <h3 className="control-header">Control</h3>
              <p className="control-para">
                {content.control}
              </p>
            </section>
          </div>
      </div>
    )
}

export default ContentComponent;