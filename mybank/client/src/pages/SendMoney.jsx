import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function SendMoney() {
  const navigate = useNavigate()
  const [amount,setAmount] = useState(0)
  const [email,setEmail] = useState("")
  const successfulLogin = () => {
    toast.success('Transaction Sucessfully!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
    });
}
const errorLogin = () => {
    toast.error('Error!! in Transation', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
    });
}
  const handleTransaction = async()=>{
  const mydata = {amount , email };
    try {
        const data = await fetch("/user/transaction", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(mydata)
        })
        if(data.status===200){
          successfulLogin()
        }
        else{
          errorLogin()
        }
    }
    catch (err) {
      // console.error();
      errorLogin()
      navigate('/user/login')
    }
  }
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-4 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Send Money</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Sending money can be a demonstration of care and compassion towards someone.
              Whether it's a financial gift to help a friend in need or a
              way to support a loved one's dreams and ambitions, the act of
              sending money can convey a sense of love, support, and concern. It can help ease financial worries and provide a sense of
              security and comfort. </p>
          </div>
          <div className="lg:w-full md:w-full mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-1 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">Amount</label>
                  <input min={0} type="number" id="name" name="name" value={amount} onChange={(e)=>setAmount(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-1 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
              </div>
              <div className="p-2 w-full">
                <button onClick={()=>{handleTransaction()}} className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Send Money</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="light"
            />
    </>
  )
}

export default SendMoney
