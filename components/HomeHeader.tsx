import classNames from "classnames/bind";
import styles from "./homeHeader.module.scss";
import Link from "next/link";

const cx = classNames.bind(styles);

type Item = {
  label: string;
  url: string;
};

type Props = {
  items: Item[];
};

export default function HomeHeader({ items }: Props) {
  return (
    <header className={cx("header", "flex items-center h-16 px-10")}>
      <ul className={cx("menu", "flex mr-auto gap-5")}>
        <li>
          <Link href="/">
            <div className={cx("logo", "text-xl font-bold select-none")}>
              ZIZIYI
            </div>
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.url}>
            <Link href={item.url}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <ul>
        <li></li>
      </ul>
    </header>
  );
}
