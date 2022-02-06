import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../logo";
import Searchbar from "../search";
import Button from "../button";
import Icon from "../icon";
import Avatar from "../avatar";
import DefaultUserImg from "../../assets/images/png/defaults/user.png";
import Banner from "../../assets/images/jpg/examples/fakurian-design-2-unsplash.jpg";
import Dropdown from "../avatar/Dropdown";

import { ReactComponent as ExitIcon } from "../../assets/images/svg/icons/xmark.svg";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.position = "fixed";
    }
    return () => {
      document.body.style.position = "static";
    };
  }, [showMenu]);

  return (
    <nav className="w-full h-28 flex justify-center items-center bg-slate-900/75 backdrop-blur fixed px-8 lg:px-16 z-50">
      <div className="w-full flex flex-row justify-between items-center">
        {/* Desktop + Mobile */}
        <Logo />
        {/* Mobile */}
        <div className="lg:hidden flex justify-center items-center">
          <button
            onClick={() => setShowMenu(true)}
            className="!bg-slate-700/50 p-2 rounded-full"
          >
            <Icon name="menu" />
          </button>
          <div
            className={`${
              !showMenu && "hidden"
            } fixed w-screen h-screen top-0 left-0 bg-slate-900/75 backdrop-blur flex flex-col justify-start items-center py-6`}
          >
            <div className="w-full flex flex-row text-slate-300 justify-between items-center px-8">
              <Logo onClick={() => setShowMenu(false)} />
              <button
                onClick={() => setShowMenu(false)}
                className="flex flex-row justify-center items-center gap-4"
              >
                <ExitIcon width="12px" />
                <p className="text-lg font-semibold">Close</p>
              </button>
            </div>
            <Searchbar onSubmit={() => setShowMenu(false)} />
            <Link
              to="/"
              onClick={() => setShowMenu(false)}
              className="w-full bg-slate-700/50 text-white text-lg font-semibold py-6 px-8 hover:bg-slate-700/50"
            >
              <div className="w-full flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-4">
                  <Icon name="home" variation="light" width="1.25rem" />
                  <p>Home</p>
                </div>
                <Icon name="rightArrow" variation="light" width="1.25rem" />
              </div>
            </Link>
            <Link
              to="/profile"
              onClick={() => setShowMenu(false)}
              className="w-full bg-slate-700/50 text-white text-lg font-semibold py-6 px-8"
            >
              <div className="w-full flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-4">
                  <Icon name="dash" variation="light" width="1.25rem" />
                  <p>Profile</p>
                </div>
                <Icon name="rightArrow" variation="light" width="1.25rem" />
              </div>
            </Link>
            <Link
              to="/create"
              onClick={() => setShowMenu(false)}
              className="w-full bg-slate-700/50 text-white text-lg font-semibold py-6 px-8"
            >
              <div className="w-full flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-4">
                  <Icon name="create" variation="light" width="1.25rem" />
                  <p>Create</p>
                </div>
                <Icon name="rightArrow" variation="light" width="1.25rem" />
              </div>
            </Link>
            <Link
              to="/settings/wallet"
              onClick={() => setShowMenu(false)}
              className="w-full bg-violet-700/50 text-white text-lg font-semibold py-6 px-8 mt-5"
            >
              <div className="w-full flex flex-row justify-center items-center">
                <div className="flex flex-row items-center gap-4">
                  <p>Connect Wallet</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* Desktop */}
        <div className="hidden lg:flex flex-row justify-between items-center">
          <Searchbar />
          <div className="flex flex-row justify-center items-start">
            <div className="flex items-center flex-row gap-3 mx-4">
              <Button
                className="w-full lg:w-auto bg-slate-700/50"
                variation={null}
                to="/"
                width="36px"
                rounded="full"
              >
                <Icon variation="primary" name="home" width="18px" />
              </Button>
              <Button
                className="bg-slate-700/50"
                variation={null}
                to="/profile"
                width="36px"
                rounded="full"
              >
                <Icon variation="primary" name="dash" width="18px" />
              </Button>
              <Button
                className="bg-slate-700/50"
                variation={null}
                to="/create"
                width="36px"
                rounded="full"
              >
                <Icon variation="primary" name="create" width="18px" />
              </Button>
              <Avatar src={DefaultUserImg}>
                <Avatar.Dropdown
                  bannerImgSrc={Banner}
                  profileImgSrc={DefaultUserImg}
                  alerts={{ notifications: 2, inbox: 3 }}
                />
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
