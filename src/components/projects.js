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
                    {/*Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color: '#000', height:'176px', background:
                        'url(https://cdn-images-1.medium.com/max/679/1*qUlxDdY3T-rDtJ4LhLGkEg.png) center / cover'}}>React Project #1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                    {/*Project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color: '#000', height:'176px', background:
                        'url(https://cdn-images-1.medium.com/max/679/1*qUlxDdY3T-rDtJ4LhLGkEg.png) center / cover'}}>React Project #2</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                    {/*Project 3 */}
                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color: '#000', height:'176px', background:
                        'url(https://cdn-images-1.medium.com/max/679/1*qUlxDdY3T-rDtJ4LhLGkEg.png) center / cover'}}>React Project #1</CardTitle>
                        <CardText>
                            I created a portfolio site for myself.
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
                </div>
                
            )
        }else if(this.state.activeTab === 1){
            return (
                <div className="projects-grid">
                    {/*Project 1*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'#fff', height:'176px',background:
                        'url(http://html5beginners.com/wp-content/uploads/2014/09/java.png) center / cover'}}>Javascript project #1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/*Project 2*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'#fff', height:'176px',background:
                        'url(http://html5beginners.com/wp-content/uploads/2014/09/java.png) center / cover'}}>Javascript project #2</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/*Project 3*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'#fff', height:'176px',background:
                        'url(http://html5beginners.com/wp-content/uploads/2014/09/java.png) center / cover'}}>Javascript project #3</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }else if(this.state.activeTab ===2){
            return (
                <div className="projects-grid">
                    {/*Project 1*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'#000', height:'176px',background:
                        'url(https://ih0.redbubble.net/image.416412087.0587/flat,550x550,075,f.jpg) center / cover'}}>C# project #1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'#000', height:'176px',background:
                        'url(https://ih0.redbubble.net/image.416412087.0587/flat,550x550,075,f.jpg) center / cover'}}>C# project #2</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'#000', height:'176px',background:
                        'url(https://ih0.redbubble.net/image.416412087.0587/flat,550x550,075,f.jpg) center / cover'}}>C# project #3</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
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
        }else if(this.state.activeTab === 3){
            return (
                <div className="projects-grid">
                    {/*Project 1*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'#000', height:'176px',background:
                        'url(https://cloud.google.com/images/sql-server/lead-graphic.png) center / cover'}}>SQL project #1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'#000', height:'176px',background:
                        'url(https://cloud.google.com/images/sql-server/lead-graphic.png) center / cover'}}>SQL project #2</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/*Project 3*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'#000', height:'176px',background:
                        'url(https://cloud.google.com/images/sql-server/lead-graphic.png) center / cover'}}>SQL project #3</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
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