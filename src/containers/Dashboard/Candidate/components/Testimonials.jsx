// import { p } from '@mui/material'
import React from 'react'
import logo from "../../../../assets/about1.png"
import { Typography } from '@mui/material'

const Testimonials = () => {
  return (
    <>
       <div className='testimonials p-5'>
         <div className='container'>
         <div className='row'>
         <h3 class="card-title text-center" style={{marginBottom:"20px"}}>Feedback</h3>
            <div className='col-md-4'>
               
                <div class="card mx-auto border-0 p-4" style={{width: "18rem"}}>
                <img src={logo} class="card-img-top text-center mx-auto" alt="..." style={{borderRadius:"50%", border:"1px solid black", width:"100px", height:"100px"}}/>
                <div class="card-body">
                    <h5 class="card-title text-center">Waleed</h5>
                    <p class="card-text text-center">"This website transformed the way I present my professional journey. The templates are not just visually appealing but also strategically structured".</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
                </div>
            </div>
            <div className='col-md-4'>
            <div class="card mx-auto border-0 p-4" style={{width: "18rem"}}>
                <img src={logo} class="card-img-top text-center mx-auto" alt="..." style={{borderRadius:"50%", border:"1px solid black", width:"100px", height:"100px"}}/>
                <div class="card-body">
                    <h5 class="card-title text-center">Sarah </h5>
                    <p class="card-text text-center">"As an HR professional, finding the right platform for posting jobs is crucial. This website exceeded my expectations and help me to excel my career." </p>
                    {/* stars */}
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
                </div>
            </div>
            <div className='col-md-4'>
            <div class="card mx-auto border-0 p-4" style={{width: "18rem"}}>
                <img src={logo} class="card-img-top text-center mx-auto" alt="..." style={{borderRadius:"50%", border:"1px solid black", width:"100px", height:"100px"}}/>
                <div class="card-body">
                    <h5 class="card-title text-center">Saima</h5>
                    <p class="card-text text-center">"The resume-building tools on this site are a game-changer for professionals like me. The templates cater perfectly to the IT industry, and the process is easy."
</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
                </div>
            </div>
          </div>
         </div>
       </div>
    </>
  )
}

export default Testimonials
