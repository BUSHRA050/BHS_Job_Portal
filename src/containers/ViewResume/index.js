import React,{useContext, useEffect,useState} from "react";
import ResumeTwo from "../../components/ResumeTwo";
// import { PDFDownloadLink } from "@react-pdf/renderer";
import { useParams } from "react-router-dom";
import Resume from "../../components/Resume";
import { getResume } from "../../services/OrginizationDashboard";
import ResumeThree from "../../components/ResumeThree";
import { AppContext } from "../../context";
import CoverLetter from "../../components/CoverLetter";
import CoverLetterTwo from "../../components/CoverLetterTwo";
import CoverLetterThree from "../../components/CoverLetterThree";
import ResumeFour from "../../components/ResumeFour";
const ViewResume = () => {
    const params=useParams();
    const [resume, setResume] = useState();
    const { selectedTemplate } =useContext(AppContext);
  
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);
//   const options = {
//       orientation: 'portrait',
//       unit: 'in',
//       format: [16, 8]
//   };

  useEffect(() => {
      getResume(params?.id).then((res) => {
          setResume(res?.data?.data);
      }).catch((err) => {
          console.log(err);
      })
  }, []);



  return (
    <>
    {selectedTemplate === "Template1" && <ResumeThree resume={resume}/>}
    {selectedTemplate === "Template2" && <ResumeTwo resume={resume}/>}
    {selectedTemplate === "Template3" && <Resume resume={resume}/>}
 
   
    </>
  );
};

export default ViewResume;
