import { useState } from "react";
import { PhotoIcon } from '@heroicons/react/24/solid';
import Input from "../baseComponents/Input";
import Label from "../baseComponents/label";
import TextArea from "../baseComponents/TextArea";

const FieldComponent = (
    {
        fieldData = {}
    }
) => {

    const renderField = () => {
        const {
            type,
            id,
            name = '',
            className = '',
            labelClassName = '',
            fieldClassName = '',
            label = '',
        } = fieldData
        const [hide, setHide] = useState(true);
        switch (type) {
            case 'text':
                return (
                    <div className={`${className}`}>
                        <Label htmlFor={id} className={`block text-sm font-normal leading-6 text-gray-900 ${labelClassName}`}>{label}</Label>
                        <div className="mt-2 rounded-md shadow-sm">
                            <Input
                                id={id}
                                type={type}
                                name={name}
                                className={`block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 ${fieldClassName}`}
                            />
                        </div>
                    </div>
                )
            case 'password':
                return (
                    <div className={`${className}`}>
                        <Label htmlFor={id} className={`block text-sm font-normal leading-6 text-gray-900 ${labelClassName}`}>{label}</Label>
                        <div className="mt-2 relative rounded-md shadow-sm">
                            <Input
                                id={id}
                                type={`${hide ? 'password' : 'text'}`}
                                name={name}
                                className={`block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 ${fieldClassName}`}
                            />
                            {
                                hide ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-6 h-6 absolute right-4 top-1.5 stroke-gray-400" onClick={() => { setHide(false) }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-6 h-6 absolute right-4 top-1.5 stroke-gray-400" onClick={() => { setHide(true) }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                            }
                        </div>
                    </div>
                )
            case 'textArea':
                return (
                    <div className={`${className}`}>
                        <Label htmlFor={id} className={`block text-sm font-normal leading-6 text-gray-900 ${labelClassName}`}>{label}</Label>
                        <div className="mt-2 rounded-md shadow-sm">
                            <TextArea
                                id={id}
                                name={name}
                                rows={3}
                                className={`block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 ${fieldClassName}`}
                                defaultValue={''}
                            />
                        </div>
                    </div>
                )
            case 'uploadImage':
                return (
                    <div className={`${className}`}>
                        <Label htmlFor={id} className={`block text-sm font-normal leading-6 text-gray-900 ${labelClassName}`}>{label}</Label>
                        <div
                            className="w-2/4 h-40 lg:h-48 xl:h-56 mt-2 flex justify-center items-center rounded-lg bg-black bg-opacity-10 border-gray-900/25 relative"
                            htmlFor="file-upload">
                            <div className="relative z-5 flex justify-center items-center rounded-md shadow-sm text-sm font-medium focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary w-full h-full">
                                <Input
                                    id={id}
                                    type={'file'}
                                    name={name}
                                    className={`absolute inset-0 w-full h-full opacity-0 cursor-pointer appearance-none ${fieldClassName}`}
                                />
                                <PhotoIcon className="mx-auto w-10 h-10 sm:h-16 sm:w-16 " fill="#6b6969" aria-hidden="true" />
                            </div>
                        </div>
                    </div>
                )
            default:
                return null;
        }
    }

    return (
        <>{renderField()}</>
    )
}

export default FieldComponent