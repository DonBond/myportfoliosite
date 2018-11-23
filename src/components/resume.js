import React,{Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

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
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}} />
                        <p>I'm a Software Developer in the Information Technology Industry. I consider myself to be a hard working and dedicated individual who possess excellent communication and interpersonal skills. I am able to work in diverse and dynamic environments comprising of teams or as an individual. I am self-driven, self-motivated and thoroughly enjoy confronting new challenges. I have a keen interest in new technology and I continuously strive to develop my skills and knowledge through actively learning, adapting to my environment and embracing change.</p>
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}} />
                        <h5>Address</h5>
                        <p>1 Hacker Way Menlo Park, 94025</p>
                        <h5>Phone</h5>
                        <p>072 640 0936</p>
                        <h5>Email</h5>
                        <p>jetdon1@gmail.com</p>
                        <h5>Web</h5>
                        <p>https://donovanbotes.netlify.com</p>
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education
                            startYear={2004}
                            endYear={2006}
                            schoolName="University of Johannesburg"
                            schooleDescription="Studied "
                        />
                        <hr style={{borderTop:'3px solid #e22947'}}/>

                        <h2>Experience</h2>
                        <Experience
                            startYear={2018}
                            endYear="Present"
                            jobName="Proconics"
                            jobDescription="Re-designing of intranet site.
                            developing Sharepoint components.
                            Nintex Workflows."
                        />
                        <Experience
                            startYear={2016}
                            endYear={2018}
                            jobName="EOH"
                            jobDescription="Development of new software using JavaScript, Knockout, C#, MVC and SQL.
                            2nd line support to all customers.
                            Maintenance of current software.
                            Creation of Functional Specification, Business Requirements Documentation and support charters.
                            SharePoint migration using ShareGate.
                            SharePoint development"
                        />
                        <Experience
                            startYear={2014}
                            endYear={2016}
                            jobName="Kindle"
                            jobDescription="Planning and development of new software and maintenance of current software.
                            Drawing reports and Schedules as per request from clients.
                                   Online Support - assist clients in requests regarding functionality such as
                                   the unlocking of users, adding of user rights and entities to the system such as brokers and
                                   re-insurers. assist clients in requests regarding questions such as
                             policy errors and endorsement errors.
                            Researching and assisting in implementing new Technologies.
                            Client training
                            "
                        />
                        <Experience
                            startYear={2011}
                            endYear={2014}
                            jobName="Yeahpoint"
                            jobDescription="Installing operating systems such as Windows 7, XP, and XP embedded on Kiosk PC.
                            Installing touch screen drivers as well as other drivers on the Kiosk PCs.
                            Setting up Logmein and Team Viewer 7 on the Kiosks for Remote access.
                            Installing our Platform on the Kiosk and ensuring that the applications installed work through our Platform.
                            Updating the Kiosk with latest applications that have been developed.
                            Testing applications that have been developed.
                            Creating basic reports in Excel for clients.
                            Remote installations of our Platform and applications in the UK, Sweden and Germany.
                            Installing our applications on Apple and Android tablets.
                            Monitoring all units and troubleshooting should the need arise.
                            Installing and configuring printers in the kiosks.
                            Installing and configuring Bill Reader.
                            General IT functions"
                        />
                        <Experience
                            startYear={2011}
                            endYear={2011}
                            jobName="Libra Labels"
                            jobDescription="Maintain and call on existing customers as well as cold calling.  Arrange appointments.  
                            Prepare quotations.   
                            Attend to deliveries when necessary.  
                            Demonstrate and explain the function of equipment."
                        />
                        <Experience
                            startYear={2010}
                            endYear={2011}
                            jobName="Turnbuckle"
                            jobDescription="Created and maintained HTML websites for clients.  
                            Word press sites using Word press templates provided.  
                            Worked with PHP sites for clients and maintained updates to the sites."
                        />
                        <Experience
                            startYear={2007}
                            endYear={2010}
                            jobName="BCX"
                            jobDescription="Development of client applications using C#.
                            Assisted in developing a debt management application for Interfusion. 
                            Worked in Visual Studio 3.5 and SQL server 2005.
                            Assisted in developing a system for Sasol which used services 
                            SharePoint development for internal projects.
                            Created an internal website for BCX using SharePoint designer. 
                            Created and developed web parts and updated master pages.
                            Database Development.
                            Creating tables and joining tables. Writing stored procedures.
                            Creating SQL Reports in reporting services."
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