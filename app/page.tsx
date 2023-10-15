import HomeHeader from "@/components/HomeHeader";
import Image from "next/image";
import classNames from "classnames/bind";
import ZiziyiSvg from "@/public/svg/ziziyi.svg";
import PtSvg from "@/public/svg/pt.svg";
import DeepReadingSvg from "@/public/svg/deep_reading.svg";
import styles from "./page.module.scss";
import ProductsDemo from "@/components/ProductsDemo";

const cx = classNames.bind(styles);

const ptUrl = "https://pt.ziziyi.com";
const deepReadingUrl = "https://qing.ziziyi.com";

export default function Home() {
  return (
    <div>
      <HomeHeader
        items={[
          {
            label: "元素周期表Pro",
            url: "https://pt.ziziyi.com"
          },
          {
            label: "青轻阅读",
            url: "https://qing.ziziyi.com"
          }
        ]}
      />

      <main>
        <div className="flex flex-col">
          <ZiziyiSvg className="mt-32 mx-auto w-[80%] max-w-3xl" />
          <div className="text-center text-xl mx-auto w-[80%] py-5 mb-20">我们以认真、孜孜不倦的态度，精心打造每一个应用和网页，助推无数梦想翱翔远方。</div>
        </div>

        <div className="flex justify-evenly w-[80%] gap-8 flex-wrap max-w-7xl mx-auto">
          <a className="p-6 max-w-sm border-2 rounded-xl" href={ptUrl}>
            <div className="flex items-center">
              <PtSvg className="w-10 h-10 rounded-full mr-3" />
              <span className="text-2xl font-bold">元素周期表Pro</span>
            </div>
            <div className="text-2xl my-5">
              高颜值的化学元素周期表工具，提供全面的元素属性、图片和百科知识等
            </div>
            <div className="rounded-md overflow-hidden border">
              <img src="/img/pt_1.png" />
            </div>
          </a>

          <a className="p-6 max-w-sm border-2 rounded-xl" href={deepReadingUrl}>
            <div className="flex items-center">
              <DeepReadingSvg className="w-10 h-10 mr-3" />
              <span className="text-2xl font-bold">青轻阅读</span>
            </div>
            <div className="text-2xl my-5">
              轻松阅读英语，秒查词，秒翻译，移动端优先的划词点读翻译工具
            </div>
            <div className="rounded-md overflow-hidden border">
              <img src="/img/deep_reading_1.png" />
            </div>
          </a>
        </div>

        <div className="flex flex-col px-5">
          <div className={cx("healine-1", "text-center mt-32 text-8xl mb-12")}>
            即刻体验
          </div>
          <ProductsDemo />
        </div>

        <div className="py-32"></div>
      </main>
    </div>
  );
}
