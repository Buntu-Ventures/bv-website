import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const language = "en"
let currentMessageIndex = 0


const Hero = () => {
    const [message, setMessage] = useState("")

    useEffect(() => {
        setMessage(messages[currentMessageIndex][language])
        setInterval(() => {
            if(currentMessageIndex === messages.length - 1) {
                currentMessageIndex = 0
            } else {
                currentMessageIndex++
            }
            setMessage(messages[currentMessageIndex][language])
        }, 3000)
    },[])

    return(
        <div className="heroContrainer">

           <div style={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
                padding: 16,
               height: "100%",
               
               fontWeight: 'bolder',
               color: "white"
           }}>
               <div style={{}} className="heroHeadline">
              {message}
               </div>
           </div>

        <style jsx>{`
            .heroContrainer {
                background-image: url("/img/hero-1.jpg");
                height: 600px;
                background-size: cover;
                background-position: center;
            }
            .heroHeadline {
                font-size: 2.5rem;
                max-width: 800px;
                text-align: center;
                lineHeight: 2rem;
            }
            @media (min-width: 600px) {
                .heroHeadline {
                    font-size: 3rem;
                    lineHeight: 4rem;
                }
            }
        
        `}</style>
        </div>
    )
}

const messages = [
    {fr: "", en: "The future is brighter than you think."},
    {fr: "", en: "Thrive for the better." },
    {fr: "", en: "Take risks." },
    {fr: "", en: "Make tomorrow happen."}
]


export default Hero