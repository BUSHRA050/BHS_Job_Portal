import { Box } from "@mui/material"
import { useEffect } from "react"
import useStyles from "../../../../../styles"
import BasicInfo from "./BasicInfo"
import About from "./About"
import EducationBackground from "./EducationBackground"
import WorkExperience from "./WorkExperience"
import Skills from "./Skills"
import IconButton from "../../../../../components/IconButton"
import { getProfileScore, getResume } from "../../../../../services/UserDashboard"
import { useLayoutEffect } from "react"
import { useContext } from "react"
import { AppContext } from "../../../../../context"
import { useState } from "react"
import Portfolio from "./Portfolio"
import { useNavigate } from "react-router-dom"

const Resume = ({ setProfileScore }) => {
    const { user } = useContext(AppContext)
    const navigate = useNavigate()
    const [resume, setResume] = useState()

    useEffect(() => {
        window.scrollTo({ top: 100, behavior: "smooth" })
    }, [])

    const classes = useStyles()

    const basicInfoData = [
        {
            id: 1,
            title: "Job Description:",
            description: "Graphic Designer",
            icon: "content_paste_go"
        },
        {
            id: 2,
            title: "Email:",
            description: "digital@example.com",
            icon: "email"
        },
        {
            id: 3,
            title: "Location:",
            description: "Los Angeles Califonia PO",
            icon: "location_on"
        },
        {
            id: 4,
            title: "Phone :",
            description: "0145636941",
            icon: "phone"
        },
    ]

    const educationInfoData = [
        {
            id: 1,
            institute: "St.Thomas School",
            education: "Metric",
            icon: "school",
            startYear: "2014",
            endYear: "2016"
        },
        {
            id: 2,
            institute: "St.Thomas School",
            education: "Intermediate",
            icon: "school",
            startYear: "2016",
            endYear: "2018"
        },
        {
            id: 3,
            institute: "RK University",
            education: "Bachelor Of Arts",
            icon: "school",
            startYear: "2018",
            endYear: "Present"
        },
    ]

    const workExperienceData = [
        {
            id: 1,
            company: "Digiworld",
            designation: "Computer Operator/Programmer",
            icon: "work",
            startYear: "2016",
            endYear: "2018"
        },
        {
            id: 2,
            company: "Webstrot",
            designation: "Lead UI/UX, Web Design, Interaction Design",
            icon: "work",
            startYear: "2018",
            endYear: "Present"
        },
    ]

    const specialQualificationData = [
        {
            id: 1,
            qualification: "5 years+ experience designing and building products.",
            isQualified: true
        },
        {
            id: 2,
            qualification: "Skilled at any Kind Design Tools.",
            isQualified: true
        },
        {
            id: 3,
            qualification: "Passion for people-centered design, solid intuition.",
            isQualified: true
        },
        {
            id: 4,
            qualification: "Hard Worker & Quick Lerner.",
            isQualified: true
        }
    ]

    useLayoutEffect(() => {
        getUserResume(user._id)
    }, [])

    const getUserResume = async (userId) => {
        try {
            const response = await getResume(userId)
            setResume(response.data.data)
            let basicInfo = {
                jobDescription: response.data.data.jobDescription,
                email: response.data.data.email,
                phone: response.data.data.phone,
                location: response.data.data.location,
            }
            let payload = {
                education: response.data.data.education,
                experience: response.data.data.experience,
                skills: response.data.data.skills,
                portfolio: response.data.data.portFolio,
                about: response.data.data.about,
                basicInfo: basicInfo
            }
            if (response.status === 200) {
                let result = await getProfileScore(payload)
                setProfileScore(result.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    console.log(resume, "resumeresumeresumeresume")

    return (
        <Box component="div">
            <Box onClick={() => {
                navigate(`/dashboard/resume/${resume?._id}`)
            }} component="div" sx={{ marginTop: "20px" }}>
                <IconButton className={classes.heroBtn}>
                    View Resume
                </IconButton>
            </Box>
            <BasicInfo getUserResume={getUserResume} resume={resume} basicInfo={basicInfoData} />
            <About getUserResume={getUserResume} resume={resume} about="BHS provides a platform for both job seekers and organizations to fulfill their needs. The portal provides employment opportunities to the job seekers and reduces the effort of searching job of desired position. It facilitates the organization by filtering all the appropriate resumes according to the job description which eventually minimizes human resource work and screening process." />
            <EducationBackground getUserResume={getUserResume} resume={resume} educationInfo={educationInfoData} />
            <WorkExperience getUserResume={getUserResume} resume={resume} workInfo={workExperienceData} />
            <Skills getUserResume={getUserResume} resume={resume} specialQualification={specialQualificationData} />
            <Portfolio
                getUserResume={getUserResume}
                resume={resume}
                specialQualification={specialQualificationData}
            />

        </Box>
    )
}

export default Resume