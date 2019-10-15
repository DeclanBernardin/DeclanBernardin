import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Tab from '@material-ui/core/Tab';


const styles = ({
    root: {
        margin: '10px',
        align: 'center',
    },
});

class MainPage extends Component {

    state={
        about: true,
        skills: true,
        projects: true,
        workExperience: true,
        education: true,
    }

toggleAbout = () => {
    this.setState({
        about: !this.state.about
    })
    console.log(this.state.about);
    
}

toggleSkills = () => {
    this.setState({
        skills: !this.state.skills
    })
    console.log(this.state.skills);
    
}

toggleProjects = () => {
    this.setState({
        projects: !this.state.projects
    })
    console.log(this.state.projects);
    
}

toggleWorkExperience = () => {
    this.setState({
        workExperience: !this.state.workExperience
    })
    console.log(this.state.workExperience);
    
}

toggleEducation = () => {
    this.setState({
        education: !this.state.education
    })
    console.log(this.state.education);
    
}

    render(){
        return(
            <div className="body">
                <header >
                    
                    <div className="header">
                        <a href="#About" ><Tab style={{ color: '#6fcb9f', fontFamily: 'impact', textDecoration: 'none', fontSize: '20px', backgroundColor: '#ffe28a' }} label="About" indicatorColor="primary"
                            textColor="primary"/></a>
                        <a href="#Skills"><Tab style={{ color: '#6fcb9f', fontFamily: 'impact', textDecoration: 'none', fontSize: '20px', backgroundColor: '#ffe28a' }}label="Skills" indicatorColor="primary"
                            textColor="primary"/></a>
                        <a href="#Projects"><Tab style={{ color: '#6fcb9f', fontFamily: 'impact', textDecoration: 'none', fontSize: '20px', backgroundColor: '#ffe28a' }}label="Projects" indicatorColor="primary"
                            textColor="primary"/></a>
                        <a href="#WorkExperience"><Tab style={{ color: '#6fcb9f', fontFamily: 'impact', textDecoration: 'none', fontSize: '20px', backgroundColor: '#ffe28a' }}label="Work Experience" indicatorColor="primary"
                            textColor="primary"/></a>
                        <a href="#Education"><Tab style={{ color: '#6fcb9f', fontFamily: 'impact', textDecoration: 'none', fontSize: '20px', backgroundColor: '#ffe28a' }}label="Education" indicatorColor="primary"
                            textColor="primary"/></a>
                    </div>
                </header>
                <div className="sectionOne">
                    <img src="https://raw.githubusercontent.com/DeclanBernardin/Declan-Bernardin-Website/master/Pics/thumbnail.png" height="500px" style={{ float: 'left', margin: 'auto', backgroundColor: '#6fcb9f', boxShadow: 'black 4px 4px 4px 4px', maxWidth: '1000px' }}></img>
                    <img src="https://raw.githubusercontent.com/DeclanBernardin/Declan-Bernardin-Website/master/Pics/thumbnail%20(1).png" alt="image of Declan Bernardin" height="500px" style={{ float: 'Right', marginRight: '6px', marginLeft: '5px', backgroundColor: '#6fcb9f', boxShadow: 'black 4px 4px 4px 4px' }}></img>
                    <div className="contact">
                        <h1>DECLAN BERNARDIN</h1>
                    </div>
                    <img src="https://raw.githubusercontent.com/DeclanBernardin/Declan-Bernardin-Website/master/Pics/thumbnail%20(5).png" height="307px" style={{ float: 'left', marginLeft: '18px', backgroundColor: '#6fcb9f', boxShadow: 'black 4px 4px 4px 4px', maxWidth: '1000px'}}></img>
                    <img src="https://raw.githubusercontent.com/DeclanBernardin/Declan-Bernardin-Website/master/Pics/selfie%20(1).png" height="307" style={{ float: 'left', marginLeft: '18px', backgroundColor: '#6fcb9f', boxShadow: 'black 4px 4px 4px 4px', maxWidth: '1000px' }}></img>
                    <img src="https://raw.githubusercontent.com/DeclanBernardin/Declan-Bernardin-Website/master/Pics/bass-pic.png" height="307" style={{ float: 'left', marginLeft: '18px', backgroundColor: '#6fcb9f', boxShadow: 'black 4px 4px 4px 4px', maxWidth: '1000px' }}></img>
                </div>
                {this.state.about ? <section id="About">
                    <h1 style={{ textAlign: 'center', color: 'black', fontSize: '70px', color: '#6fcb9f', textShadow: 'black 2px 4px' }}> About Me </h1>
                    <img src="https://raw.githubusercontent.com/DeclanBernardin/Declan-Bernardin-Website/master/Pics/ClickHere.png" onClick={this.toggleAbout}></img>
                </section> :
                <section id="About">
                        <h1 style={{ color: 'black', fontSize: '70px', color: '#6fcb9f', textShadow: 'black 2px 4px' }} onClick={this.toggleAbout}>About Me</h1>
                        {/* <a  href="https://www.linkedin.com/in/declan-bernardin-678045191/"><Tab style={{ color: '#6fcb9f', fontFamily: 'impact', textDecoration: 'none', fontSize: '20px', }}label={<LinkedInIcon />} /></a>
                        <a href="https://github.com/DeclanBernardin"><Tab label="GitHub" style={{ color: '#6fcb9f', fontFamily: 'impact', textDecoration: 'none', fontSize: '20px',  }}/></a> */}
                        <div style={{ backgroundColor: 'white', paddingLeft: '20px', boxShadow: 'black 4px 4px', paddingRight: '10px' }}>
                            <p style={{ fontSize: '40px' }}>I'm a Full Stack Software Engineer. I'm hard working, a fast learner and very excited to start my career.</p>
                        </div>
                        <a href="https://www.linkedin.com/in/declan-bernardin-678045191/"><img src="https://raw.githubusercontent.com/DeclanBernardin/Declan-Bernardin-Website/master/Pics/LinkedIn_logo_initials.png" height='100px' style={{ float: 'left', marginLeft: '18px', backgroundColor: '#6fcb9f', boxShadow: 'black 4px 4px', maxWidth: '1000px' }}></img></a>
                        <a href="https://github.com/DeclanBernardin"><img src="https://raw.githubusercontent.com/DeclanBernardin/Declan-Bernardin-Website/master/Pics/github_PNG20.png" height='100px' style={{ float: 'left', marginLeft: '18px', backgroundColor: '#6fcb9f', boxShadow: 'black 4px 4px', maxWidth: '1000px' }}/></a>
                        <a href="https://docs.google.com/document/d/1rmy4pLekOVpbixoRDOu5wIaDVZK11TRAwBOi8KV6jLY/edit"><h1 style={{ margin: '20px', fontSize: '30px', float: 'left', width: '100px', backgroundColor: 'white', paddingLeft: '20px', boxShadow: 'black 4px 4px' }}>Resume</h1></a>
                </section>}

                {this.state.skills ? <section id="Skills">
                    <h1 style={{ textAlign: 'center', color: 'black', fontSize: '70px', color: '#fffeb3', textShadow: 'black 2px 4px' }}>Skills</h1>
                    <img src="https://raw.githubusercontent.com/DeclanBernardin/Declan-Bernardin-Website/master/Pics/ClickHere.png" onClick={this.toggleSkills}></img>
                </section> :
                <section id="Skills">
                        <h1 onClick={this.toggleSkills} style={{ fontSize: '70px', color: '#fffeb3', textShadow: 'black 2px 4px' }} onClick={this.toggleSkills}>Skills</h1>
                        <div style={{backgroundColor: 'white', paddingLeft: '20px', boxShadow: 'black 4px 4px'}}>
                        <h3 style={{ fontSize: '50px' }}>Languages:</h3>
                        <p style={{ fontSize: '40px' }}> JavaScript, HTML5, CSS3</p>
                        </div>
                        <div style={{ backgroundColor: 'white', paddingLeft: '20px', boxShadow: 'black 4px 4px' }}>
                        <h3 style={{ fontSize: '50px' }}>Technologies and Frameworks:</h3>
                        <p style={{ fontSize: '40px' }}>React JS, Redux, Postgres, Bootstrap, jQuery, Material-UI, Axios, Express, Passport, SQL</p>
                        </div>
                        <div style={{ backgroundColor: 'white', paddingLeft: '20px', boxShadow: 'black 4px 4px' }}>
                        <h3 style={{ fontSize: '50px' }}>Development and Deployment Tools:</h3>
                        <p style={{ fontSize: '40px' }}>GitHub, Visual Studio Code, Postman, Heroku, Node.js, Postico, Atom </p>
                        </div>
                </section>}

                {this.state.projects ? <section id="Projects">
                    <h1 style={{ textAlign: 'center', color: 'black', fontSize: '70px', color: '#6fcb9f', textShadow: 'black 2px 4px'}}>Projects</h1>
                    <img src="https://raw.githubusercontent.com/DeclanBernardin/Declan-Bernardin-Website/master/Pics/ClickHere.png" onClick={this.toggleProjects}></img>
                </section> :
                <section id="Projects">
                        <h1 style={{ color: 'black', fontSize: '70px', color: '#6fcb9f', textShadow: 'black 2px 4px' }} onClick={this.toggleProjects}>Projects</h1>
                    <div>
                    <div style={{ backgroundColor: 'white', paddingLeft: '20px', boxShadow: 'black 4px 4px' }}>
                        <h2 style={{ fontSize: '40px' }}>Where The Fish?</h2>
                        <p style={{ fontSize: '30px' }}>An app that allows you to mark your favorite fishing spots.</p>
                    </div>
                            <a href="https://github.com/DeclanBernardin/Wheres-The-Fish-Solo-Project"><img src="https://raw.githubusercontent.com/DeclanBernardin/Declan-Bernardin-Website/master/Pics/Screen%20Shot%202019-09-23%20at%202.52.27%20PM%20(1).png" height='500px' style={{  marginLeft: '18px', backgroundColor: '#6fcb9f', boxShadow: 'black 4px 4px', maxWidth: '1000px' }}></img></a>
                            <p style={{ float: 'right', backgroundColor: 'white', paddingRight: '20px', paddingLeft: '20px', marginRight: '450px', boxShadow: 'black 4px 4px', fontSize: '30px' }}>⬅️ Click To Go To GitHub Page</p>
                    <div style={{ backgroundColor: 'white', paddingLeft: '20px', boxShadow: 'black 4px 4px' }}>
                        <h2 style={{ fontSize: '40px' }}>Con Ops</h2>
                        <p style={{ fontSize: '30px' }}>An app designed for the 2D Con staff to allow them to check in attendees.</p>
                    </div>
                        <a href="https://github.com/ConOps"><img src="https://raw.githubusercontent.com/DeclanBernardin/Declan-Bernardin-Website/master/Pics/Logo.png" height='400px' style={{ marginLeft: '18px', backgroundColor: '#6fcb9f', boxShadow: 'black 4px 4px', maxWidth: '1000px' }}></img></a>
                            <p style={{ float: 'right', backgroundColor: 'white', paddingRight: '20px', paddingLeft: '20px', marginRight: '270px', boxShadow: 'black 4px 4px', fontSize: '30px' }}>⬅️ Click To Go To GitHub Page</p>
                    </div>
                </section>}

                {this.state.workExperience ? <section id="WorkExperience">
                    <h1 style={{ textAlign: 'center', color: 'black', fontSize: '70px', color: '#fffeb3', textShadow: 'black 2px 4px'}}>Work Experience</h1>
                    <img src="https://raw.githubusercontent.com/DeclanBernardin/Declan-Bernardin-Website/master/Pics/ClickHere.png" onClick={this.toggleWorkExperience}></img>  
                </section> :
                <section id="WorkExperience">
                        <h1 style={{ color: 'black', fontSize: '70px', color: '#fffeb3', textShadow: 'black 2px 4px' }} onClick={this.toggleWorkExperience}>Work Experience</h1>
                        <div style={{ backgroundColor: 'white', paddingLeft: '20px', boxShadow: 'black 4px 4px' }}>
                            <h1 style={{ fontSize: '50px' }}>Prime Digital Academy:</h1>
                            <p style={{ fontSize: '40px' }}>Full Stack Software Development Student</p>
                            <p style={{ fontSize: '30px' }}>Solo project: Where The Fish!</p>
                            <p style={{ fontSize: '30px' }}>Group project: Con-Ops</p>
                        </div>
                        <div style={{ backgroundColor: 'white', paddingLeft: '20px', boxShadow: 'black 4px 4px' }}>
                            <h1 style={{ fontSize: '50px' }}>Rosemount Marcus Theater:</h1>
                            <p style={{ fontSize: '40px' }}>Kitchen Supervisor/Manager</p>
                            <p style={{ fontSize: '20px' }}>Onboarded, trained and mentored incoming servers and cooks</p>
                            <p style={{ fontSize: '20px' }}>Collaborated daily with team to ensure healthy working environment </p>
                            <p style={{ fontSize: '20px' }}>Filled out inventory orders and kept records for inventory ordering </p>
                            <p style={{ fontSize: '40px' }}>Restaurant Cook</p>
                            <p style={{ fontSize: '20px' }}>Communicated with other cooks and servers to deliver high quality food</p>
                            <p style={{ fontSize: '20px' }}>Maintained safety and cleanliness standards set by the theater</p>
                            <p style={{ fontSize: '40px' }}>Theater Associate</p>
                            <p style={{ fontSize: '20px' }}>Interacted frequently with customers to offer food and beverages</p>
                            <p style={{ fontSize: '20px' }}>Worked directly with other associates to maintain a friendly and clean theater experience</p>
                        </div>
                </section>}

                {this.state.education ? <section id="Education">
                    <h1 style={{ textAlign: 'center', color: 'black', fontSize: '70px', color: '#6fcb9f', textShadow: 'black 2px 4px'}}>Education</h1>
                    <img src="https://raw.githubusercontent.com/DeclanBernardin/Declan-Bernardin-Website/master/Pics/ClickHere.png" onClick={this.toggleEducation}></img>
                </section> :
                <section id="Education">
                        <h1 style={{ color: 'black', fontSize: '70px', color: '#6fcb9f', textShadow: 'black 2px 4px' }} onClick={this.toggleEducation}>Education</h1>
                        <div style={{ backgroundColor: 'white', paddingLeft: '20px', boxShadow: 'black 4px 4px' }}>
                            <h3 style={{ fontSize: '50px' }}>Prime Digital Academy, October 2019:</h3>
                            <p style={{ fontSize: '40px' }}>Degree: Full Stack Software Engineering Certification</p>
                        </div>
                        <div style={{ backgroundColor: 'white', paddingLeft: '20px', boxShadow: 'black 4px 4px' }}>
                            <h3 style={{ fontSize: '50px' }}>Inver Hills Community College 2017 - 2018:</h3>
                            <p style={{ fontSize: '40px' }}>Generals</p>
                        </div>
                        <div style={{ backgroundColor: 'white', paddingLeft: '20px', boxShadow: 'black 4px 4px' }}>
                            <h3 style={{ fontSize: '50px' }}>Food Safety Certification; State of Minnesota Department of Health</h3>
                            <p style={{ fontSize: '40px' }}>Food Manager Certificate NO.FM96522</p>
                        </div>
                </section>}
            </div>
        )
    }
}

export default withStyles(styles)(MainPage);