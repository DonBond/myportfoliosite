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
                   {/* <div className="projects-grid">
                    <Card shadow={5} className="projects-card-flex-item">
                        <CardTitle style={{color: '#000', height:'176px', background:
                        'url(https://cdn-images-1.medium.com/max/679/1*qUlxDdY3T-rDtJ4LhLGkEg.png) center / cover'}}>React Project #1</CardTitle>
                        <CardText>
                            I created a Portfolio site for myself. I created this as i love creating React applications. This was a really fun Project.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    <Card shadow={5} className="projects-card-flex-item">
                        <CardTitle style={{color: '#000', height:'176px', background:
                        'url(https://cdn-images-1.medium.com/max/679/1*qUlxDdY3T-rDtJ4LhLGkEg.png) center / cover'}}>React Project #1</CardTitle>
                        <CardText>
                            I created a Portfolio site for myself. I created this as i love creating React applications. This was a really fun Project.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    <Card shadow={5} className="projects-card-flex-item">
                        <CardTitle style={{color: '#000', height:'176px', background:
                        'url(https://cdn-images-1.medium.com/max/679/1*qUlxDdY3T-rDtJ4LhLGkEg.png) center / cover'}}>React Project #1</CardTitle>
                        <CardText>
                            I created a Portfolio site for myself. I created this as i love creating React applications. This was a really fun Project.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
            </div> */}
            
            
            
        }else if(this.state.activeTab === 1){
            return (
                <div className="projects-grid">
                    {/*Project 1*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto', marginBottom: '10px'}}>
                        <CardTitle style={{color:'#000', height:'176px',background:
                        'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjwLc6tNy_uSjt-bn7SnQeLIvtUxd156BZEdcFRItAijRwMNc) center / cover'}}>C# project #1</CardTitle>
                        <CardText>
                        I created a Birthday application for a company i work for. It was a Internal Sharepoint site. Everything is in Javascript. 
                        If it is the users B-day i show them at the top of the list. if their B-day is within 2 weeks i also display them but indicate that their B-day is still coming.
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
                        I created a Birthday application for a company i work for. It was a Internal Sharepoint site. Everything is in Javascript. 
                        If it is the users B-day i show them at the top of the list. if their B-day is within 2 weeks i also display them but indicate that their B-day is still coming.
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
                        I created a Birthday application for a company i work for. It was a Internal Sharepoint site. Everything is in Javascript. 
                        If it is the users B-day i show them at the top of the list. if their B-day is within 2 weeks i also display them but indicate that their B-day is still coming.
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
                {/*<div className="projects-grid">
                    
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto', marginBottom: '10px'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                        <CardText>
                        I created a Birthday application for a company i work for. It was a Internal Sharepoint site. Everything is in Javascript. 
                        If it is the users B-day i show them at the top of the list. if their B-day is within 2 weeks i also display them but indicate that their B-day is still coming.
                        </CardText>
                        <CardActions border>
                            <Button colored>View Updates</Button>
                        </CardActions>
                    </Card>
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto', marginBottom: '10px'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenan convallis.
                        </CardText>
                        <CardActions border>
                            <Button colored>View Updates</Button>
                        </CardActions>
                    </Card>
                    
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto', marginBottom: '10px'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenan convallis.
                        </CardText>
                        <CardActions border>
                            <Button colored>View Updates</Button>
                        </CardActions>
                    </Card>
                </div> */}
            
        }else if(this.state.activeTab ===2){
            return (
                <div className="projects-grid">
                    {/*Project 1*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto', marginBottom: '10px'}}>
                        <CardTitle style={{color:'#000', height:'176px',background:
                        'url(https://ih0.redbubble.net/image.416412087.0587/flat,550x550,075,f.jpg) center / cover'}}>C# project #1</CardTitle>
                        <CardText>
                        I created a app for scania to upload truck info to the DB. They import the data with a Excel sheet and the data is pulled from the sheet to the DB
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
                    {/*Project 3*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto', marginBottom: '10px'}}>
                        <CardTitle style={{color:'#000', height:'176px',background:
                        'url(https://ih0.redbubble.net/image.416412087.0587/flat,550x550,075,f.jpg) center / cover'}}>C# project #3</CardTitle>
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
        }
    }
   
    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})} ripple >
                    <Tab>React</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>C#</Tab>
                    <Tab>SQL</Tab>
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