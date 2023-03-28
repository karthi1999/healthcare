import { companyTabFields } from "../../assets/login/companyTab";
import FieldComponent from "../baseComponents/FieldComponent";
import UpdateBtn from "../baseComponents/UpdateBtn";

export default function CompanyTabs() {
    return (
        <div className='' >
            <div className='grid sm:grid-cols-4 w-full gap-10 pt-5' >
                {
                    Array.isArray(companyTabFields) && companyTabFields.length ?
                        companyTabFields.map((fieldData, index) => <FieldComponent key={index} fieldData={fieldData} />) : ""
                }
            </div>
            <div className='grid sm:grid-cols-12 w-full pt-5 justify-items-stretch sm:pl-12'>
                <UpdateBtn />
            </div>
        </div>
    )
}
