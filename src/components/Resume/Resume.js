import React, { useEffect, useState } from "react";
import { AtSign, Calendar, GitHub, Linkedin, MapPin, Paperclip, Phone } from "react-feather";

import styles from "./Resume.module.css";

function Resume(props) {

    const [columns, setColumns] = useState([[],[]]);


    const workExpSection = (
        <div key={"workExp"} className={`${styles.section} ${styles.workExp}`}>
            <div className={styles.sectionTitle}>Work Experience</div>
            <div className={styles.content}>
                <div className={styles.item}>
                    <p className={styles.title}>Full Stack Developer</p>
                    <p className={styles.subTitle}>Company Name</p>
                    <a className={styles.link}>
                        <Paperclip />
                        https://wed32232/wdwed/wef
                    </a>
                    <div className={styles.date}>
                        <Calendar /> 2/07/2001 - 1/12/2002
                    </div>
                    <p className={styles.date}>
                        <MapPin />
                        Remote
                    </p>
                  
                    <ul className={styles.points}>
                        <li className={styles.point}>It is point one</li>
                        <li className={styles.point}>It is point two</li>
                        <li className={styles.point}>It is point three</li>
                        <li className={styles.point}>It is point four</li>                    
                    </ul>
                </div>
            </div>
        </div>
    );

    const projectSection = (
        <div key={"project"} className={`${styles.section} ${styles.project}`}>
            <div className={styles.sectionTitle}>Projects</div>
            <div className={styles.content}>
                <div className={styles.item}>
                    <p className={styles.title}>Project 1</p>
                    <a className={styles.link}>
                        <Paperclip />
                        https://wed32232/wdwed/wef
                    </a>
                    <a className={styles.link}>
                        <GitHub />
                        https://github.com/wdwed/wef
                    </a>
                    <div className={styles.content}>
                        <p className={styles.overview}>This is dummy project</p>
                    </div>
                    <ul className={styles.points}>
                        <li className={styles.point}>It is point one</li>
                        <li className={styles.point}>It is point two</li>
                        <li className={styles.point}>It is point three</li>
                        <li className={styles.point}>It is point four</li>                    
                    </ul>
                </div>
            </div>
        </div>
    );

    const educationSection = (
        <div key={"education"} className={`${styles.section} ${styles.education}`}>
            <div className={styles.sectionTitle}>Education</div>
            <div className={styles.content}>
                <div className={styles.item}>
                    <p className={styles.title}>Btech</p>
                    <p className={styles.subTitle}>College Name</p>
                    <div className={styles.date}>
                        <Calendar /> 2/07/2001 - 1/12/2002
                    </div>
                </div>
            </div>
        </div>
    );

    const achievementSection = (
        <div key={"achievement"} className={`${styles.section} ${styles.achievement}`}>
            <div className={styles.sectionTitle}>Achievements</div>
            <div className={styles.content}>
            <ul className={styles.numbered}>
                <li>Acheivement 1</li>
                <li>Acheivement 2</li>
                <li>Acheivement 3</li>
                <li>Acheivement 4</li>
            </ul>
            </div>
        </div>
    );

    const summarySection = (
        <div key={"summary"} className={`${styles.section} ${styles.summary}`}>
            <div className={styles.sectionTitle}>Summary</div>
            <div className={styles.content}>
                <p className={styles.overview}>This is dummy basic summary</p>
            </div>
        </div>
    );

    const otherSection = (
        <div key={"other"} className={`${styles.section} ${styles.other}`}>
            <div className={styles.sectionTitle}>Additional Info</div>
            <div className={styles.content}>
                <p className={styles.overview}>This is dummy data .... others</p>
            </div>
        </div>
    );


    useEffect(() => {
        setColumns([
            [projectSection,educationSection,summarySection],
            [workExpSection,achievementSection,otherSection],
        ]);
    },[])

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.heading}>Name</p>
                <p className={styles.subHeading}>Blockchain developer</p>
            
                <div className={styles.links}>
                    <a className={styles.link}><AtSign />Email@gmail.com</a>
                    <a className={styles.link}><Phone />1234567890</a>
                    <a className={styles.link}><Linkedin />https://linked.in/sasded</a>
                    <a className={styles.link}><GitHub />https://github.com/saaw</a>
                </div>
            </div>

            <div className={styles.main}>
                <div className={styles.col1}>
                    {
                        columns[0]
                    }
                </div>
                <div className={styles.col2}>
                    {
                        columns[1]
                    }
                </div>
            </div>
        </div>
    )
}



export default Resume;