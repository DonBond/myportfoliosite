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
                                <p>I am an honest, respectful and hardworking person. I continually seek to enrich my knowledge in new technologies. I work well in a team environment as well as an individual.</p>
                                <p>On weekends when im not coding away, I love gaming and playing with my yorkies :).</p>
                                
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default AboutMe;