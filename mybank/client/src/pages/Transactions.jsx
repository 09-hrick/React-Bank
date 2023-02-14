import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import A from './A'

const Transactions = () => {
  const [data,setData] = useState()
  const [login,setLogin] = useState(false)
  const handleSubmit = async () => {
    try {
      const res = await fetch('/user/getTransactions', {
        method: 'GET',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }, credentials: "include"
      })
      const data = await res.json()
      setLogin(true)
      setData(data)
      console.log(data)
    } catch (error) {
      console.log(error)
      useNavigate("/user/login")
    }

  }

  useEffect(() => {
    handleSubmit()
  }, [])


  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container-fluid px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead style={{display:'flex'}} className="bg-white border-b">
                      <tr>
                        <th
                        style={{width:'25vw',textAlign:'center'}}
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          From
                        </th>
                        <th
                        style={{width:'25vw',textAlign:'center'}}
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          To
                        </th>
                        <th
                        style={{width:'25vw',textAlign:'center'}}
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Amount
                        </th>
                        <th
                        style={{width:'25vw',textAlign:'center'}}
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Date
                        </th>
                      </tr>
                    </thead>
                  </table>
                    <tbody>
                      {/* {data.map((d)=>{
                        return <A from={d.from} to={d.to} amount={d.amount} date={d.date}/>
                      })} */}
                      {login?<div>
                        {data.map((d)=>{
                        return <A from={d.from} to={d.to} amount={d.amount} date={d.date}/>
                      })}
                      </div>:""}
                    </tbody>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </>
  )
}

export default Transactions