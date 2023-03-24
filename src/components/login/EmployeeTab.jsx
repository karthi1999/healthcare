import UpdateBtn from "../baseComponents/UpdateBtn";
import UploadPhotoInp from "../baseComponents/UploadPhotoInp";

export default function EmployeeTabs() {

  return (
    <div>
      <div className='flex flex-col sm:flex-row w-full gap-10 pt-5'>
        <div className='w-full'>
          <label htmlFor="name_emp" className="block text-sm font-normal leading-6 text-gray-900">
            Name
          </label>
          <div className="mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="name emp"
              id="name_emp"
              className="block w-full rounded-md focus-within:outline-none border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className='w-full'>
          <div className="flex gap-5">
            <div className="w-2/5">
              <label htmlFor="age_emp" className="block text-sm font-normal leading-6 text-gray-900">
                Age
              </label>
              <div className="mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="Age"
                  id="age_emp"
                  className="block w-full rounded-md focus-within:outline-none border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="emp" className="block text-sm font-normal leading-6 text-gray-900">
                Gender
              </label>
              <div className="mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="Gender emp"
                  id="emp"
                  className="block w-full rounded-md focus-within:outline-none border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row w-full gap-10 pt-5'>
        <div className='flex  flex-col sm:flex-row w-full gap-5'>
          <div className='w-full'>
            <label htmlFor="Employee_ID" className="block text-sm font-normal leading-6 text-gray-900">
              Employee ID
            </label>
            <div className="mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="Employee ID"
                id="Employee_ID"
                className="block w-full rounded-md focus-within:outline-none border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className='w-full'>
            <label htmlFor="Job_Role" className="block text-sm font-normal leading-6 text-gray-900">
              Job Role
            </label>
            <div className="mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="Job Role"
                id="Job_Role"
                className="block w-full rounded-md focus-within:outline-none border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className='w-full'>
          <div className='flex  flex-col sm:flex-row w-full gap-5'>
            <div className='w-full'>
              <label htmlFor="Mobile_Number_Emp" className="block text-sm font-normal leading-6 text-gray-900">
                Mobile Number
              </label>
              <div className="mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="Mobile Number"
                  id="Mobile_Number_Emp"
                  className="block w-full rounded-md focus-within:outline-none border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
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
                  className="block w-full rounded-md focus-within:outline-none border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row w-full gap-10 pt-5'>
        <div className="w-full">
          <div className='flex  flex-col sm:flex-row w-full gap-5'>
            <div className='w-full'>
              <label htmlFor="Company_Name_Emp" className="block text-sm font-normal leading-6 text-gray-900">
                Company Name
              </label>
              <div className="mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="Company Name"
                  id="Company_Name_Emp"
                  className="block w-full rounded-md focus-within:outline-none border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className='w-full'>
              <label htmlFor="Marital_Status" className="block text-sm font-normal leading-6 text-gray-900">
                Marital Status
              </label>
              <div className="mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="Marital Status"
                  id="Marital_Status"
                  className="block w-full rounded-md focus-within:outline-none border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className='w-full pt-5'>
            <div className="flex gap-5">
              <div className="w-full">
                <label htmlFor="Family_Members" className="block text-sm font-normal leading-6 text-gray-900">
                  Family Members
                </label>
                <div className="mt-2 rounded-md shadow-sm">
                  <input
                    type="text"
                    name="Family Members"
                    id="Family_Members"
                    className="block w-full rounded-md focus-within:outline-none border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="Relation" className="block text-sm font-normal leading-6 text-gray-900">
                  Relation
                </label>
                <div className="mt-2 rounded-md shadow-sm">
                  <input
                    type="text"
                    name="Relation"
                    id="Relation"
                    className="block w-full rounded-md focus-within:outline-none border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="w-2/5">
                <label htmlFor="Age2" className="block text-sm font-normal leading-6 text-gray-900">
                  Age
                </label>
                <div className="mt-2 rounded-md shadow-sm">
                  <input
                    type="text"
                    name="Age2"
                    id="Age2"
                    className="block w-full rounded-md focus-within:outline-none border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='w-full pt-5'>
            <label htmlFor="Address" className="block text-sm font-normal leading-6 text-gray-900">
              Address
            </label>
            <div className="mt-2 sm:col-span-2">
              <textarea
                id="Address"
                name="Address"
                rows={3}
                className="block w-full py-1.5 pl-4 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:py-1.5 sm:text-sm sm:leading-6 focus:outline-none"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
        <div className='w-full'>
          <UploadPhotoInp />
          <div className="pt-12">
            <UpdateBtn />
          </div>
        </div>
      </div>
    </div>
  )
}
