import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { HiOutlineTemplate, HiOutlineUser } from "react-icons/hi";
import { MdChatBubbleOutline } from "react-icons/md";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import SearchComponent from '../baseComponents/SearchComponent';
import square from '../../img/square.png';
import status from '../../img/status.png'
import chat from '../../img/chat.png'
import Login from '../login/Login';

const navigation = [
	{ name: 'Log In', href: '#', icon: HiOutlineTemplate, current: true },
	{ name: 'Doctors', href: '#', icon: HiOutlineUser, current: false },
	{ name: 'Company & Employee', href: '#', icon: HiOutlineUser, current: false },
	{ name: 'Request', href: '#', icon: MdChatBubbleOutline, current: false },
	{ name: 'Data', href: '#', icon: MdChatBubbleOutline, current: false },
	{ name: 'Offers', href: '#', icon: AiOutlineExclamationCircle, current: false },
]
const userNavigation = [
	{ name: 'Sign out', href: '/' },
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Example() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [nav, setNav] = useState('Log In');

	const mainNavHandler = (value) => {
		setNav(value)
	}

	return (
		<>
			<div>
				<Transition.Root show={sidebarOpen} as={Fragment}>
					<Dialog as="div" className="relative z-40 lg:hidden" onClose={setSidebarOpen}>
						<Transition.Child
							as={Fragment}
							enter="transition-opacity ease-linear duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="transition-opacity ease-linear duration-300"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
						</Transition.Child>

						<div className="fixed inset-0 z-40 flex">
							<Transition.Child
								as={Fragment}
								enter="transition ease-in-out duration-300 transform"
								enterFrom="-translate-x-full"
								enterTo="translate-x-0"
								leave="transition ease-in-out duration-300 transform"
								leaveFrom="translate-x-0"
								leaveTo="-translate-x-full"
							>
								<Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-primary pt-5 pb-4">
									<Transition.Child
										as={Fragment}
										enter="ease-in-out duration-300"
										enterFrom="opacity-0"
										enterTo="opacity-100"
										leave="ease-in-out duration-300"
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
									>
										<div className="absolute top-0 right-0 -mr-12 pt-2">
											<button
												type="button"
												className="flex h-10 w-10 items-center justify-center focus:outline-none"
												onClick={() => setSidebarOpen(false)}
											>
												<span className="sr-only">Close sidebar</span>
												<XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
											</button>
										</div>
									</Transition.Child>
									<div className="flex flex-shrink-0 items-center px-4">
										<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="50pt" height="50pt" viewBox="0 0 475.000000 462.000000" preserveAspectRatio="xMidYMid meet">
											<g transform="translate(0.000000,462.000000) scale(0.100000,-0.100000)" fill="white">
												<path d="M1760 3994 c-42 -18 -76 -49 -98 -89 -15 -27 -17 -90 -20 -567 l-3 -538 -532 0 c-597 0 -569 3 -632 -74 l-30 -38 -3 -194 -3 -194 608 0 c527 0 611 -2 630 -15 12 -8 63 -96 114 -195 51 -99 95 -180 98 -180 3 0 62 184 130 408 68 224 130 422 137 439 25 64 108 66 133 5 6 -15 65 -205 131 -422 66 -217 124 -406 128 -419 7 -22 21 0 108 164 70 135 106 193 124 202 19 10 167 13 628 13 l604 0 -4 188 c-3 175 -5 189 -26 224 -13 20 -40 47 -60 60 l-37 23 -540 5 -540 5 -5 541 -5 540 -27 41 c-16 24 -44 49 -70 62 -43 20 -56 21 -474 21 -360 -1 -435 -3 -464 -16z" />
												<path d="M2202 2418 c-12 -35 -64 -205 -117 -378 -53 -173 -101 -330 -107 -348 -17 -55 -86 -74 -121 -34 -8 10 -69 124 -137 255 l-122 237 -579 0 -579 0 0 -179 c0 -191 5 -219 48 -264 61 -64 35 -62 619 -65 l532 -3 3 -532 c3 -474 5 -535 20 -562 22 -40 66 -81 101 -94 18 -7 180 -11 463 -11 407 0 437 1 472 19 42 22 63 43 86 88 14 28 16 93 16 562 l0 530 533 3 c517 3 533 4 572 24 22 11 54 40 70 63 l30 43 3 189 4 189 -582 -2 -582 -3 -128 -244 c-134 -257 -153 -281 -202 -262 -13 5 -29 15 -35 22 -6 8 -66 194 -133 414 -67 220 -123 401 -125 403 -2 2 -12 -25 -23 -60z" />
											</g>
										</svg>
									</div>
									<div className="mt-5 h-0 flex-1 overflow-y-auto">
										<nav className="space-y-1 px-2">
											{navigation.map((item) => (
												<div
													key={item.name}
													onClick={() => mainNavHandler(item.name)}
													className={classNames(
														item.name === nav
															? 'bg-gray-100 text-gray-900'
															: 'text-white hover:bg-gray-50 hover:text-gray-900',
														'group flex items-center rounded-md px-2 py-2 text-base font-medium'
													)}
												>
													<item.icon
														className={classNames(
															item.name === nav ? 'text-gray-500' : 'text-white group-hover:text-gray-500',
															'mr-4 h-6 w-6 flex-shrink-0'
														)}
														aria-hidden="true"
													/>
													{item.name}
												</div>
											))}
										</nav>
									</div>
								</Dialog.Panel>
							</Transition.Child>
							<div className="w-14 flex-shrink-0" aria-hidden="true">
								{/* Dummy element to force sidebar to shrink to fit close icon */}
							</div>
						</div>
					</Dialog>
				</Transition.Root>

				{/* Static sidebar for desktop */}
				<div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col m-2">
					{/* Sidebar component, swap this element with another sidebar if you like */}
					<div className="flex min-h-0 flex-1 flex-col bg-primary rounded-[45px]">
						<div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
							<div className="flex flex-shrink-0 items-center px-4 py-6 gap-2">
								<div>
									<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="40pt" height="40pt" viewBox="0 0 475.000000 462.000000" preserveAspectRatio="xMidYMid meet">
										<g transform="translate(0.000000,462.000000) scale(0.100000,-0.100000)" fill="white">
											<path d="M1760 3994 c-42 -18 -76 -49 -98 -89 -15 -27 -17 -90 -20 -567 l-3 -538 -532 0 c-597 0 -569 3 -632 -74 l-30 -38 -3 -194 -3 -194 608 0 c527 0 611 -2 630 -15 12 -8 63 -96 114 -195 51 -99 95 -180 98 -180 3 0 62 184 130 408 68 224 130 422 137 439 25 64 108 66 133 5 6 -15 65 -205 131 -422 66 -217 124 -406 128 -419 7 -22 21 0 108 164 70 135 106 193 124 202 19 10 167 13 628 13 l604 0 -4 188 c-3 175 -5 189 -26 224 -13 20 -40 47 -60 60 l-37 23 -540 5 -540 5 -5 541 -5 540 -27 41 c-16 24 -44 49 -70 62 -43 20 -56 21 -474 21 -360 -1 -435 -3 -464 -16z" />
											<path d="M2202 2418 c-12 -35 -64 -205 -117 -378 -53 -173 -101 -330 -107 -348 -17 -55 -86 -74 -121 -34 -8 10 -69 124 -137 255 l-122 237 -579 0 -579 0 0 -179 c0 -191 5 -219 48 -264 61 -64 35 -62 619 -65 l532 -3 3 -532 c3 -474 5 -535 20 -562 22 -40 66 -81 101 -94 18 -7 180 -11 463 -11 407 0 437 1 472 19 42 22 63 43 86 88 14 28 16 93 16 562 l0 530 533 3 c517 3 533 4 572 24 22 11 54 40 70 63 l30 43 3 189 4 189 -582 -2 -582 -3 -128 -244 c-134 -257 -153 -281 -202 -262 -13 5 -29 15 -35 22 -6 8 -66 194 -133 414 -67 220 -123 401 -125 403 -2 2 -12 -25 -23 -60z" />
										</g>
									</svg>
								</div>
								<div>
									<p className='uppercase text-base font-bold text-white'>a<span className='text-sm'>gan</span> h<span className='text-sm'>ealthcare</span> s<span className='text-sm'>ervices</span></p>
								</div>
							</div>
							<nav className="mt-5 flex-1 space-y-1 px-4">
								<a href="#" className="group block w-full flex-shrink-0 px-3 pb-5">
									<div className="flex items-center justify-between">
										<div>
											<img
												className="inline-block h-9 w-9 rounded-full"
												src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
											/>
										</div>
										<div className="ml-3">
											<p className="text-base font-medium text-white">Anna George</p>
											<p className="text-[10px] font-[1px] text-white group-hover:text-white">Admin</p>
										</div>
										<div className="ml-3">
											<p className="text-sm font-medium text-white">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-3 h-3">
													<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
												</svg>
											</p>
										</div>
									</div>
								</a>
								<div className='border-b-2 pb-3'>
									{navigation.map((item, i) => (
										<div
											key={i}
											onClick={() => mainNavHandler(item.name)}
											className={classNames(
												item.name === nav ? 'bg-white text-primary shadow-md' : 'text-white hover:bg-white hover:bg-opacity-75',
												'group flex items-center rounded-3xl px-4 py-2 text-xs font-semibold'
											)}
										>
											<item.icon className="mr-3 h-5 w-5 flex-shrink-0 text-primary-300" aria-hidden="true" />
											{item.name}
											{item.name === nav &&
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-3 h-3 ml-auto">
													<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
												</svg>}
										</div>
									))}
								</div>
							</nav>
						</div>
						<div className="flex flex-shrink-0 p-4">
							<a href="#" className="group block w-full flex-shrink-0">
								<div className="flex items-center justify-center gap-8">
									<div>
										<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-10 h-10">
											<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
										</svg>
									</div>
									<div className="flex flex-col gap-2">
										<p className="text-sm font-medium text-white">8736452398</p>
										<p className="text-sm font-medium text-white">8736452398</p>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
				<div className="flex flex-1 flex-col lg:pl-64">
					<div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow-lg lg:bg-transparent lg:shadow-transparent">
						<button
							type="button"
							className="px-2 pl-4 text-gray-500 focus:outline-none lg:hidden hover:text-primary focus:text-primary"
							onClick={() => setSidebarOpen(true)}
						>
							<span className="sr-only">Open sidebar</span>
							<Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
						</button>
						<div className="flex flex-1 justify-between items-center px-4">
							<div className="flex flex-1 w-full">
								<SearchComponent />
							</div>
							<div className="ml-4 flex items-center lg:ml-6 gap-4">
								<div
									type="button"
									className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 hidden sm:flex"
								>
									<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
										className='w-10 h-10 stroke-primary' viewBox="0 0 136.000000 147.000000"
										preserveAspectRatio="xMidYMid meet">
										<g transform="translate(0.000000,147.000000) scale(0.100000,-0.100000)"
											fill="#507d34">
											<path
												d="M310 1123 c-8 -3 -23 -12 -32 -21 -16 -14 -18 -43 -18 -342 0 -387 -8 -363 120 -368 l78 -4 7 -61 c12 -112 40 -115 127 -13 l63 74 192 1 c211 1 236 6 253 54 6 18 10 146 10 328 l0 298 -24 28 -24 28 -369 2 c-202 1 -375 -1 -383 -4z m745 -363 l0 -315 -206 -3 -207 -2 -63 -75 -64 -74 -3 32 c-1 18 -5 51 -8 74 l-5 42 -97 3 -97 3 -3 305 c-1 168 0 311 3 318 3 10 83 12 377 10 l373 -3 0 -315z" />
											<path
												d="M478 879 c-15 -9 -18 -26 -18 -117 0 -71 4 -112 12 -120 17 -17 279 -17 296 0 7 7 12 27 12 45 l0 33 60 -30 60 -30 0 110 0 109 -57 -34 -58 -35 -3 27 c-7 50 -15 53 -156 53 -72 0 -139 -5 -148 -11z" />
										</g>
									</svg>
								</div>
								<div
									type="button"
									className='hidden sm:flex'
								>
									<img src={square} width='33px' />
								</div>
								<div
									type="button"
									className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 hidden sm:flex"
								>
									<img src={status} width='43px' />
								</div>
								<div
									type="button"
									className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 hidden sm:flex"
								>
									<img src={chat} width='35px' />
								</div>
								<div className='text-right hidden sm:block'>
									<p className='text-xs font-bold'>Marvin McKinney</p>
									<p className='text-xs'>Admin</p>
								</div>
								{/* Profile dropdown */}
								<Menu as="div" className="relative ml-3">
									<div className=''>
										<Menu.Button className="flex max-w-xs items-center justify-center text-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg text-primary font-semibold bg-gray-200 w-10 h-10 ml-auto">
											<span className="sr-only">Open user menu</span>
											<p>M</p>
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
											{userNavigation.map((item, i) => (
												<Menu.Item key={item.name}>
													{({ active }) => (
														<a
															key={i}
															href={item.href}
															className={classNames(
																active ? 'bg-gray-100' : '',
																'block px-4 py-2 text-gray-700'
															)}
														>
															{item.name}
														</a>
													)}
												</Menu.Item>
											))}
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>

					<main className="flex-1">
						<Login />
					</main>
				</div>
			</div >
		</>
	)
}
