import React from "react";
import { useState } from "react";
import { X } from "react-feather";
import styles from "./Editor.module.css";
import InputControl from "../inputControl/InputControl";

function Editor(props){
    const sections = props.sections;

    const [activeSectionKey, setActiveSectionKey] = useState(
        Object.keys(sections)[0]
    );

    const workExpBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl 
                    label="Title"
                    placeholder = "Enter title e.g Backend developer"
                />
                <InputControl 
                    label="Comapny Name"
                    placeholder= "Enter company name"
                />
            </div>
            <div className={styles.row}>
                <InputControl 
                    label="Certificate"
                    placeholder="Enter certificate link"
                />
                <InputControl 
                    label = "Location"
                    placeholder="Enter location e.g Remote"
                />
            </div>
            <div className={styles.row}>
                <InputControl 
                    label="Start Date"
                    type="date"
                    placeholder= "Enter start date of work"
                />
                <InputControl 
                    label="End Date"
                    type="date"
                    placeholder="Enter end date of work"
                />
            </div>

            <div className={styles.column}>
                <label>Enter work description</label>
                <InputControl placeholder="Line 1"/>
                <InputControl placeholder="Line 2"/>
                <InputControl placeholder="Line 3"/>
            </div>
        </div>
    );


    const projectBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl 
                    label="Title"
                    placeholder="Enter project title"
                />
            </div>
            <InputControl 
                label="Overview"
                placeholder="Enter basic overview of project"
            />
            <div className={styles.row}>
                <InputControl 
                    label= "Deployed Link"
                    placeholder = "Enter deployed link of project"
                />
                <InputControl 
                    label="GitHub Link"
                    placeholder="Enter github link of project"
                />
            </div>

            <div className={styles.column}>
                <label>Enter project description</label>
                <InputControl placeholder="Line 1" />
                <InputControl placeholder="Line 2" />
                <InputControl placeholder="Line 3" />
                <InputControl placeholder="Line 4" />
            </div>
        </div>
    );


    const educationBody = (
        <div className={styles.detail}>
           <div className={styles.row}>
                <InputControl label="Title" placeholder="Enter title e.g. B.Tech"/>
           </div>
           <InputControl 
            label="College/School Name"
            placeholder="Enter name of your college/school"
           /> 
           <div className={styles.row}>
                <InputControl 
                    label="Start Date"
                    type="date"
                    placeholder="Enter start date of this education"
                />
                <InputControl 
                    label="End Date"
                    type="date"
                    placeholder="Enter end date of this education"
                />
           </div>
        </div>
    );

    const basicInfoBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl 
                    label="Name"
                    placeholder="Enter your name"
                />
                <InputControl 
                    label="Title"
                    placeholder="Enter your title eg. Backend developer"
                />
            </div>
            <div className={styles.row}>
                <InputControl 
                    label="LinkedIn"
                    placeholder="Enter your linkedin profile link"
                />
                <InputControl 
                    label="GitHub Link"
                    placeholder="Enter your github profile link"
                />
            </div>
            <div className={styles.row}>
                <InputControl label="Email" placeholder="Enter your email address"/>
                <InputControl 
                    label = "Enter phone no."
                    placeholder = " Enter your phone number"
                />
            </div>
        </div>
    );

    const achievementBody = (
        <div className={styles.detail}>
            <div className={styles.column}>
                <label>List your achievements</label>
                <InputControl placeholder="Line 1"/>
                <InputControl placeholder="Line 2"/>
                <InputControl placeholder="Line 3"/>
                <InputControl placeholder="Line 4"/>
            </div>
        </div>
    );


    const summaryBody = (
        <div className={styles.detail}>
            <InputControl 
                label="Summary"
                placeholder="Enter your objective/summary"
            />
        </div>
    );

    const otherBody = (
        <div className={styles.detail}>
            <InputControl 
                label="Other"
                placeholder="Enter additional information"
            />
        </div>
    );

    const generateBody = () =>{
        switch(sections[activeSectionKey]){
            case sections.basicInfo: return basicInfoBody;
            case sections.workExp: return workExpBody;
            case sections.project: return projectBody;
            case sections.education: return educationBody;
            case sections.achievements: return achievementBody;
            case sections.summary : return summaryBody;
            case sections.other : return otherBody;
            default: return null;
        }
    };



    return(
        <div className={styles.container}>
            <div className={styles.header}>
                 {Object.keys(sections)?.map((key) => (
                  <div 
                  className={`${styles.section} 
                       ${activeSectionKey === key ? styles.active : ""}`} 
                  key={key}
                  onClick={() => setActiveSectionKey(key)}
                  >
                    {sections[key]}
                    </div>
                 ))}
            </div>


            <div className={styles.body}>
                <InputControl label="Title" placeholder="Enter section title"/>
                
                    <div className={styles.chips}>
                        <div className={styles.chip}>
                            <p>Project 1</p>
                            <X />
                        </div>
                        <div className={styles.chip}>
                            <p>Project 2</p>
                            <X />
                        </div>
                    </div>

                {generateBody()}
            </div>
        </div>
    )
}


export default Editor;