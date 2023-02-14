import React from 'react'
import img from '../images/ABC_BANK.png'
const Home = () => {
    return <>
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img
                    className="lg:w-2/3 md:w-1/2 mb-10 object-cover object-center rounded"
                    alt="hero"
                    src={img}                />
                <div className="text-center lg:w-1/3 md:w-1/2" >
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    Be in the Right Place at the Right Time
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    Digital FD,Personal Loan, Car Loan,Home Loan, Savings Account,24x7 Loans
                    <br/>
                    Credit Card, FD, FD Interest Rates, Education Loan, Current Account,
                    <br/>Internet Banking, PPF Account, 24x7 Loan Against SecuritiesNew, 
                    <br/>Mutual Fund Management, Digital Gold, Axis Family Book of Records
                    </p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                            Login
                        </button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </section>

    </>
}

export default Home