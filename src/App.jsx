import { useState } from "react";

import {
  RiHomeLine,
  RiArrowLeftRightFill,
  RiMoneyEuroCircleFill,
  RiArrowUpSLine,
  RiCheckboxBlankCircleFill,
  RiHandHeartLine,
  RiMessage2Line,
  RiListSettingsLine,
  RiLogoutCircleRLine,
  RiMenuLine,
  RiCloseLine,
  RiSendPlaneLine,
  RiSearch2Line,
  RiFileCopyLine,
} from "react-icons/ri";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="min-h-screen">
      {/* Sidebar */}
      <div
        className={`bg-white fixed w-6/8 md:w-96 h-full border-r p-8 flex flex-col justify-between overflow-y-scroll transition-all duration-500 lg:left-0 z-50 ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        {/* Logo, info user and nav */}
        <div>
          {/* Logo */}
          <h1 className="text-2xl uppercase font-bold mb-10">Company</h1>
          {/* User info */}
          <div className="flex items-center gap-4 mb-10">
            <span className="bg-blue-100 p-2 rounded-full py-2 px-[11px] text-blue-800 font-medium">
              E.P
            </span>
            <div>
              <p className="text-gray-400 text-sm">Web developer</p>
              <h5 className="font-bold text-lg">Esteban Pastor</h5>
            </div>
          </div>
          {/* Menu */}
          <ul>
            <li>
              <a
                href="#"
                className="flex items-center gap-4 text-gray-500 py-2 px-4"
              >
                <RiHomeLine />
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-4 text-gray-500 py-2 px-4"
              >
                <RiMoneyEuroCircleFill />
                Trade
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-4 text-gray-500 py-2 px-4 justify-between"
              >
                <span className="flex items-center gap-4">
                  <RiArrowLeftRightFill />
                  Transfers
                </span>

                <RiArrowUpSLine />
              </a>
              <ul className="pl-8">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-4 py-2 px-4 text-gray-500"
                  >
                    <RiCheckboxBlankCircleFill className="text-[8px]" />{" "}
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-4 py-2 px-4 text-gray-500"
                  >
                    <RiHandHeartLine className="text-[8px]" /> Beneficiaries
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-4 py-2 px-4 text-gray-500 justify-between"
                  >
                    <span className="flex items-center gap-4">
                      <RiMessage2Line className="text-[8px]" />
                      Messages
                    </span>
                    <span className="p-1 px-2 box-content bg-orange-400 text-white rounded-full text-xs">
                      2
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-4 text-gray-500 py-2 px-4"
              >
                <RiListSettingsLine />
                System settings
              </a>
            </li>
          </ul>
        </div>
        {/* Logout */}
        <ul>
          <li>
            <a
              href="#"
              className="flex items-center gap-4 text-gray-500 py-2 px-4"
            >
              <RiLogoutCircleRLine />
              Logout
            </a>
          </li>
        </ul>
      </div>
      {/* Mobile button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden fixed bottom-6 right-6 border p-3 rounded-full bg-white"
      >
        {showMenu ? <RiCloseLine /> : <RiMenuLine />}
      </button>
      {/* Header */}
      <header className="fixed lg:ml-96 bg-white w-full lg:w-[calc(100%-384px)] border-b">
        <div className="flex items-center justify-between p-8">
          <h1 className="text-3xl font-bold">Message</h1>
          <button className="border text-blue-800 font-bold flex items-center gap-4 p-3 rounded-lg">
            <RiSendPlaneLine /> New message
          </button>
        </div>
        <div className="bg-gray-100 grid grid-cols-1 md:grid-cols-4">
          <form className="col-span-1 p-4 border-r">
            <div className="relative">
              <RiSearch2Line className="text-blue-900 absolute top-1/2 -translate-y-1/2 left-2 hover:cursor-pointer" />
              <input
                type="text"
                className="bg-white w-full py-2 px-8 outline-none rounded-lg border focus:border-blue-700"
                placeholder="Search..."
              />
            </div>
          </form>
          <div className="col-span-3 p-4 flex items-center justify-between">
            <h3>Error code CR045</h3>
            <p className="flex items-center gap-2 text-blue-900">
              <span className="text-gray-500">Transaction:</span> 123456{" "}
              <RiFileCopyLine className="hover:cursor-pointer text-xl" />
            </p>
          </div>
        </div>
      </header>
      {/* Main content*/}
      <main className="lg:ml-96 pt-60 lg:pt-48 h-screen lg:w-[calc(100%-384px)] grid grid-cols-1 lg:grid-cols-4">
        <ul className="col-span-1 border-r p-4  overflow-y-scroll">
          <li>
            <a href="#" className="hover:bg-gray-100 block p-2 rounded-lg">
              <h5 className="flex items-center gap-4 font-bold">
                <RiCheckboxBlankCircleFill className="text-orange-300 text-[10px]" />{" "}
                Argentina bank (DSDA78...)
              </h5>
              <p className="text-gray-500 text-sm mb-2">
                Dear client, your transaction is completed.
              </p>
              <span className="text-xs text-gray-400 border-b">
                22/10/2022 17:24 hrs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="hover:bg-gray-100 block p-2 rounded-lg">
              <h5 className=" font-bold">Crypto currency (TRDA78...)</h5>
              <p className="text-gray-500 text-sm mb-2">
                Dear client, your transaction is completed.
              </p>
              <span className="text-xs text-gray-400 border-b">
                21/10/2022 18:35 hrs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="hover:bg-gray-100 block p-2 rounded-lg">
              <h5 className="font-bold">Delivery account (FFA92...)</h5>
              <p className="text-gray-500 text-sm mb-2">
                Dear client, your transaction is completed.
              </p>
              <span className="text-xs text-gray-400 border-b">
                20/10/2022 14:30 hrs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="hover:bg-gray-100 block p-2 rounded-lg">
              <h5 className="font-bold">Uruguay client (ULFA78...)</h5>
              <p className="text-gray-500 text-sm mb-2">
                Dear client, your transaction is completed.
              </p>
              <span className="text-xs text-gray-400 border-b">
                19/10/2022 13:15 hrs
              </span>
            </a>
          </li>
        </ul>
        <div className="col-span-3 relative p-4">
          <div className="flex justify-center py-2 px-4 my-6">
            <p className="text-center border p-2 rounded-full w-auto max-w-[100px]">
              Yesterday
            </p>
          </div>
          {/* Message received */}
          <div className="flex items-start gap-4">
            <span className="bg-blue-100 text-blue-900 font-bold py-2 px-[10px] rounded-full ">
              J.A
            </span>
            <div>
              <p className="text-gray-500 border p-4 mb-2 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl hover:bg-gray-100">
                ¡I sent you the money! Happy Christmas, Esteban.
              </p>
              <span className="text-gray-400 text-xs">23/12/2022, 19:05</span>
            </div>
          </div>
          <div className="flex justify-center py-2 px-4 my-6">
            <p className="text-center border p-2 rounded-full w-auto max-w-[100px]">
              Today
            </p>
          </div>
          {/* Message received area */}
          <div className="flex items-start flex-row-reverse gap-4">
            <span className="bg-blue-100 text-blue-900 font-bold py-2 px-[10px] rounded-full ">
              E.P
            </span>
            <div>
              <p className="text-white bg-blue-600 p-4 mb-2 rounded-tl-2xl rounded-br-2xl rounded-bl-2xl hover:bg-blue-00">
                Money received. Thank you so much, Julieta. ¡Happy christmas!.
              </p>
              <span className="text-gray-400 text-xs flex justify-end">24/12/2022, 14:05</span>
            </div>
          </div>
          {/* Sent message area */}
          <form className="absolute bg-gray-200 w-full bottom-0 left-0 p-6">
            <div className="relative">
              <RiSendPlaneLine className="absolute right-4 top-1/2 -translate-y-1/2 text-lg hover:cursor-pointer" />
              <input
                type="text"
                className="bg-white w-full outline-none py-2 pl-6 pr-10 rounded-full"
                placeholder="Write a message here..."
              />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default App;
