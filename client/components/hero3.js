import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Button from '@mui/material/Button';
import LocationIcon from '@mui/icons-material/Room'

const Hero3 = () => {
    

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
                <h2>Headquaters</h2>
                <p>You should work wherever you feel empowered to do your best work. We are a remote first company and have one main office.</p>
                <div>
                <LocationIcon fontSize="large"/>
                <p><a target="_blank" rel="noopener nofollow" href="https://www.google.com/maps/place/150+Elgin+St,+Ottawa,+ON+K2P+1L4/@45.4206202,-75.6927877,20z/data=!4m13!1m7!3m6!1s0x4cce05aa6c6a64c3:0xeab62a07b804282a!2s151+Elgin+St,+Ottawa,+ON+K2P+2L1!3b1!8m2!3d45.4210383!4d-75.6920802!3m4!1s0x4cce05aa5cea3acb:0x5a7869f1762d1a09!8m2!3d45.420572!4d-75.6929603">150 Elgin St Suite 1700, Ottawa, ON, Canada</a></p>
                </div>
                
               </div>
           </div>

        <style jsx>{`
            .heroContrainer {
                
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


export default Hero3