import React from 'react'

const Header = () => {
    function delcookies(){
        
    }
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        <span className="ml-3 text-xl">ABC Bank</span>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-6 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <a href="/home" className="mr-5 hover:text-gray-900">Home</a>
                        <a href="/user/profile" className="mr-5 hover:text-gray-900">My Profile</a>
                        <a href="/user/sendmoney" className="mr-5 hover:text-gray-900">Send Money</a>
                        <a href="/user/transactions" className="mr-5 hover:text-gray-900">Transactions</a>
                        <a href="/user/forgotpassword" className="mr-5 hover:text-gray-900">Forgot Password</a>
                    </nav>
                    <a href="/user/login">
                        <button onClick={()=>{delcookies()}} className="inline-flex items-center text-white bg-blue-500 border-0 py-3 px-7 focus:outline-none hover:bg-blue-700 rounded mt-4 md:mt-0">
                            Log out
                        </button>
                    </a>
                </div>
            </header>

        </div>
    )
}

export default Header