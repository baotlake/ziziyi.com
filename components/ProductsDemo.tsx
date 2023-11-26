"use client";

import { useState, useEffect, useRef } from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import PtSvg from "@/public/svg/pt.svg";
import DeepReadingSvg from "@/public/svg/deep_reading.svg";
import PhoneMockupSvg from "@/public/svg/phone_mockup.svg";

const cx = classNames.bind({});

const products = [
  {
    id: "pt",
    logo: <PtSvg className="w-11 h-11 rounded-full" />,
    url: "https://pt.ziziyi.com"
  },
  {
    id: "deep-reading",
    logo: <DeepReadingSvg className="w-11 h-11" />,
    // url: "https://qing.ziziyi.com",
    url: ""
  }
];

export default function ProductsDemo() {
  const [id, setId] = useState(products[0].id);
  const i = products.findIndex((p) => p.id === id);

  return (
    <div className="flex flex-col">
      <div className="overflow-hidden mx-auto rounded-full border-[5px] border-indigo-500">
        <ul className={cx("relative flex items-center py-3 m-1")}>
          {products.map((p) => (
            <li
              key={p.id}
              className="w-28 flex justify-center z-10 cursor-pointer"
              onClick={() => setId(p.id)}
            >
              {p.logo}
            </li>
          ))}

          <div
            style={{
              transform: `translateX(${i * 100}%)`
            }}
            className={cx(
              "absolute left-0 w-28 h-full bg-indigo-200 rounded-full transition"
            )}
          />
        </ul>
      </div>

      <div className="flex gap-5">
        <div className="relative w-[380px] mx-auto my-12">
          <div className="absolute top-0 left-0 w-full h-full box-border overflow-hidden py-[2.6%] pl-[5%] pr-[5%]">
            <iframe
              key={products[i].url}
              className="w-full h-full rounded-[10px]"
              src={products[i].url}
            />
            {!products[i].url && (
              <Link
                className="absolute top-[50%] left-0 w-full text-center text-3xl text-blue-500"
                href="https://qing.ziziyi.com"
              >
                新页面打开
              </Link>
            )}
          </div>
          <PhoneMockupSvg className="w-full relative z-10 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
