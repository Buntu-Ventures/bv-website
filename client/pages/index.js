import Head from 'next/head'
import { useEffect, useState } from 'react'
import Hero from '../components/hero'
import Nav from '../components/nav'

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
                <Hero />
            </div>
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