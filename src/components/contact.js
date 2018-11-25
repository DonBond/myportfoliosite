import React,{Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <Grid className="contact-grid">
                <Cell col={4}>
                    <div style={{textAlign:'center'}}>
                        <img 
                                src="https://media.licdn.com/dms/image/C5603AQE6EY0dXCO8rQ/profile-displayphoto-shrink_200_200/0?e=1548288000&v=beta&t=iJvhviP-haV_Zg43ZeFbxTsvIqANCXK72iR15r-QMR0"
                                alt="avatar"
                                style={{height:'200px',borderRadius:'50%'}}
                        />
                        <h2 style={{paddingTop:'2em'}}>Donovan Botes</h2>
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}} />
                        <p>Want an awesome site! Don't wait any longer, get hold of me now! I will make your dream site a reality</p>
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}} />
                    </div>
                </Cell>
                <Cell className="resume-right-col" col={8}>
                    <h2>Contact Me</h2>
                    <hr/>
                    <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '17px', fontFamily: 'Anton'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                    072 640 0936
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '17px', fontFamily: 'Anton'}}>
                                <i className="fa fa-envelope" aria-hidden="true"/>
                                    jetdon1@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '17px', fontFamily: 'Anton'}}>
                                <i className="fa fa-skype" aria-hidden="true"/>
                                    KingDon1984
                                </ListItemContent>
                            </ListItem>

                        </List>
                    </div>
                </Cell> 
            </Grid>
        )
    }
}

export default Contact;