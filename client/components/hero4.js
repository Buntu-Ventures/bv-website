import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Button from '@mui/material/Button';
import LocationIcon from '@mui/icons-material/Room'

const Hero4 = () => {
    

    return(
        <div className="heroContrainer">

           <div style={{
               display: 'flex',
               alignItems: "center",
               justifyContent: 'center',
                padding: 16,
               height: "100%",
           }}>
               <div style={{}} className="heroHeadline">
                
                <p>{new Date().getFullYear()} © Buntu Ventures Ltd. All Rights Reserved.</p>
                <p>Call us: <a href="tel:+1(343)3395252">+1(343)339-5252</a></p>
                <p>Write to us: <a href="mailto:info@buntuventures.com">info@buntuventures.com</a></p>
                
                
               </div>
           </div>

        <style jsx>{`
            .heroContrainer {
                background: black;
                color: white;
            }
            .heroHeadline {
                font-size: 1.2rem;
                max-width: 800px;
                text-align: center;
                lineHeight: 2rem;
            }
           
        
        `}</style>
        </div>
    )
}


export default Hero4
