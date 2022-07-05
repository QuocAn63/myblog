import AccountHeader from "../partials/AccountHeader/AccountHeader"

function AccountLayout({ children }) {
  return (
    <>
        <AccountHeader/>
        {children}    
    </>
  )
}

export default AccountLayout