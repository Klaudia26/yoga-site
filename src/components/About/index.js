import React from 'react';
import Heading from '../common/Heading';
import Fitness from '../common/Fitness';
import './style.scss';

const About = () => {
    return (
        <section className="section-about">
            <div className="container">
                <div className="row row--right">
                    <div className="content">
                        <Heading num="01." part1="What is" part2="Yoga?" />
                        <p className="paragraph">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p className="paragraph">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  distribution of letters, as opposed to using 'Content here, content here', English. Many desktop publishing packages and web page editors now use web sites still in their infancy.</p>
                    </div>
                </div>

                <div className="row row--left">
                    <div className="content content--right">
                        <Heading num="02." part1="Who can" part2="practice?" />
                        <p className="paragraph">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p className="paragraph">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  distribution of letters, as opposed to using 'Content here, content here', English. Many desktop publishing packages and web page editors now use web sites still in their infancy.</p>
                    </div>
                </div>
            </div>
            <Fitness />
        </section>
    );
}

export default About;
