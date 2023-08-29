import { FaBars } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="nav_wrapper">
      <Image
        src="/img/sm-logo-no-bg.png"
        alt="An orange graph with three bars."
        width={85}
        height={75}
        className="nav_logo"
      />
      <p className="nav_logo_p">teduhan</p>
      <nav className="navbar">
        <ul className="navbar_ul">
          <li>
            <Link
              className="nav_links"
              href="">
              buying
            </Link>
          </li>
          <li>
            <Link
              className="nav_links"
              href="">
              renting
            </Link>
          </li>
          <li>
            <Link
              className="nav_links"
              href="">
              selling
            </Link>
          </li>
          <li>
            <Link
              className="nav_links"
              href="">
              agents
            </Link>
          </li>
          <li>
            <Link
              className="nav_links"
              href="">
              developments
            </Link>
          </li>
        </ul>
      </nav>
      <FaBars className="fa-bars" />
      <button className="navbar_btn">register</button>
    </header>
  );
}
