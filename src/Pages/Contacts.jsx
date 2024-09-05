
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Popup from "../Components/Popup"
import { removeContact } from "../Redux/action"

const Contacts = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [singleContact, setSingleContact] = useState({})
    let data = undefined
    const AllContacts = useSelector((store) => store.contacts)
    const dispatch = useDispatch()
    // console.log(AllContacts)

    const togglePopup = (contact) => {

        setSingleContact(contact)

        setIsOpen(!isOpen)


    }
    useEffect(() => {

    }, [dispatch, AllContacts.length])
    return (
        <div className="justify-center pt-16 text-gray-50   p-4  w-full ">
            <div className="m-4">
                <button className="rounded-full bg-blue-600 p-2 text-2xl">
                    <Link to="/contact_form">
                        Add Contact
                    </Link>
                </button>

            </div>
            {AllContacts.length == 0 && <div className=" m-auto w-fit p-4 align-middle text-blue-500 justify-center">

                <svg className="m-auto" width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKsSJ2E7qbW-FFzFGQpppPY3wl5nqcdboPFDQa3bh9UEE_g7X5bVNeF1N8gg&s">
                    <path d="M52.6631 127.029C52.6631 127.029 91.434 125.477 99.8125 61.7456C107.253 5.14629 172.631 30.9083 191.529 53.4701C216.01 82.6971 202.96 132.974 234.629 139.325C266.299 145.676 245.618 216.292 197.546 209.533C137.746 201.125 152.214 236.069 134.262 250.859C121.379 261.475 68.5515 251.256 66.7908 212.723C65.3092 180.297 51.6315 180.4 41.9366 176.723C27.9544 171.421 19.1441 133.017 52.6631 127.029Z" fill="#DEE9FF" />
                    <path d="M184.462 197.807L146.371 160.168L138.828 167.801L176.92 205.44L184.462 197.807Z" fill="#699CFF" />
                    <path d="M199.013 207.92L169.378 178.637C169.213 178.474 168.947 178.476 168.784 178.641L157.568 189.992C157.405 190.157 157.406 190.423 157.571 190.586L187.206 219.869C187.371 220.032 187.637 220.031 187.8 219.866L199.017 208.514C199.18 208.349 199.178 208.083 199.013 207.92Z" fill="#0E84E5" />
                    <path d="M112.611 179.097C138.816 179.097 160.06 157.853 160.06 131.648C160.06 105.442 138.816 84.1982 112.611 84.1982C86.4051 84.1982 65.1613 105.442 65.1613 131.648C65.1613 157.853 86.4051 179.097 112.611 179.097Z" fill="#0E84E5" />
                    <path d="M112.611 171.355C134.54 171.355 152.318 153.578 152.318 131.648C152.318 109.718 134.54 91.9407 112.611 91.9407C90.6811 91.9407 72.9036 109.718 72.9036 131.648C72.9036 153.578 90.6811 171.355 112.611 171.355Z" fill="#D4E5FF" />
                    <path d="M192.83 88.7531C181.7 85.1454 169.672 91.247 166.049 102.423C162.442 113.553 168.543 125.581 179.719 129.203C190.895 132.825 202.892 126.664 206.5 115.533C210.108 104.403 203.96 92.3606 192.83 88.7531ZM189.471 99.1145C190.717 99.5183 191.815 100.283 192.626 101.312C193.436 102.34 193.923 103.587 194.024 104.892C194.126 106.198 193.837 107.504 193.195 108.646C192.552 109.787 191.586 110.712 190.417 111.303C189.249 111.894 187.931 112.125 186.631 111.966C185.331 111.807 184.107 111.266 183.115 110.411C182.124 109.556 181.408 108.425 181.06 107.163C180.711 105.9 180.746 104.563 181.158 103.32C182.273 99.8813 186.032 97.9999 189.471 99.1145ZM181.068 125.041C177.37 123.848 174.202 121.407 172.106 118.136C176.029 115.907 180.13 115.286 183.84 116.489C187.55 117.692 190.567 120.569 192.377 124.706C188.76 126.126 184.762 126.244 181.068 125.041Z" fill="#418DF9" />
                    <path d="M100.191 190.176C98.258 191.163 96.6608 192.701 95.6016 194.595C94.5424 196.49 94.0688 198.656 94.2406 200.82C94.4125 202.983 95.2221 205.047 96.5671 206.751C97.9121 208.455 99.7321 209.721 101.797 210.39C103.862 211.06 106.078 211.101 108.167 210.511C110.256 209.92 112.122 208.723 113.531 207.072C114.939 205.42 115.826 203.388 116.08 201.233C116.333 199.077 115.942 196.895 114.955 194.961C113.629 192.371 111.331 190.413 108.563 189.516C105.795 188.618 102.784 188.856 100.191 190.176ZM102.747 195.184C103.349 194.876 104.029 194.755 104.701 194.834C105.372 194.914 106.005 195.191 106.518 195.63C107.032 196.07 107.403 196.652 107.585 197.303C107.768 197.954 107.752 198.645 107.541 199.287C107.331 199.93 106.934 200.495 106.401 200.911C105.869 201.328 105.225 201.577 104.55 201.626C103.876 201.676 103.202 201.525 102.614 201.191C102.027 200.857 101.551 200.356 101.248 199.752C100.847 198.946 100.779 198.015 101.06 197.16C101.34 196.305 101.947 195.594 102.747 195.183V195.184ZM109.143 207.714C107.358 208.628 105.311 208.893 103.352 208.464C103.97 206.219 105.24 204.496 107.034 203.581C108.827 202.665 110.978 202.615 113.149 203.464C112.347 205.302 110.931 206.804 109.143 207.713V207.714Z" fill="#418DF9" />
                </svg>

                <h1 className="text-3xl">No Contact Found Please add contact using <br /> Add Contact Button</h1>
            </div>}
            <div id="contact_list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                {
                    AllContacts.map((el) => {
                        return <div key={el.id} className="bg-blue-300 rounded-lg shadow-md m-4 p-4 text-white">
                            <div onClick={() => togglePopup(el)} className="w-3/4 m-auto  ">
                                <img className="w-full rounded-full" src="data:image/jpeg;base64,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" alt="contacts search" />
                                <div className="p-4">
                                    {isOpen &&
                                        <Popup close={() => togglePopup(data)} el={singleContact} />

                                    }
                                </div>    <div className="text-left">
                                    <p>First Name : {el.first_name}</p>
                                    <p>Last Name  : {el.last_name}</p>
                                    {/* <p>Mobile   : {el.mob}</p> */}
                                    <p>Status     : {el.status == "active" ? "Active" : "Inactive"}</p>
                                </div>

                            </div>

                            <div className="flex justify-between my-2">
                                <Link to={`edit/${el.id}`}>
                                    <button className="rounded p-2 bg-blue-600 text-black">

                                        Edit
                                    </button>
                                </Link>

                                <button onClick={() => dispatch(removeContact(el.id))} className="rounded p-2 bg-red-500 text-white">Delete</button>
                            </div>
                        </div>
                    })
                }
 

            </div>

        </div>
    )
}

export default Contacts
