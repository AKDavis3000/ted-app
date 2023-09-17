'use client';

import { FaBars } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((prevState) => !prevState);
  }

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
      <FaBars
        className="fa-bars"
        onClick={handleClick}
      />
      <button className="navbar_btn">register</button>
      <nav className={isActive ? 'navbar' : 'navbar  navbar_active'}>
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
    </header>
  );
}
