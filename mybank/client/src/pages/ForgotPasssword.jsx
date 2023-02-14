import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ForgotPassword() {
  const navigate = useNavigate();
  const handleData = async () => {
    try {
      const mydata = {oldPassword,newPassword}
      const res = await fetch(`/user/forgot`, {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mydata)
      })
      const data = await res.json()
      if (!res.status === 200) {
        throw new Error(res.Error)
      }
      console.log("Password Changed")
    } catch (err) {
      console.log(err)
      navigate("/user/login")
    }

  }
  const [oldPassword,setOldPassword] = useState()
  const [newPassword,setNewPassword] = useState()

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-4 py-4 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <p className="leading-relaxed mt-4">
              It's perfectly normal to forget your passwords from time to time.
              With so many websites and applications requiring us to create unique
              and complex passwords, it's easy to lose track of them all. It's also
              common for people to have multiple passwords for different accounts, making it even harder to remember them all. Don't beat yourself up if you can't remember a password. Instead, take advantage of the password recovery options provided by the website or application. In most cases, you can reset your password using your email address or phone number. If all else fails, you can also contact the customer support team for assistance. Just remember
              to choose a strong and unique password for your new account to
              ensure the security of your information.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Forgot Password
            </h2>
            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600">
                Old Password
              </label>
              <input
                type="text"
                id="old-password"
                value={oldPassword}
                onChange={(e)=>{setOldPassword(e.target.value)}}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
                New Password
              </label>
              <input
                type="text"
                id="new-password"
                value={newPassword}
                onChange={(e)=>{setNewPassword(e.target.value)}}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={()=>{handleData()}}
            >
              Forget Password
            </button>
          </div>
        </div>
      </section>


    </>
  )
}

export default ForgotPassword
