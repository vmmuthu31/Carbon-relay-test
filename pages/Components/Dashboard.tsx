import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {RxCrossCircled} from "react-icons/rx"
import {AiOutlineHome,AiFillSound,AiOutlineBell,AiOutlineMenu, AiFillFolder, } from "react-icons/ai"
import {PiUserCircleGearLight,PiNewspaperClippingDuotone } from "react-icons/pi"

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
                <div className=" sm:px-6 flex justify-between md:px-0">
                  <h1 className="text-lg font-semibold text-gray-900">You have 156 active offers available</h1>
                  <button className='bg-[#2F54EB] px-3 py-1 rounded-md text-white'>Create New Offer</button>
                </div>
                <div className="px-4 sm:px-6 md:px-0">
                  {/* Replace with your content */}
                  <div className="pt-3 ">
                    <div className="h-[605px] bg-white  rounded-lg">
                      <div className="flex space-x-5 mx-6 py-4 border-b border-gray-200 ">
                    <button>All Offers</button>
                    <button>Accepted Offers</button>
                    <button>Bookmarked</button>
                    </div>
                    </div>
                  </div>
                  {/* /End replace */}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}