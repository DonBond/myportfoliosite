import React,{Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import ExamsPassed from './examspassed';

const proDes =<p>Front end Development on internal sites.<br/>
Sharepoint Development.<br/>
Nintex Workflows.</p>

const EOHDes = <p>Development of new software using JavaScript, Knockout, C#, MVC and SQL.<br/>
                2nd line support to all customers.<br/>
                Maintenance of current software.<br/>
                Creation of Functional Specification, Business Requirements Documentation and support charters.<br/>
                SharePoint migration using ShareGate.<br/>
                SharePoint development</p>;

const kindleDes = <p>Planning and development of new software and maintenance of current software.<br/>
Drawing reports and Schedules as per request from clients.<br/>
       Online Support - assist clients in requests regarding functionality such as
       the unlocking of users, adding of user rights and entities to the system such as brokers and
       re-insurers.<br/>
        assist clients in requests regarding questions such as
 policy errors and endorsement errors.<br/>
Researching and assisting in implementing new Technologies.<br/>
Client training</p>

const yeahDes = <p>Installing operating systems such as Windows 7, XP, and XP embedded on Kiosk PC.<br/>
Installing touch screen drivers as well as other drivers on the Kiosk PCs.<br/>
Setting up Logmein and Team Viewer 7 on the Kiosks for Remote access.<br/>
Installing our Platform on the Kiosk and ensuring that the applications installed work through our Platform.<br/>
Updating the Kiosk with latest applications that have been developed.<br/>
Testing applications that have been developed.<br/>
Creating basic reports in Excel for clients.<br/>
Remote installations of our Platform and applications in the UK, Sweden and Germany.<br/>
Installing our applications on Apple and Android tablets.<br/>
Monitoring all units and troubleshooting should the need arise.<br/>
Installing and configuring printers in the kiosks.<br/>
Installing and configuring Bill Reader.<br/>
General IT functions</p>

const libraDes= <p>Maintain and call on existing customers as well as cold calling.<br/>
Arrange appointments.  <br/>
Prepare quotations.   <br/>
Attend to deliveries when necessary.  <br/>
Demonstrate and explain the function of equipment.</p>

const TurnbuckleDes=<p>Created and maintained HTML websites for clients.  <br/>
Word press sites using Word press templates provided.  <br/>
Worked with PHP sites for clients and maintained updates to the sites.</p>

const bcxDes =<p>Development of client applications using C#.<br/>
Assisted in developing a debt management application for Interfusion. <br/>
Worked in Visual Studio 3.5 and SQL server 2005.<br/>
Assisted in developing a system for Sasol which used services 
SharePoint development for internal projects.<br/>
Created an internal website for BCX using SharePoint designer. <br/>
Created and developed web parts and updated master pages.<br/>
Database Development.<br/>
Creating tables and joining tables. Writing stored procedures.<br/>
Creating SQL Reports in reporting services.</p>

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img 
                                src="https://media.licdn.com/dms/image/C5603AQE6EY0dXCO8rQ/profile-displayphoto-shrink_200_200/0?e=1548288000&v=beta&t=iJvhviP-haV_Zg43ZeFbxTsvIqANCXK72iR15r-QMR0"
                                alt="avatar"
                                style={{height:'200px',borderRadius:'50%'}}
                            />
                        </div>
                        <h2 style={{paddingTop:'2em'}}>Donovan Botes</h2>
                        <h4 style={{color:'grey'}}>Developer</h4>
                       {/*  <hr style={{borderTop:'3px solid #833fb2',width:'50%'}} />
                        <p>I'm a Software Developer in the Information Technology Industry. I consider myself to be a hard working and dedicated individual who possess excellent communication and interpersonal skills.</p>
                        <p>I am able to work in diverse and dynamic environments comprising of teams or as an individual. I am self-driven, self-motivated and thoroughly enjoy confronting new challenges. 
                            I have a keen interest in new technology and I continuously strive to develop my skills and knowledge through actively learning, adapting to my environment and embracing change.</p>
                        */}
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}} />
                        <h5>Address</h5>
                        <p>Somewhere in South Africa</p>
                        <h5>Phone</h5>
                        <p>072 640 0936</p>
                        <h5>Email</h5>
                        <p>jetdon1@gmail.com</p>
                        <h5>Site</h5>
                        <p>https://donovanbotes.netlify.com</p>
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education
                            startYear={2004}
                            endYear={2006}
                            schoolName="University of Johannesburg"
                            schooleDescription="Studied"
                        />

                        <ExamsPassed 
                            ExamMessage="Exams Completed"
                            Examhead="Microsoft Exams Passed"
                            Exam1="480 – Programming in HTML5 with Javascript and CSS"
                            Exam2="526 – Windows-based Client Development"
                            Exam3="528 – Web-based Client Development"
                            Exam4="536 – Application Development Foundation"
                        />
                        <hr style={{borderTop:'3px solid #e22947'}}/>

                        <h2>Experience</h2>
                        <Experience
                            startYear={2018}
                            endYear="Present"
                            jobName="Proconics"
                            jobDescription={proDes}
                        />
                        <Experience
                            startYear={2016}
                            endYear={2018}
                            jobName="EOH"
                            jobDescription={EOHDes}
                        />
                        <Experience
                            startYear={2014}
                            endYear={2016}
                            jobName="Kindle"
                            jobDescription={kindleDes}
                        />
                        <Experience
                            startYear={2011}
                            endYear={2014}
                            jobName="Yeahpoint"
                            jobDescription={yeahDes}
                        />
                        <Experience
                            startYear={2011}
                            endYear={2011}
                            jobName="Libra Labels"
                            jobDescription={libraDes}
                        />
                        <Experience
                            startYear={2010}
                            endYear={2011}
                            jobName="Turnbuckle"
                            jobDescription={TurnbuckleDes}
                        />
                        <Experience
                            startYear={2007}
                            endYear={2010}
                            jobName="BCX"
                            jobDescription={bcxDes}
                        />


                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills
                            skill="JavaScript"
                            progress={80}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={100}
                        />
                        <Skills
                            skill="React"
                            progress={30}
                        />
                        <Skills
                            skill="SQL"
                            progress={80}
                        />
                        <Skills
                            skill="C#"
                            progress={70}
                        />
                        <Skills
                            skill="Nintex Workflows"
                            progress={60}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;