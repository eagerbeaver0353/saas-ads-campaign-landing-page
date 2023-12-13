import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import NavigationList from "../components/Navigation";
import "./header.less"

export default function Header(props) {
  return (
    <header {...props} className="flex pl-28 pr-28 h-28 items bg-none">
      <a className="logo-wrapper flex items-center" href="/" target="_self">
        <i className="logo" />
      </a>
      <div className="m-auto flex items-center">
        <NavigationList />
      </div>
      <div className="button  flex items-center">
        <Button className="text-black bg-none border-0 w-32 h-12 rounded-[10px] hover:bg-transparent"> Sign in</Button>
        <Button className="text-white ml-3 w-32 h-12 rounded-[10px] bg-[#06226B] hover:bg-WHITE hover:text-[#06226B]"> Start Free</Button>
      </div>
    </header >
  );
}
