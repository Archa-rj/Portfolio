import React from "react";
import './Home.css';
import Footer from "../components/Footer";




const Home = () => {
    const projectData = [
        {
          title: 'Banking Site  ',
          technology:'Python Django MySQL',
          description: 'Developed a user authentication system allowing sign-up,log-in and log-out.Enabled users to create and manage accounts by storing details in MySQL using Django Models.Implemented a model template for streamlined data handling and  user Interface  ',
          link: 'https://github.com/Archa-rj/PythonCode/tree/main/bankfinalproject/bankproject/finalbankproject',
        },
        {
          title: 'Ecommerce site',
          technology:'Python Django MySQL',
          description: 'Developed a product management system with cart functionality and dynamic total calculation.Integrated MySQL for efficient database management of products.Implemented userfriendly interface for seamless shopping experience.',
          link: 'https://github.com/Archa-rj/PythonCode/tree/main/ecommerce_project/e-commerce_project/ecommerce_project',
        },
        {
            title: 'Daily Water Intake site',
          technology:'Python Django MySQL',
          description: 'Developed an app to track daily water intake and display progress over time.Utilized AJAX to calculate water intake difference between two dates.Developed user authentication system enabling sign-up and log-out functionalities ',
          link: ''
        },
        {
            title: 'Travel Site',
          technology:'Python Django MySQL',
          description: 'Developed user authentication system enabling sign-up and log-out functionalities.Designed an intuitive interface for easy navigation and smooth user experience.Used MySQL for secure storage of user information and account management.Implemented administrative features to enable efficient management of the site’s content, including the ability to update images and descriptions.',
          link: 'https://github.com/Archa-rj/PythonCode/tree/main/projectjourney/travelproject/journeyproject',
        },
        {
            title: ' Registation Site',
          technology:'Python Django MySQL',
          description: 'Developed user authentication system enabling sign-up and log-out functionalities.Designed an intuitive interface for easy navigation and smooth user experience.',
          link: 'https://github.com/Archa-rj/PythonCode/tree/master',
        },
        {
            title: 'Predicting Lottery winner',
          technology:'HTML,CSS,JavaScript,Bootstrap',
          description: 'Developed a simple lottery win predicting site',
          link: 'https://github.com/Archa-rj/JavaScript/blob/main/lottery_winner.html',
        },
        {
            title: 'BMI Calculator',
          technology:'HTML,CSS,JavaScript,Bootstrap',
          description: 'Developed a simple BMI Calculator site user can add their weight and height calculate their BMI.',
          link: 'https://github.com/Archa-rj/JavaScript/blob/main/bmi.html',
        },
        {
            title: 'Simple  Calculator',
          technology:'HTML,CSS,JavaScript,Bootstrap',
          description: 'Developed a simple Calculator site user can add 2 numbers and can choose arthemetic operator to calculate.',
          link: 'https://github.com/Archa-rj/JavaScript/blob/main/bmi.html',
        },
        {
            title: 'Git hub',
          technology:'HTML,CSS,Bootstrap',
          description: 'Developed a Git hub signup one user Interface.',
          link: 'https://github.com/Archa-rj/BootstrapCodes/blob/main/github.html',
        },
        {
            title: 'Signup Form',
          technology:'HTML,CSS,Bootstrap',
          description: 'Developed a simple Sign up page interface by using HTML,CSS,Bootstrap.',
          link: 'https://github.com/Archa-rj/JavaScript/blob/main/bmi.html',
        },
      ];
  return (
    <div>
             <section id="home">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="content">
            <h2 className="londrina-sketch-regular">From Rocks to Codes...</h2>
            <p className="playwrite-gb-s">My journey into Coding</p>
            <h4>Welcome to my portfolio</h4>
            <p className="intro">
            Welcome to my portfolio! I’m Archa rj , an IT enthusiast with a background in Geology, driven by a passion for technology and problem-solving. I'm excited to showcase my skills in Fullstack Development, including Python, Django, React, and database management. I'm eager to contribute to impactful projects and continue growing by learning from experienced teams.
            </p>
            </div>
           
           
          </div>
        </div>
      </div>
      
    </section>

    <section id="aboutus">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h1 className="text-left text-decoration-underline">ABOUT ME</h1>
                <div className="about-content">
                    <div className="img">
                        <img src="images/profile_img.jpg" alt="profile img" style={{ width: "210px" }} />
                    </div>
                    <div className="about-text">
                        <p className="about">
                            Hello I'm Archa RJ , a non-IT graduate with a passion for transitioning into the tech field. Holding a BSc in Geology, my curiosity and drive led me to explore the world of IT, where I discovered my true interest in software development.
                            My journey began as a Business Development Associate intern at Steyp, Talrop, where I gained valuable insights into the tech industry. To pursue my passion, I undertook a Python Full Stack Development internship at Inmakes Info Tech, gaining hands-on experience and working on various projects. To further sharpen my skills, I joined Mashupstack, where I focused on both frontend and backend technologies.
                            I am proficient in HTML, CSS, Bootstrap, JavaScript, and React for frontend development, while my backend expertise lies in Python, Django, and MySQL.
                            I am now actively seeking opportunities in the IT field where I can apply my skills and continue to grow as a developer.
                            Some of my Projects are:
                            <ul>
                                <li>Ecommerce site</li>
                                <li>Banking Site</li>
                                <li>Daily Water Intake site</li>
                                <li>Todo</li>
                                etc..
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

            <br />
            <section id="projects">
                <div className="container">
                    <h1 className="text-left text-decoration-underline">PROJECTS</h1>
                    <p>Here is some of my projects</p>
                    <div className="row">
                        {projectData.map((project, index) => (
                            <div key={index} className="col-lg-6 col-md-6">
                                <div className="card">
                                    <div className="card-title">{project.title}<br />{project.technology}</div>
                                    <div className="card-body">{project.description}</div>
                                    <a href={project.link} className="btn btn-secondary">View Project</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <br />

            <section id="internship">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="internship">
                                <h3>Internship Experience: Python Full Stack Development Intern at Inmakes InfoTech (3 Months)</h3>
                                <p>During my internship at Inmakes InfoTech, I gained valuable hands-on experience in 
                                    building web applications using Python, Django, and MySQL. This opportunity was especially 
                                    significant for me as I do not have a traditional computer science background. The internship not
                                     only enhanced my technical skills but also boosted my confidence in tackling real-world projects. I learned to navigate the challenges of web development,
                                     and this experience has been instrumental in shaping my career in technology.</p>
                                    <p> <i class="fa-regular fa-hand-point-down"></i> Here is my certificate</p>
                                  <a href="/files/Internship_certificate_inmakes (1).pdf"target="_blank" rel="noopener noreferrer" className="btn btn-success " >Certificate</a> 
                            </div> 
                        </div>
                    </div>
                </div>

            </section>
            <br />

            <section id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact">
                                <h2 className="heading" style={{textDecoration:"underline"}}>CONTACT</h2>
                                  <div className="contact1">
                                  <p>Archa RJ</p> 
                                   <p>Phone:+91 7306091427</p> 
                                    <p>Email:rjarcha14@gmail.com</p>
                                    <p> <a href="https://www.linkedin.com/in/archa-rj-312b44321/" target="blank" style={{textDecoration:"none",color:"black"}}>LinkedIN<i class="fa-brands fa-linkedin" style={{fontSize:"20px"}}></i></a></p>
                                  </div>
                                   

                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>


    </div>
    
  );
}

export default Home;
