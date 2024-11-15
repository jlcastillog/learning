export const saveLogin = ({signOut, account}) => {    
    window.localStorage.setItem('sign-out', signOut)
    window.localStorage.setItem('account', JSON.stringify(account))
}

export const resetLoginStorage = () => {
    window.localStorage.removeItem('sign-out')
    window.localStorage.removeItem('account')
}