import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../images/profile_page.png'

const MyProfile = () => {
  const navigate = useNavigate();
  const handleData = async () => {
    try {

      const res = await fetch(`/user/profile`, {
        method: 'GET',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include"
      })
      const d = await res.json()
      setdata(d)
      if (!res.status === 200) {
        throw new Error(res.Error)
      }
    } catch (err) {
      console.log(err)
      navigate("/user/login")
    }

  }
  const [data, setdata] = useState("");
  useEffect(() => {
    handleData();
  }, []);
  return (

    <>
      <div>
        <section className="text-gray-600 body-font">
          <div style={{ width: '100%' }} className="px-5 py-24 mx-auto">
            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="sm:w-16 sm:h-16 w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>

              </div>
              <div style={{ textAlign: 'end', marginRight: '20px' }} className="flex-grow sm:text-left mt-6 sm:mt-0">
                <h2 className="text-gray-900 text-3xl title-font font-medium mb-2">
                  Name:
                </h2>
                <p className="leading-relaxed text-xl">
                  {data.name}
                </p>
              </div>
            </div>
            <div className="flex lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-gray-900 text-3xl title-font font-medium mb-2">
                  Email:
                </h2>
                <p className="leading-relaxed text-xl">
                  {data.email}
                </p>
              </div>
              <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="sm:w-16 sm:h-16 w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <circle cx={6} cy={6} r={3} />
                  <circle cx={6} cy={18} r={3} />
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                </svg>
              </div>
            </div>
            <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="sm:w-16 sm:h-16 w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div style={{ textAlign: 'end', marginRight: '20px' }} className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-gray-900 text-3xl title-font font-medium mb-2">
                  Balance:
                </h2>
                <p className="leading-relaxed text-xl">
                  ₹ {data.amount}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>

  )
}

export default MyProfile