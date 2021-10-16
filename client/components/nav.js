import React from 'react'
import Link from 'next/link'

const Nav = () => {


    return(
        <div style={{
            fontSize: '1.5rem'
        }}>

            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <div style={{padding: 16}}>
                    <img src="/img/Buntu_Ventures_Logo.png" style={{maxWidth: 160}}/>
                </div>
                <div style={{display: 'flex', alignItems: 'center', padding: 16}}>
                    <Link href="/"><a>Our Brands</a></Link>
                    <Link href="/"><a style={{padding: '0 16px'}}>Our Team</a></Link>
                    <Link href="/"><a>Careers</a></Link>
                    
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Nav