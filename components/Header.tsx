import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineSearch, AiFillBell } from "react-icons/ai";
import useIsScrolled from "../hooks/isScrolled";

function Header() {
  const isScrolled = useIsScrolled();

  const router = useRouter();

  return (
    <header
      className={`${
        isScrolled ? "headerAnimation " : ""
      }space-x-2 md:space-x-10`}
    >
      <div className="relative h-16 w-24">
        <Image
          src="/images/netflix-logo.svg"
          layout="fill"
          // objectFit="cover"
          className="cursor-pointer object-contain"
        />
      </div>

      <nav className="grow">
        <ul className="hidden space-x-4 md:flex">
          <li
            className={`${
              router.pathname == "/" ? "headerActive " : ""
            } headerLink`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`${
              router.pathname == "/tvshows" ? "headerActive " : ""
            } headerLink`}
          >
            <Link href="/tvshows">TV Shows</Link>
          </li>
          <li
            className={`${
              router.pathname == "/movies" ? "headerActive " : ""
            } headerLink`}
          >
            <Link href="/movies">Movies</Link>
          </li>
          <li
            className={`${
              router.pathname == "/latest" ? "headerActive " : ""
            } headerLink`}
          >
            <Link href="/latest">New & Popular</Link>
          </li>
          <li
            className={`${
              router.pathname == "/my-list" ? "headerActive " : ""
            } headerLink`}
          >
            <Link href="/my-list">My List</Link>
          </li>
        </ul>
      </nav>

      <div
        className="flex items-center !space-x-4 text-sm font-light
      "
      >
        <AiOutlineSearch className="hidden sm:inline h-6 w-6" />
        <p className="hidden lg:inline">Kids</p>
        <AiFillBell className="h-6 w-6" />
        <Link href="/account">
          <Image
            width={32}
            height={32}
            objectFit="cover"
            src="/images/user-photo.png"
            alt="user photo"
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
