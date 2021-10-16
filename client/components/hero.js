import React from 'react'
import Link from 'next/link'

const Hero = () => {


    return(
        <div className="heroContrainer">

           <div style={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
                padding: 16,
               height: "100%",
               fontSize: '3rem',
               fontWeight: 'bolder',
               color: "white"
           }}>
               <div style={{maxWidth: 800, textAlign: 'center', lineHeight: '4rem'}}>
               We build products that positively impact our daily lives
               </div>
           </div>

        <style jsx>{`
            .heroContrainer {
                background-image: url("/img/hero-1.jpg");
                height: 600px;
                background-size: cover;
                background-position: center;
            }
        
        `}</style>
        </div>
    )
}

export default Hero