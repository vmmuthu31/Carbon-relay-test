import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {RxCrossCircled} from "react-icons/rx"
import {AiOutlineHome,AiFillSound,AiFillCaretDown,AiOutlineMenu,AiOutlineArrowLeft, AiOutlineDown,AiOutlineArrowRight } from "react-icons/ai"
import {PiUserCircleGearLight,PiNewspaperClippingDuotone } from "react-icons/pi"
import {FiUpload} from "react-icons/fi";
import {FaLock} from "react-icons/fa"
import {RxCross2} from "react-icons/rx"
import {BsThreeDots} from "react-icons/bs"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Button, Modal } from 'flowbite-react';

const navigation = [
  { name: 'Home', href: '#', icon: AiOutlineHome, current: false },
 
]
const buynavigation = [
  { name: 'Credits Offers', href: '#', icon: PiUserCircleGearLight, current: false },
  { name: 'Request Credits', href: '#', icon: PiUserCircleGearLight, current: false },

]
const sellnavigation = [
  { name: 'Offer Credits', href: '#', icon: AiFillSound, current: true },
  { name: 'Fulfill Request', href: '#', icon: PiNewspaperClippingDuotone, current: false },
]
const Cbuynavigation = [
  { name: 'Credits Offers', href: '#', icon: PiUserCircleGearLight, current: false },
  { name: 'Request Credits', href: '#', icon: PiUserCircleGearLight, current: false },
]

const Csellnavigation = [
  { name: 'Offer Credits', href: '#', icon: AiFillSound, current: false },
  { name: 'Fulfill Request', href: '#', icon: PiNewspaperClippingDuotone, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const [openModal, setOpenModal] = useState("");
  const props = { openModal, setOpenModal };
  return (

    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 z-40 flex md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative max-w-xs w-full bg-white pt-5 pb-4 flex-1 flex flex-col">
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
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <RxCrossCircled className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-shrink-0 px-4 flex items-center">
                <img
                className="h-8 w-auto"
                src="https://blogger.googleusercontent.com/img/a/AVvXsEhZJPipfeyNsdZI8CywAOgRlNn9nd30AlFuOcccs4IJxj_JfRUHxXap3KaGKfT7AlBry3Kn3QvIQzjOk78WPTxbINLWbaNLsT0deumPes4VYEXCYMkWlvCYJvYjPryn05qZeN4wtyY_Ufxqg3kn_lbmlTVymQ0iuvW9MtDq7Qn8TNfuIjk4t8d8KrPLQNg"
                alt="Workflow"
              />
                <p className='text-lg px-2 font-semibold'>CDash</p>
                </div>
                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="flex-1  px-2 pb-4 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group rounded-md py-2 px-2 flex items-center text-sm font-medium'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
                <div>
                  <p className='text-sm my-2 px-2 text-[#8C8C8C]'>BUY</p>
                  {buynavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group rounded-md py-1 px-2 flex items-center text-sm font-medium'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
             <p className='text-sm px-2 my-2 text-[#8C8C8C]'>Sell</p>
                 {sellnavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group rounded-md py-1 px-2 flex items-center text-sm font-medium'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
                </div>
              </nav>
              <nav className="flex-1 px-2 pb-1 space-y-1">
               <p className='text-md px-2 py-4 font-semibold text-gray-800'>Company Relay</p>
                <div>
                  <p className='text-sm px-2 my-2 text-[#8C8C8C]'>BUY</p>
                  {Cbuynavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group rounded-md py-1 px-2 flex items-center text-sm font-medium'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
             <p className='text-sm px-2 my-2 text-[#8C8C8C]'>Sell</p>
                 {Csellnavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group rounded-md py-1 px-2 flex items-center text-sm font-medium'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
                </div>
              </nav>
                </div>
                
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14">{/* Dummy element to force sidebar to shrink to fit close icon */}</div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-52 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="border-r border-gray-200 py-2 flex flex-col flex-grow bg-white overflow-y-auto">
            <div className=" sticky top-0 z-10 flex-shrink-0 py-3 bg-white border-b border-gray-200 flex px-4 items-center">
         
              <img
                className="h-8 w-auto"
                src="https://blogger.googleusercontent.com/img/a/AVvXsEhZJPipfeyNsdZI8CywAOgRlNn9nd30AlFuOcccs4IJxj_JfRUHxXap3KaGKfT7AlBry3Kn3QvIQzjOk78WPTxbINLWbaNLsT0deumPes4VYEXCYMkWlvCYJvYjPryn05qZeN4wtyY_Ufxqg3kn_lbmlTVymQ0iuvW9MtDq7Qn8TNfuIjk4t8d8KrPLQNg"
                alt="Workflow"
              />
                <p className='text-lg px-2 font-semibold'>CDash</p>
             
            </div>
            <div className="flex-grow space-y-24  mt-5 flex flex-col">
         
            <nav className="flex-1  px-2 pb-4 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group rounded-md py-2 px-2 flex items-center text-sm font-medium'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
                <div>
                  <p className='text-sm my-2 px-2 text-[#8C8C8C]'>BUY</p>
                  {buynavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group rounded-md py-1 px-2 flex items-center text-sm font-medium'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
             <p className='text-sm px-2 my-2 text-[#8C8C8C]'>Sell</p>
                 {sellnavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group rounded-md py-1 px-2 flex items-center text-sm font-medium'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
                </div>
              </nav>
              <nav className="flex-1 px-2 pb-1 space-y-1">
               <p className='text-md px-2 py-4 font-semibold text-gray-800'>Company Relay</p>
                <div>
                  <p className='text-sm px-2 my-2 text-[#8C8C8C]'>BUY</p>
                  {Cbuynavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group rounded-md py-1 px-2 flex items-center text-sm font-medium'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
             <p className='text-sm px-2 my-2 text-[#8C8C8C]'>Sell</p>
                 {Csellnavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group rounded-md py-1 px-2 flex items-center text-sm font-medium'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
                </div>
              </nav>
            </div>
            
          </div>
        </div>

        <div className="md:pl-52">
          <div className="  flex flex-col bg-[#d2c7c7]  md:px-8 xl:px-0">
            <div className="sticky top-0 z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 flex">
              <button
                type="button"
                className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <AiOutlineMenu className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="flex-1 flex mx-10 justify-between px-4 md:px-0">
                <div className="flex-1 flex">
                  <form className="w-full flex md:ml-0" action="#" method="GET">
                    
                    <div className="relative w-full  text-gray-800 text-xl pt-4 focus-within:text-gray-600">
                      <p className="">Offer Credits</p>
                    </div>
                  </form>
                </div>
                
              </div>
            </div>

            <main className="flex-1 mx-5">
      <div className="py-3">
        <div className="sm:px-6 flex justify-between md:px-0">
          <h1 className="text-lg font-semibold text-gray-900">You have 156 active offers available</h1>
          <Button className='bg-[#2F54EB] px-3  rounded-md text-white' onClick={() => props.setOpenModal('default')}>Create New Offer</Button>
      <Modal className='mx-80  text-black my-20' show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header><span className='py-2 text-center flex justify-center text-black'>Create New Offer</span></Modal.Header>
        <Modal.Body >
        <div>
          <div className='flex mx-20 justify-between'>
            <div>
              <label htmlFor="" className="block mb-2 ml-1 mt-4 ">Project ID</label>
              <input className='border-black border rounded-md' type='text' />
            </div>
            <div>
            <label htmlFor="" className="block mb-2 ml-1 mt-4 ">Quantity</label>
            <div className='flex'>
              <input className='border-black border rounded-md' type='text' />
              <button>-</button>
              <span>1</span>
              <button>+</button>
              </div>
            </div>
          </div>
          <div className='flex mx-20 justify-between'>
            <div>
              <label htmlFor="" className="block mb-2 ml-1 mt-4 ">Project ID</label>
              <input className='border-black border rounded-md' type='text' />
            </div>
            <div>
            <label htmlFor="" className="block mb-2 ml-1 mt-4 ">Quantity</label>
            <div className='flex'>
              <input className='border-black border rounded-md' type='text' />
              <button>-</button>
              <span>1</span>
              <button>+</button>
              </div>
            </div>
          </div>
          <div className='flex mx-20 justify-between'>
            <div>
              <label htmlFor="" className="block mb-2 ml-1 mt-4 ">Project ID</label>
              <input className='border-black border rounded-md' type='text' />
            </div>
            <div>
            <label htmlFor="" className="block mb-2 ml-1 mt-4 ">Quantity</label>
            <div className='flex'>
              <input className='border-black border rounded-md' type='text' />
              <button>-</button>
              <span>1</span>
              <button>+</button>
              </div>
            </div>
          </div>
          <div className='flex mx-20 justify-between'>
            <div>
              <label htmlFor="" className="block mb-2 ml-1 mt-4 ">Project Name</label>
              <input className='border-black border rounded-md' type='text' />
            </div>
            <div>
              <label htmlFor="" className="block mb-2 ml-1 mt-4 ">Project Type</label>
              <input className='border-black border rounded-md' type='text' />
            </div>
            <div>
              <label htmlFor="" className="block mb-2 ml-1 mt-4 ">Proponent</label>
              <input className='border-black border rounded-md' type='text' />
            </div>
            <div>
              <label htmlFor="" className="block mb-2 ml-1 mt-4 ">Country</label>
              <input className='border-black border rounded-md' type='text' />
            </div>
            <div>
              <label htmlFor="" className="block mb-2 ml-1 mt-4 ">Methodology Type</label>
              <input className='border-black border rounded-md' type='text' />
            </div>
            <div>
              <label htmlFor="" className="block mb-2 ml-1 mt-4 ">Project Type</label>
              <input className='border-black border rounded-md' type='text' />
            </div>
          </div>
          
        </div>
        </Modal.Body>
      </Modal>

       
        </div>
        <div className="px-4 sm:px-6 md:px-0">
          <div className="pt-3">
            <div className="h-[605px] flex flex-col justify-between bg-white rounded-lg">
              <div className='flex flex-col justify-between'>
                <div className="flex space-x-5 mx-6 py-4 border-b border-gray-200">
                  <button>All Offers</button>
                  <button>Accepted Offers</button>
                  <button>Bookmarked</button>
                </div>
                <div className='flex mt-3 justify-between px-8'>
                  <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search" required />
                  </div>
                    <button><FiUpload className='text-4xl p-1 px-2 border border-gray-300 rounded-lg' /></button>
                </div>
                <div className='flex font-semibold text-sm gap-3 mx-6 py-2'>
                  <p className='pt-1 font-semibold'>Apply Filters</p>
                  <button className='border px-2 py-1 flex border-gray-700 rounded-md'>Last Purchase is more than 300 <RxCross2 className='mt-1 mx-1'/></button>
                  <button className='border px-2 py-1 flex border-gray-700 rounded-md'>Last Purchase is more than 300 <RxCross2 className='mt-1 mx-1' /></button>
                  <button className='border px-2 py-1 flex border-gray-300 rounded-md'>Add Filters<AiFillCaretDown className='mt-1 mx-1' /></button>
                </div>
                <table className='mx-16 items-center text-center mt-6'>
                  <thead className='text-sm font-semibold text-gray-600 bg-gray-300'>
                    <tr className='border-b'>
                      <th className='px-8'>SELECT</th>
                      <th className='px-8'>PROJECT ID</th>
                      <th className='px-8'>PROJECT NAME</th>
                      <th className='px-8'>PROJECT TYPE</th>
                      <th className='px-8'>VINTAGE</th>
                      <th className='px-8'>QUANTITY</th>
                      <th className='px-8'>OFFER</th>
                      <th className='px-8'>BID</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-b'>
                      <td> <input type='checkbox' className='py-4' /></td>
                      <td className='flex gap-2 py-4'><button><FaLock className='mt-1' /></button>#129HjH9ukL</td>
                      <td className='px-4 py-4'>totam est tenetur</td>
                      <td className='px-4 py-4'>totam est tenetur</td>
                      <td className='px-4 py-4'>2011 - 2022</td>
                      <td className='px-4 py-4'>45</td>
                      <td className='px-4 py-4'>$26,610</td>
                      <td className='px-4 py-4'>$26,610</td>
                      <td className='px-4 py-4'><span className='flex gap-4 '><button><BsThreeDots /></button><button><AiOutlineDown/></button></span></td>
                    </tr>
                    <tr className='border-b'>
                      <td> <input className='py-4' type='checkbox' /></td>
                      <td className='flex gap-2 py-4'><button><FaLock className='mt-1' /></button>#129HjH9ukL</td>
                      <td className='px-4 py-4'>totam est tenetur</td>
                      <td className='px-4 py-4'>totam est tenetur</td>
                      <td className='px-4 py-4'>2011 - 2022</td>
                      <td className='px-4 py-4'>45</td>
                      <td className='px-4 py-4'>$26,610</td>
                      <td className='px-4 py-4'>$26,610</td>
                      <td className='px-4 py-4'><span className='flex gap-4 '><button><BsThreeDots /></button><button><AiOutlineDown/></button></span></td>
                    </tr>
                    <tr className='border-b'>
                      <td> <input className='py-4' type='checkbox' /></td>
                      <td className='flex gap-2 py-4'><button><FaLock className='mt-1' /></button>#129HjH9ukL</td>
                      <td className='px-4 py-4'>totam est tenetur</td>
                      <td className='px-4 py-4'>totam est tenetur</td>
                      <td className='px-4 py-4'>2011 - 2022</td>
                      <td className='px-4 py-4'>45</td>
                      <td className='px-4 py-4'>$26,610</td>
                      <td className='px-4 py-4'>$26,610</td>
                      <td className='px-4 py-4'><span className='flex gap-4 '><button><BsThreeDots /></button><button><AiOutlineDown/></button></span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <div className='flex justify-between mx-10 py-2'>
                  <p className="flex"><AiOutlineArrowLeft className='mt-1 mx-2' /><span >Previous</span></p>
                  <p className="text-sm">1 2 3 ... 8 9 10</p>
                  <p className="flex"><span>Next</span> <AiOutlineArrowRight className='mt-1 mx-2' /></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
          </div>
        </div>
      </div>
    </>
  )
}