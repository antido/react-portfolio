import { useState, useRef } from 'react'
import Photo from '../assets/img/antido.jpg'
import WorkList from '../data/experiences.json'
import Img1 from '../assets/img/skills/html-5.png'
import Img2 from '../assets/img/skills/css-3.png'
import Img3 from '../assets/img/skills/java-script.png'
import Img4 from '../assets/img/skills/php.png'
import Img5 from '../assets/img/skills/mysql.png'

const Home = () => {
    const workList = WorkList.experienceList
    const listClicked = useRef(null)

    const handleExperienceClick = () => {
        console.log("TESTING", listClicked.current)
    }

    return (
        <div className="home-page">
            <div className="profile-section">
                <div className="img-container">
                    <img src={Photo} width="200" height="200" alt="Antido" />
                </div>
                <h1>Christian Lerry Antido</h1>
                <strong>Hello everyone. I'm Christian Lerry Antido, a Web Developer based here in Baguio City, Philippines.</strong>
            </div>
            <div className="experience-section">
                <h1>Work Experience</h1>
                <ul>
                    {workList.map((item: any, index: number) => { 
                        return (
                            <li ref={listClicked} key={index} onClick={handleExperienceClick}>
                                <strong>{item.company}</strong> (<span>{item.startDate} - {item.endDate}</span>)
                                <p>{item.position}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="skills-section">
                <h1>Skills</h1>
                <div className="skill-list">
                    <img src={Img1} alt="HTML" />
                    <img src={Img2} alt="CSS" />
                    <img src={Img3} alt="Javascript" />
                    <img src={Img4} alt="PHP" />
                    <img src={Img5} alt="Mysql" />  
                </div>
            </div>
        </div>
    )
}

export default Home
