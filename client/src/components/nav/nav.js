/* eslint-disable @next/next/no-img-element */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const Nav = () => {
    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
        <nav>
            <div className="navContainer position-relative">
                <Link href="/" aria-label="Buntu Ventures home">
                    <div className="logo">
                        <div className="logoInner">
                            <img
                                src="/img/Buntu_Ventures_Logo.png"
                                alt="Buntu Ventures logo"
                                style={{width:'100%'}}
                            />
                        </div>
                    </div>
                </Link>
                
                <ul className="navDesktLinks">
                    <li><Link href="/#about">About Us</Link></li>
                    <li><Link href="/#careers">Careers</Link></li>
                    <li><Link href="/#contact">Contact</Link></li>
                    <li><Link href="/privacy">Privacy Policy</Link></li>
                </ul>
                <div className="menuToggle">
                    <Button
                        id="basic-button"
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <MenuIcon fontSize="large" />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}><Link href="/" className="menuLinksDrop">Home</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link href="/#about" className="menuLinksDrop">About Us</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link href="/#contact" className="menuLinksDrop">Contact</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link href="/#careers" className="menuLinksDrop">Careers</Link></MenuItem>
                    </Menu>
                    
                </div>
                
                
            </div>
            
            <style jsx>{`
                nav {
                    padding: 16px;
                }
                .navContainer {
                    max-width: 1200px;
                    margin: auto;
                    display: flex;
                    justify-content: space-between;
                } 

                .logoInner {
                    max-width: 160px;
                }

                .navDesktLinks li {
                    list-style-type: none;
                    padding: 0 16px;
                }

                .navDesktLinks a {
                    text-decoration: none;
                    color: inherit;
                    font-size: 1.1rem;
                }

                .navDesktLinks a:hover {
                    font-weight: 500;
                    text-decoration: underline;
                }

                .navDesktLinks {
                    display: none;
                } 

                .menuToggle {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                }

                .menuLinksDrop {
                    text-decoration: none;
                    color: inherit;
                }

                @media (min-width: 700px) {
                    .navDesktLinks {
                        display: flex;
                    }

                    .menuToggle {
                        display: none;
                    }
                }


            `}</style>
        </nav>
    )
}

export default Nav
