import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import classnames from "classnames";
import { useWindowScrollMatch } from "../hooks/useWindowScrollMatch";

interface props {}
const Header: FC<props> = () => {
  const router = useRouter();
  const [path, setPath] = useState(router.asPath.split("/")[1]);
  const [posLineItem, setPosLineItem]  = useState({left:0,width:0});
  const match =  useWindowScrollMatch(150);

  useEffect(() => {
    setPath(router.asPath.split("/")[1]);
  }, [router.asPath]);
  useEffect(()=>{
    
    const el = document.getElementById(path ? path : 'trangchu' );
    const leftEl = el?.offsetLeft;
    const widthEl = el?.offsetWidth;


    if(widthEl && leftEl){
      setPosLineItem({
      left:leftEl,
      width:widthEl,
    })
    }
  },[path])
  return (
    <header 
    className={classnames("transition-all duration-500 px-48px flex items-center text-[#ffffff80] py-[5px] fixed w-[100%] z-50", {
      "bg-black": match,
      "bg-[transparent]": !match,

    })}
    
    >
      <Link href="/">
        <a>
          <Image
            width={40}
            height={40}
            src="/logo.jpg"
            layout="intrinsic"
          ></Image>
        </a>
      </Link>


      <ul className="ml-[32px] flex items-center sm:fixed sm:flex-col sm:justify-around sm:inset-0 sm:bg-black sm:ml-0 sm:items-start	">
        <li style={{left: posLineItem.left +'px',width: posLineItem.width +'px',}} className="sm:hidden transition-all absolute  w-[70px] h-[2px] bottom-[10px] bg-[red] block"></li>
        <li
        id="trangchu"
          className={classnames("hover:text-white mr-[24px] sm:text-[20px] sm:h-[100%] sm:w-[100%] sm:border-b-[1px] flex items-center	", {
            "text-white": path === "",
          })}
        >
          <Link href="/">
            <a>Trang chủ</a>
          </Link>
        </li>
        <li
        id="phimmoi"
          className={classnames("hover:text-white mr-[24px] sm:text-[20px] sm:h-[100%] sm:w-[100%] sm:border-b-[1px] flex items-center	", {
            "text-white": path === "phimmoi",
          })}
        >
          <Link href="/phimmoi">
            <a>Phim mới</a>
          </Link>
        </li>
        <li
        id="xuhuong"
          className={classnames("hover:text-white mr-[24px] sm:text-[20px] sm:h-[100%] sm:w-[100%] sm:border-b-[1px] flex items-center	", {
            "text-white": path === "xuhuong",
          })}
        >
          <Link href="/xuhuong">
            <a>Xu hướng</a>
          </Link>
        </li>
        <li
        id="noibat"
          className={classnames("hover:text-white mr-[24px] sm:text-[20px] sm:h-[100%] sm:w-[100%] sm:border-b-[1px] flex items-center	", {
            "text-white": path === "noibat",
          })}
        >
          <Link href="/noibat">
            <a>Nổi bật</a>
          </Link>
        </li>
        <li
        id="hoathinh"
          className={classnames("hover:text-white mr-[24px] sm:text-[20px] sm:h-[100%] sm:w-[100%] sm:border-b-[1px] flex items-center	", {
            "text-white": path === "hoathinh",
          })}
        >
          <Link href="/hoathinh">
            <a>Hoạt hình</a>
          </Link>
        </li>
        <li
        id="phieuluu"
          className={classnames("hover:text-white mr-[24px] sm:text-[20px] sm:h-[100%] sm:w-[100%] sm:border-b-[1px] flex items-center	", {
            "text-white": path === "phieuluu",
          })}
        >
          <Link href="/phieuluu">
            <a>Phiêu lưu</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
