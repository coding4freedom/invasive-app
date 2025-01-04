import React from 'react';

import './PythonPage.css';

const PythonPage = () => {
  return (
    <div className="python wrap">
      <div className="row">
        <h1 className="python-header">The Burmese Python</h1>
        <section className="intro">
          <h3 className="intro-header">Intro</h3>
          <p className="intro-para">
            The non-native Burmese python has become a very devastating snake for the Florida Everglades ecosystem. Due to the Burmese python not having natural predators, they become very large by consuming nearly all the native creatures. Some of these animals are mainly mammals, birds, reptiles of varies sizes.
          </p>
          <figure className="image-wrapper">
            <img src="" alt="" className="python-img" />
            <figcaption>Burmese Python</figcaption>
          </figure>
        </section>
        <section className="native">
          <h3 className="native-header">Native</h3>
          <span className="native-para">
            India, Lower China, Malay Peninsula and some East Indies islands
          </span>
        </section>
        <section className="diet">
          <h3 className="diet-header">Diet</h3>
          <p className="diet-para">
            Since Burmese python are not picky eaters there diet ranges basically to what every can fit in their mouth. Being able to swin the Burmese python eat any fish it can caught. In the category of mammals they eat rats, mice, squirrels, raccoons, opossums, rabbites, bobcats and white-tailed deer. When it comes to birds Burmese python eat wading birds, waterfowl, herons egrets, and songbirds. In the reptiles they eat turtles, native snakes, varies lizards and alligators.
          </p>
        </section>
      </div>
    </div>
  )
}

export default PythonPage;