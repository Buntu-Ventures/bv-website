import GlobalContext from './GlobalContext'
import { useState, useContext, useEffect } from 'react'
// import Firebase from '../firebase/firebaseConfig'
import Router from 'next/router'

// const firebase = new Firebase()

const GlobalState = (props) => {
    
    const [language, setLanguage] = useState(useContext(GlobalContext).language)
    const [justSignedIn, setJustSignedIn] = useState(useContext(GlobalContext).state.justSignedIn)
    const [justSignedOut, setJustSignedOut] = useState(useContext(GlobalContext).state.justSignedOut)
    const [signedIn, setSignedIn] = useState(useContext(GlobalContext).state.signedIn)
    const [authPending, setAuthPending] = useState(useContext(GlobalContext).state.authPending)
    const [currentPathname, setCurrentPathname] = useState(useContext(GlobalContext).state.currentPathname)
    const [snackbar, setSnackbar] = useState(useContext(GlobalContext).state.snackbar)
    const [drawer, setDrawer] = useState(useContext(GlobalContext).drawer)


    useEffect(() => {
        if(window) {
          setCurrentPathname(window.location.pathname)
        }
        Router.events.on('routeChangeStart', handleSetCurrentPathname)
        return () => {
          Router.events.off('routeChangeStart', handleSetCurrentPathname)
        }
    }, [])
    
    const handleSetCurrentPathname = (url) => {
        handleSetDrawer(false)
        setCurrentPathname(url)
    }

    const handleSetDrawer = bool => setDrawer(bool)
    
    const handleChangeLanguage = (language) => setLanguage(language)

    const handleJustSignedIn = (state) => setJustSignedIn(state)

    const handleJustSignedOut = (state) => setJustSignedOut(state)

    const handleSetSnackbar = payload => setSnackbar({...payload})

    const handleSignIn = (data) => {
        setSignedIn(data)
    }

    return(
        <GlobalContext.Provider value={{
            language,
            method: {
                handleChangeLanguage,
                handleJustSignedIn,
                handleJustSignedOut,
                handleSignIn,
                handleSetSnackbar,
                handleSetDrawer
            },
            state: {
                justSignedIn,
                justSignedOut,
                signedIn,
                authPending,
                currentPathname,
                snackbar,
                drawer
            },
            // firebase
        }}>
            {props.children}
            
        </GlobalContext.Provider>
    )
}

export default GlobalState