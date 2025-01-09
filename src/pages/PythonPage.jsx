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
            The non-native Burmese python has become a very devastating snake for the Florida Everglades ecosystem. Due to the Burmese python not having natural predators, they become very large by consuming nearly all the native creatures. Some of these animals are mainly mammals, birds, reptiles of varies sizes. The average size of Burmese python are from 8 to 10 feet, but can get up to 26 feet and weights of more than 200 pounds.
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
        <section className="history">
          <h3 className="history-header">History</h3>
          <p className="history-para">
            Officals and local authorities believe that in August of 1992 Hurricane Andrew which was labeled as a category 5 storm disperse many exotic snakes. Just before the storm hit a exotic pets trade event was going on in Florida. The Hurricane was said to free some Burmese pythons during this event. The surrounding swamp ecosystem provided perfect condition to mimic their native environment. Female Burmese python can have anywhere from 12 to 100 eggs per year. Brand new burmese python hatchlings in around 60 days fromn egg being dropped.
          </p>
        </section>
        <section className="control">
          <h3 className="control-header">Control</h3>
          <p className="control-para">
            Florida has various methods to curve the ecological impact of the Burmese python. The brief overview of how Florida deals the python problem programs to eliminate the python numbers, public awareness efforts, monitoring systems and legal measures. Legally Burmese pythons are ban from release and listed as prohibited species in Florida. Some pythons are captured and microchipped to track there movements and travel patterns. Florida has an python elimination program cash reward based on size of snakes and how many are removed.
          </p>
        </section>
      </div>
    </div>
  )
}

export default PythonPage;