import { CloudDownload } from '@mui/icons-material';
import { Box } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { createRef } from 'react';
import ReactToPdf from "react-to-pdf"
import { headerColor, primaryBorderColor, primaryColor } from '../../constants/Colors';
import { getResume } from '../../services/OrginizationDashboard';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import moment from 'moment';

const resumeData = {
    image: require('../../assets/profile.png'),
    name: 'John Smith',
    email: 'john@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, CA 12345',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    experience: [
        {
            title: 'Software Engineer',
            company: 'ACME Inc',
            duration: 'Jan 2020 - Present',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            title: 'Software Developer',
            company: 'XYZ Corp',
            duration: 'Jan 2019 - Dec 2019',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
    ],
    skills: ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js'],
    education: [
        {
            degree: 'Bachelor of Science in Computer Science',
            institution: 'University of Example',
            duration: 'Sep 2015 - May 2019',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
    ],
};

const Resume = () => {
    const ref = createRef();
    const params = useParams();
    const [resume, setResume] = useState(resumeData);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const options = {
        orientation: 'portrait',
        unit: 'in',
        format: [16, 8]
    };

    useEffect(() => {
        getResume(params?.id).then((res) => {
            setResume(res?.data?.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);


    return (
        <>

            <div ref={ref} style={styles.container}>
                <div style={styles.header}>
                    <div style={{
                        textAlign: "left",
                    }}>
                        <div style={styles.name}>
                            {resume?.user?.name}
                        </div>
                        <div style={styles.email}>
                            {resume?.resume?.email}
                        </div>
                        <div style={styles.phone}>
                            {resume?.resume?.phone}
                        </div>
                        <div style={styles.phone}>
                            {resume?.resume?.location}
                        </div>
                    </div>
                    <img style={{
                        width: "100px",
                        height: "100px",
                    }} src={resume?.user?.userImage} />

                </div>
                <div style={{
                    padding: "50px",
                }}>

                    <div style={styles.section}>
                        <div style={styles.sectionTitle}>
                            Summary
                        </div>
                        <div style={styles.sectionContent}>
                            {resume?.resume?.about}
                        </div>
                    </div>
                    <div style={styles.section}>
                        <div style={styles.sectionTitle}>
                            Experience
                        </div>
                        {resume?.resume?.experience.map((item, index) => (
                            <div key={index} style={styles.experienceItem}>
                                <div style={styles.experienceTitle}>
                                    {item.title}
                                </div>
                                <div style={styles.experienceCompany}>
                                    {item.company}
                                </div>
                                <div style={styles.experienceDuration}>
                                    {`${moment(item.startYear).format("YYYY")} - ${moment(item.endYear).format("YYYY")}`}
                                </div>
                                <div style={styles.experienceDescription}>
                                    {item.description}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={styles.section}>
                        <div style={styles.sectionTitle}>
                            Skills
                        </div>
                        <div style={{
                            fontSize: "16px",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",

                        }}>
                            {
                                resume?.resume?.skills?.map((item, index) => {
                                    return <div
                                        style={{
                                            backgroundColor: "#e0effa",
                                            padding: "10px",
                                            borderRadius: "5px",
                                        }}
                                    >{item?.title}</div>

                                })
                            }
                        </div>
                    </div>
                    <div style={styles.section}>
                        <div style={styles.sectionTitle}>
                            Education
                        </div>
                        {resume?.resume?.education?.map((item, index) => (
                            <div key={index} style={styles.educationItem}>
                                <div style={styles.educationDegree}>
                                    {item?.title}
                                </div>
                                <div style={styles.educationInstitution}>
                                    {item?.institute}
                                </div>
                                <div style={styles.educationDuration}>
                                    {`${moment(item.startYear).format("YYYY")} - ${moment(item.endYear).format("YYYY")}`}
                                </div>
                                <div style={styles.educationDescription}>
                                    {item?.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <ReactToPdf
                    targetRef={ref}
                    filename={`${resume?.user?.name}.pdf`}
                    x={10}
                    y={10}
                    scale={0.8}
                    paperSize="A4"
                    landscape
                >
                    {({ toPdf }) => <Box
                        sx={{
                            cursor: "pointer",
                            border: `1px solid ${primaryBorderColor}`,
                            gap: "10px",
                            fontSize: "14px",
                            padding: "7px",
                            marginTop: "10px",
                            position: "absolute",
                            top: "-10px",
                            right: "-70px",
                            "&:hover": {
                                background: primaryColor,
                                color: headerColor,
                                transition: "all 0.3s ease-in-out"
                            },

                        }}
                        display="flex" alignItems="center" p={2} component='div'
                        onClick={toPdf}
                    >
                        <CloudDownload />
                    </Box>}

                </ReactToPdf>

            </div>

        </>
    );
};

const styles = {
    container: {
        width: '700px',
        margin: '0 auto',
        fontFamily: 'Arial',
        // padding: '50px',
        border: '1px solid #333', // set border color,
        position:"relative"

    },
    header: {
        marginBottom: '50px',
        borderBottom: '1px solid #333', // set border color,
        paddingBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#2a78ab',
        padding: "25px",
        color: '#fff',
    },
    name: {
        fontSize: '32px',
        fontWeight: 'bold',
    },
    contact: {
        display: 'flex',
        flexDirection: 'column',
    },
    email: {
        fontSize: '14px',
        marginTop: '5px',

    },
    phone: {
        fontSize: '14px',
        marginTop: '5px',

    },
    section: {
        marginBottom: '50px',
    },
    sectionTitle: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
        backgroundColor: "#e0effa",
        padding: "10px",
        borderRadius: "5px",
    },
    sectionContent: {
        fontSize: '16px',
    },
    experienceItem: {
        marginBottom: '20px',
    },
    experienceTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    experienceCompany: {
        fontSize: '18px',
        marginBottom: '5px',
    },
    experienceDuration: {
        fontSize: '16px',
        color: '#999',
        marginBottom: '5px',
    },
    experienceDescription: {
        fontSize: '16px',
    },
    educationItem: {
        marginBottom: '20px',
    },
    educationDegree: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    educationInstitution: {
        fontSize: '18px',
        marginBottom: '5px',
    },
    educationDuration: {
        fontSize: '16px',
        color: '#999',
        marginBottom: '5px',
    },
    educationDescription: {
        fontSize: '16px',
    },
};


export default Resume;

