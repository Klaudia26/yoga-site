import React from 'react';
import Heading from '../common/Heading';
import Feature from './Feature';
import './style.scss';

const Features = () => {
    const features = [
        {
            title: 'Expert Trainers',
            text: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem',
        },
        {
            title: 'Training Sessions',
            text: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem',
        },
        {
            title: 'Awsome Support',
            text: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem',
        },
        {
            title: '24/7 Open',
            text: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem',
        }
    ];

    return (
        <section className="section-features">
            <div className="container">
                <div className="row row--right">
                    <div className="content">
                        <Heading num="03." part1=" Why choose" part2=" us?" />
                        <p className="paragraph">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        {features.map(feature => <Feature title={feature.title} text={feature.text} /> )}
                    </div>
                </div>

                <div className="row row--left">
                    <div className="content content--right">
                        <Heading num="04." part1=" Some awesome" part2=" speeches" />
                        <p className="paragraph paragraph--italic">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  distribution of letters, as opposed to using 'Content here, content here', English. Many desktop publishing packages and web page editors now use web sites still in their infancy.</p>
                        <div className="author">
                            <p className="author__name">Jenny Duren</p>
                            <p className="author__age">Student, Age: 26</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
