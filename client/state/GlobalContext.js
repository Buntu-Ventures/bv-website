import { createContext } from 'react'


export default createContext({
    language: 'fr',
    state: {
        signedIn: false,
        justSignedIn: false,
        justSignedOut: false,
        authPending: true,
        currentPathname: '',
        drawer: false,
        cookieAccepted: false,
        snackbar: {
            show: false,
            severity: "info",
            message: "No information set."
        }
    },
    method: {
        handleChangeLanguage: () => {},
        handleJustSignedIn: () => {},
        handleSignIn: () => {},
        handleJustSignedOut: () => {},
        handleChangeCurrentPathname: () => {},
        handleSetSnackbar: () => {},
        handleSetDrawer: () => {}
    },
    firebase: null,
})