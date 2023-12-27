import React,{useContext, useEffect,useState} from "react";
// import ResumeTwo from "../../components/ResumeTwo";
// import { PDFDownloadLink } from "@react-pdf/renderer";
import { useParams } from "react-router-dom";
// import Resume from "../../components/Resume";
import { getResume } from "../../services/OrginizationDashboard";
// import ResumeThree from "../../components/ResumeThree";
import { AppContext } from "../../context";
import CoverLetter from "../../components/CoverLetter";
import CoverLetterTwo from "../../components/CoverLetterTwo";
import CoverLetterThree from "../../components/CoverLetterThree";
import ResumeFour from "../../components/ResumeFour";
import { getCoverLetter, getCoverLetterById } from "../../services/UserDashboard";
const ViewCoverLetter = () => {
    const params=useParams();
    const [resume, setResume] = useState();
    const { selectedCoverLetter } =useContext(AppContext);
  
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);
//   const options = {
//       orientation: 'portrait',
//       unit: 'in',
//       format: [16, 8]
//   };

  useEffect(() => {
      getCoverLetter(params?.id).then((res) => {
          setResume(res?.data?.data);
      }).catch((err) => {
          console.log(err);
      })
  }, []);

console.log(resume,"dkjkdjjdkjdjkdkdjdkjkdjdjdkjdkjdkjd");

  return (
    <>
    {selectedCoverLetter === "Template1" && <CoverLetter resume={resume}/>}
    {selectedCoverLetter=== "Template2" && <CoverLetterTwo resume={resume}/>}
    {selectedCoverLetter === "Template3" && <CoverLetterThree resume={resume}/>}
 
    </>
  );
};

export default ViewCoverLetter;
