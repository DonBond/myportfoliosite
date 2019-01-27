import React,{Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <Grid className="contact-grid">
                <Cell col={4}>
                    <div style={{textAlign:'center'}}>
                        <img 
                                src="https://media.licdn.com/dms/image/C5603AQE6EY0dXCO8rQ/profile-displayphoto-shrink_200_200/0?e=1554336000&v=beta&t=nqSrKi2pumyvKGMmwz5N553LFDIJZhO6yZvN4OaDEk8"
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
                                <ListItemContent style={{fontSize: '150%', fontFamily: 'Anton', justifyContent: 'center'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '150%', fontFamily: 'Anton', justifyContent: 'center'}}>
                                    072 640 0936
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '150%', fontFamily: 'Anton', justifyContent: 'center'}}>
                                <i className="fa fa-envelope" aria-hidden="true"/>
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '150%', fontFamily: 'Anton', justifyContent: 'center'}}>
                                    jetdon1@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '150%', fontFamily: 'Anton', justifyContent: 'center'}}>
                                <i className="fa fa-skype" aria-hidden="true"/>
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '150%', fontFamily: 'Anton', justifyContent: 'center'}}>
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