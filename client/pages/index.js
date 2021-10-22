
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Hero1 from '../components/hero1'
import Hero2 from '../components/hero2'
import Hero3 from '../components/hero3'
import Hero4 from '../components/hero4'
import Nav from '../components/nav/nav'

const language = "en"
let currentMessageIndex = 0

const HomePage = () => {
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

    return (
        <>
            <Head>
                <title>Buntu Ventures Ltd.</title>
                <meta name="description" content="We build and invest in businesses that help people globally."/>
            </Head>
            <div>
                <Nav />
                <Hero1 />
                <div style={{maxWidth: 800, margin: 'auto', textAlign: 'center', padding: "60px 16px"}} className="whoWeAreContainer">
                    <a id="about"/>
                    <h2>Who We Are</h2>
                    <p>
                        Buntu Ventures is an entrepenerial investment firm focused to building and investing in physical and digital products with the goal to have a positive impact at every stage of the business cycle. 
                    </p>
                    <p>
                        From our employees to our customers with the help of trusted partners we aim to provide value to everyone with whom we come in contact with.
                    </p>
                </div>
                <a id="careers"/>
                <Hero2 />
                <a id="contact"/>
                <Hero3 />
                <Hero4 />

            </div>
            <style jsx>{`
                .whoWeAreContainer h2 {
                    font-weight: 700;
                    font-size: 2rem;
                }

                .whoWeAreContainer p {
                    font-size: 1.1rem;
                }

                @media (min-width: 600px) {
                    .whoWeAreContainer h2 {
                        font-size: 3rem;
                    }

                    .whoWeAreContainer p {
                        font-size: 1.5rem;
                    }
                }


            `}</style>
        </>
    )
}

const messages = [
    {fr: "", en: "The future is brighter than you think."},
    {fr: "", en: "Thrive for the better." },
    {fr: "", en: "Take risks." },
    {fr: "", en: "Make tomorrow happen."}
]

export default HomePage