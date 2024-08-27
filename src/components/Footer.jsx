import { Typography } from "@material-tailwind/react";
import { styles } from "../styles";

export function Footer() {
  return (
    <footer className={`${styles.paddingX} flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between`}>
      <Typography color="blue-gray" className="font-normal">
        &copy; 2024 <a href="https://www.bitx86.tech/">BiTx86</a>
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#about"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#work"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Work
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="https://www.instagram.com/abhinaba.biswas.0001/"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Instagram
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Twitter
          </Typography>
        </li>
      </ul>
    </footer>
  );
}