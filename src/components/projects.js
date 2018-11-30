import React,{Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button,CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories(){
        if (this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                    {/*Project 1*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto', marginBottom: '10px'}}>
                        <CardTitle style={{color:'#000', height:'176px',background:
                        'url(https://cdn-images-1.medium.com/max/679/1*qUlxDdY3T-rDtJ4LhLGkEg.png) center / cover'}}>C# project #1</CardTitle>
                        <CardText>
                        I created this Portfolio site for myself. I created this as I love creating React applications. 
                        This was a really fun Project.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#000'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/*Project 2*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto', marginBottom: '10px'}}>
                        <CardTitle style={{color:'#000', height:'176px',background:
                        'url(https://cdn-images-1.medium.com/max/679/1*qUlxDdY3T-rDtJ4LhLGkEg.png) center / cover'}}>C# project #2</CardTitle>
                        <CardText>
                        I created a React Task list app. 
                        This was one of the best sites I created as it helps me get my tasks done. It saves to a xml sheet
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#000'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/*Project 3*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto', marginBottom: '10px'}}>
                        <CardTitle style={{color:'#000', height:'176px',background:
                        'url(https://cdn-images-1.medium.com/max/679/1*qUlxDdY3T-rDtJ4LhLGkEg.png) center / cover'}}>C# project #3</CardTitle>
                        <CardText>
                            I created a Portfolio site for myself. I created this as i love creating React applications. This was a really fun Project.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#000'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
                )       
            
        }else if(this.state.activeTab === 1){
            return (
                <div className="projects-grid">
                    {/*Project 1*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto', marginBottom: '10px'}}>
                        <CardTitle style={{color:'#000', height:'176px',background:
                        'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjwLc6tNy_uSjt-bn7SnQeLIvtUxd156BZEdcFRItAijRwMNc) center / cover'}}>C# project #1</CardTitle>
                        <CardText>
                        I created a Birthday application for the company I work for. It is on our Internal Sharepoint site. Everything is in Javascript. 
                        When it is someones B-day it indicates that it is today, it also lists upcoming B-days.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#000'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/*Project 2*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto', marginBottom: '10px'}}>
                        <CardTitle style={{color:'#000', height:'176px',background:
                        'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjwLc6tNy_uSjt-bn7SnQeLIvtUxd156BZEdcFRItAijRwMNc) center / cover'}}>C# project #2</CardTitle>
                        <CardText>
                        I created Batman clock using JavaScript / HTML. Reason for this, Who would'nt like a Batman clock? it was a fun little project. 
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#000'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/*Project 3*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto', marginBottom: '10px'}}>
                        <CardTitle style={{color:'#000', height:'176px',background:
                        'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjwLc6tNy_uSjt-bn7SnQeLIvtUxd156BZEdcFRItAijRwMNc) center / cover'}}>C# project #3</CardTitle>
                        <CardText>
                        I created a cool image gallery for company events. I created it on our Internal Sharepoint site. I used Javascript and HTML.
                        When you click the image it enlarges. I got ideas from CodePen.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#000'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
                )
            
        }else if(this.state.activeTab ===2){
            return (
                <div className="projects-grid">
                    {/*Project 1*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto', marginBottom: '10px'}}>
                        <CardTitle style={{color:'#000', height:'176px',background:
                        'url(https://ih0.redbubble.net/image.416412087.0587/flat,550x550,075,f.jpg) center / cover'}}>C# project #1</CardTitle>
                        <CardText>
                        I created a app for a client called Scania. You upload truck info to the DB. They import the data with a Excel sheet and when the user clicks import, the data is pulled from the sheet to the DB
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#000'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/*Project 2*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto', marginBottom: '10px'}}>
                        <CardTitle style={{color:'#000', height:'176px',background:
                        'url(https://ih0.redbubble.net/image.416412087.0587/flat,550x550,075,f.jpg) center / cover'}}>C# project #2</CardTitle>
                        <CardText>
                        I created a Portfolio site for myself. I created this as I love learning new things as well as React. im also in the process of creating sites for family members.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#000'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/*Project 3*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto', marginBottom: '10px'}}>
                        <CardTitle style={{color:'#000', height:'176px',background:
                        'url(https://ih0.redbubble.net/image.416412087.0587/flat,550x550,075,f.jpg) center / cover'}}>C# project #3</CardTitle>
                        <CardText>
                        I created a site for fetching data from a device in Zimbabwe. if gets the data from a excel sheet. It checks the date and if it is todays date it gets data for today
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#000'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }
   
    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})} ripple >
                    <Tab>React</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>C#</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    
            </div>
        )
    }
}

export default Projects;