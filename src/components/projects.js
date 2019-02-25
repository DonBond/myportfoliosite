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
                        'url(https://cdn-images-1.medium.com/max/679/1*qUlxDdY3T-rDtJ4LhLGkEg.png) center / cover'}}>React project #1</CardTitle>
                        <CardText>
                        I created this Portfolio site for myself. I created this as I love creating React applications. 
                        This was a really fun Project.
                        </CardText>
                        <CardActions border>
                            {/*<Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>*/}
                            <Button colored><a href="https://donovanbotes.netlify.com" target="_blank">Live Demo</a></Button>
                        </CardActions>
                        <CardMenu style={{color:'#000'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/*Project 2*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto', marginBottom: '10px'}}>
                        <CardTitle style={{color:'#000', height:'176px',background:
                        'url(https://cdn-images-1.medium.com/max/679/1*qUlxDdY3T-rDtJ4LhLGkEg.png) center / cover'}}>React project #2</CardTitle>
                        <CardText>
                        I created a React Task list app. 
                        This was one of the best sites I created as it helps me get my tasks done.
                        </CardText>
                        <CardActions border>
                            {/*<Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>*/}
                            <Button colored><a href="https://donovanreacttodo.netlify.com/" target="_blank">Live Demo</a></Button>
                        </CardActions>
                        <CardMenu style={{color:'#000'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/*Project 3*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto', marginBottom: '10px'}}>
                        <CardTitle style={{color:'#000', height:'176px',background:
                        'url(https://cdn-images-1.medium.com/max/679/1*qUlxDdY3T-rDtJ4LhLGkEg.png) center / cover'}}>React project #3</CardTitle>
                        <CardText>
                            To be updated soon with a new project!
                        </CardText>
                        <CardActions border>
                            {/*<Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>*/}
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
                        'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjwLc6tNy_uSjt-bn7SnQeLIvtUxd156BZEdcFRItAijRwMNc) center / cover'}}>JS project #1</CardTitle>
                        <CardText>
                        I created a Birthday application for the company I work for. It is on our Internal Sharepoint site home page. Everything is in Javascript. I fetch data from our User list.
                        When it's someones B-day it indicates that it is today, it also lists upcoming B-days.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/DonBond/TheBDApp" target="_blank">GitHub</a></Button>
                            {/*<Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>*/}
                        </CardActions>
                        <CardMenu style={{color:'#000'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/*Project 2*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto', marginBottom: '10px'}}>
                        <CardTitle style={{color:'#fff', height:'176px',background: 'url(/img/batman.png'}}>JS project #2</CardTitle>
                        <CardText>
                        I created Batman clock using JavaScript / HTML. Reason for this, Who would'nt like a Batman clock? it was a fun little project. All it does is show the time within the batman Logo.
                        </CardText>
                        <CardActions border>
                            <Button colored ><a href="https://github.com/DonBond/batmanClock/tree/master/digital-clock" target="_blank">GitHub</a></Button>
                            {/*<Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>*/}
                        </CardActions>
                        <CardMenu style={{color:'#000'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/*Project 3*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto', marginBottom: '10px'}}>
                        <CardTitle style={{color:'#000', height:'176px',background:
                        'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjwLc6tNy_uSjt-bn7SnQeLIvtUxd156BZEdcFRItAijRwMNc) center / cover'}}>JS project #3</CardTitle>
                        <CardText>
                        I created a cool image gallery for company events. I created it on our Internal Sharepoint site. I used Javascript and HTML.
                        When you click the image it enlarges.
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
                        I created a app for a client called Scania. They import the data they get on their trucks with the app. Using the app, they select the Excel sheet and click import data. The data is pulled from the Excel sheet to the tables in the Database.
                        </CardText>
                        <CardActions border>
                            {/*<Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>*/}
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
                        Will Be updated soon with a new project.
                        </CardText>
                        <CardActions border>
                           {/* <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                           <Button colored>Live Demo</Button>*/}
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
                        I created a site for fetching data from a device in Zimbabwe. it gets the data from a excel sheet that is loaded to a FTP site.
                        It checks the date, and if it is todays date it gets data for today. 
                        </CardText>
                        <CardActions border>
                            {/*<Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>*/}
                        </CardActions>
                        <CardMenu style={{color:'#000'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }else if(this.state.activeTab ===3){
            return (
                <div className="projects-grid">
                    {/*Project 1*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto', marginBottom: '10px'}}>
                        <CardTitle style={{color:'#000', height:'176px',background:
                        'url(https://ih0.redbubble.net/image.416412087.0587/flat,550x550,075,f.jpg) center / cover'}}>HTML project #1</CardTitle>
                        <CardText>
                        I created web pages for EOH articles. I made the template easy to use for developers to create more articles if I leave the company.
                        </CardText>
                        <CardActions border>
                            {/*<Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>*/}
                            <Button colored><a href="http://media.eohamp.co.za/" target="_blank">Live Demo</a></Button>
                        </CardActions>
                        <CardMenu style={{color:'#000'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/*Project 2*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto', marginBottom: '10px'}}>
                        <CardTitle style={{color:'#000', height:'176px',background:
                        'url(https://ih0.redbubble.net/image.416412087.0587/flat,550x550,075,f.jpg) center / cover'}}>HTML project #2</CardTitle>
                        <CardText>
                        I created simple web site pages for Sebata while i worked at Turnbuckle.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="http://www.sebatagroup.com/" target="_blank">Demo 1</a></Button>
                            <Button colored><a href="http://www.hotelsebata.com/" target="_blank">Demo 2</a></Button>
                            <Button colored><a href="http://www.sebatalegends.com/" target="_blank">Demo 3</a></Button>
                        </CardActions>
                        <CardMenu style={{color:'#000'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/*Project 3*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto', marginBottom: '10px'}}>
                        <CardTitle style={{color:'#000', height:'176px',background:
                        'url(https://ih0.redbubble.net/image.416412087.0587/flat,550x550,075,f.jpg) center / cover'}}>HTML project #3</CardTitle>
                        <CardText>
                        I created a Portfolio site for my sister using WordPress. I updated the pages using HTML. I styled the pages with custom CSS.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://cindybotes.wordpress.com/" target="_blank">Live Demo</a></Button>
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
                    <Tab>JS</Tab>
                    <Tab>C#</Tab>
                    <Tab>HTML</Tab>
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