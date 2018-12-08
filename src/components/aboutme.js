import React,{Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class AboutMe extends Component {
    render() {
        return(
            <div style={{width:'100%',margin:'auto'}}>
                <Grid className="about-grid">
                    <Cell col={12}>
                        <div className="about-text">
                            <h1>About Me</h1>
                                <p>I'm a Software Developer in the Information Technology Industry. I consider myself to be a hard working and dedicated individual who possess excellent communication and interpersonal skills.</p>
                                <p>I am able to work in diverse and dynamic environments comprising of teams or as an individual. I am self-driven, self-motivated and thoroughly enjoy confronting new challenges.</p>
                                <p>I have a keen interest in new technology and I continuously strive to develop my skills and knowledge through actively learning, adapting to my environment and embracing change.</p>
                                <p>I am an honest, respectful and hardworking person. I continually seek to enrich my knowledge in new technologies. I work well in a team environment as well as an individual.</p>
                                <p>On weekends when I'm not coding away, I love gaming and playing with my yorkies. I enjoy reading tech books</p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default AboutMe;