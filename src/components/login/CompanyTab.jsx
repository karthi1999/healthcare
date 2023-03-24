import { useState } from "react";
import UpdateBtn from "../baseComponents/UpdateBtn";

export default function CompanyTabs() {
  const [hide, setHide] = useState(true);

  return (
    <div>
      <div className='flex flex-col sm:flex-row w-full gap-10 pt-5'>
        <div className='w-full'>
          <label htmlFor="company_name" className="block text-sm font-normal leading-6 text-gray-900">
            Company Name
          </label>
          <div className="mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="company name"
              id="company_name"
              className="block w-full rounded-md border-0 focus-within:outline-none py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className='w-full'>
          <label htmlFor="Toc" className="block text-sm font-normal leading-6 text-gray-900">
            Type of Company
          </label>
          <div className="mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="Type of Company"
              id="Toc"
              className="block w-full rounded-md border-0 focus-within:outline-none py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row w-full gap-10 pt-5'>
        <div className='flex  flex-col sm:flex-row w-full gap-5'>
          <div className='w-full'>
            <label htmlFor="Mobile_Number" className="block text-sm font-normal leading-6 text-gray-900">
              Mobile Number
            </label>
            <div className="mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="Mobile Number"
                id="Mobile_Number"
                className="block w-full rounded-md border-0 focus-within:outline-none py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className='w-full'>
            <label htmlFor="Mail_ID" className="block text-sm font-normal leading-6 text-gray-900">
              Mail ID
            </label>
            <div className="mt-2 rounded-md shadow-sm">
              <input
                type="email"
                name="Mail ID"
                id="Mail_ID"
                className="block w-full rounded-md border-0 focus-within:outline-none py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className='w-full'>
          <label htmlFor="Noe" className="block text-sm font-normal leading-6 text-gray-900">
            Number of Employees
          </label>
          <div className="mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="Number of Employees"
              id="Noe"
              className="block w-full rounded-md border-0 focus-within:outline-none py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row w-full gap-10 pt-5'>
        <div className='w-full'>
          <label htmlFor="Contact_Person" className="block text-sm font-normal leading-6 text-gray-900">
            Contact Person
          </label>
          <div className="mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="Contact Person"
              id="Contact_Person"
              className="block w-full rounded-md border-0 focus-within:outline-none py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className='w-full'>
          <label htmlFor="Eyp" className="block text-sm font-normal leading-6 text-gray-900">
            Enter Your Password
          </label>
          <div className="mt-2 relative rounded-md shadow-sm">
            <input
              type={`${hide ? 'password' : 'text'}`}
              name="Enter Your Password"
              id="Eyp"
              className="block w-full rounded-md border-0 focus-within:outline-none py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
            {hide ?
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-6 h-6 absolute right-4 top-1.5 stroke-gray-400" onClick={() => { setHide(false) }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-6 h-6 absolute right-4 top-1.5 stroke-gray-400" onClick={() => { setHide(true) }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>}
          </div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row w-full gap-10 pt-5'>
        <div className='w-full'>
          <label htmlFor="Company_Address" className="block text-sm font-normal leading-6 text-gray-900">
            Company Address
          </label>
          <div className="mt-2 sm:col-span-2">
            <textarea
              id="Company_Address"
              name="Company Address"
              rows={3}
              className="block w-full py-1.5 pl-4 rounded-md border-0 focus-within:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:py-1.5 sm:text-sm sm:leading-6"
              defaultValue={''}
            />
          </div>
        </div>
        <div className='w-full'>
          <label htmlFor="Ryp" className="block text-sm font-normal leading-6 text-gray-900">
            Re-Enter Your Password
          </label>
          <div className="mt-2 relative rounded-md shadow-sm">
            <input
              type={`${hide ? 'password' : 'text'}`}
              name="Re-Enter Your Password"
              id="Ryp"
              className="block w-full rounded-md border-0 focus-within:outline-none py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
            {hide ?
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-6 h-6 absolute right-4 top-1.5 stroke-gray-400" onClick={() => { setHide(false) }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-6 h-6 absolute right-2 top-1/4 stroke-gray-400" onClick={() => { setHide(true) }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>}
          </div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row w-full gap-10 pt-5'>
        <div className='w-full'>
        </div>
        <UpdateBtn />
      </div>
    </div>
  )
}
