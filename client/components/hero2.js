import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send'
import { email } from '../constants'

const Hero2 = () => {
    

    return(
        <div className="heroContrainer">

           <div style={{
               display: 'flex',
               alignItems: "center",
               justifyContent: 'center',
                padding: 16,
               height: "100%",
               
               fontWeight: 'bolder',
               color: "white"
           }}>
               <div style={{}} className="heroHeadline">
                <h2>Join Us</h2>
                <p>Whether you are a developer, designer, writer or entrepreneur, we need you to help achieve our vision.</p>
                <a href={`mailto:${email}`} style={{textDecoration: "none"}}><Button variant="contained" endIcon={<SendIcon />}>Get Started</Button></a>
               </div>
           </div>

        <style jsx>{`
            .heroContrainer {
                background-image: url("/img/hero-2.jpg");
                height: 600px;
                background-size: cover;
                background-position: center;
                box-shadow: rgb(0 0 0 / 35%) 0px 0px 0px 10000px inset
            }

            .heroContrainer a {
                text-decoration: none !important;
            }
            .heroHeadline {
                font-size: 2rem;
                max-width: 800px;
                text-align: center;
                lineHeight: 2rem;
            }
            @media (min-width: 600px) {
                .heroHeadline {
                    font-size: 2rem;
                    lineHeight: 4rem;
                }
            }
        
        `}</style>
        </div>
    )
}


export default Hero2