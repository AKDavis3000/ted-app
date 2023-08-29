import Image from 'next/image';
import { FaFacebook, FaYoutube, FaPhoneVolume } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer_wrapper">
      <div className="grid_item item-1">
        <p className="text">Newsletter</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, id.
          Iusto beatae vitae velit sit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <div>
          <form
            action=""
            className="footer_form">
            <input
              type="text"
              placeholder="Enter your email"
            />
            <button className="footer_btn">Submit</button>
          </form>
        </div>
      </div>

      <div className="grid_item item-2">
        <Image
          src="/img/sm-logo-no-bg.png"
          alt="An orange graph with three bars."
          width={40}
          height={45}
          className="footer_logo"
        />
        <p className="logo_p">teduhan</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est rem
          consequatur omnis sint ipsum, sequi laboriosam non aut atque dolore in
          consectetur saepe obcaecati ab, voluptatem provident molestias
          laboriosam veniam earum error, aliquam iusto nulla, minima fugit rerum
          quam et mollitia voluptatem vel...
          <span className="read_more">Read More</span>
        </p>
        <div className="footer_icons">
          <FaFacebook className="fa fa-fb" />
          <FaYoutube className="fa fa-yt" />
          <FaPhoneVolume className="fa fa-pv" />
        </div>
      </div>

      <div className="grid_item item-3">
        <ul className="footer_ul">
          <li> About</li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Jobs</li>
          <li>In Press</li>
        </ul>
        <ul className="footer_ul">
          <li>Support</li>
          <li>Contact Us</li>
          <li>Online Chat</li>
          <li>WhatsApp</li>
          <li>Telegram</li>
          <li>Ticketing</li>
        </ul>
        <ul className="footer_ul">
          <li> FAQ</li>
          <li>Account</li>
          <li>Manage Deliveries</li>
          <li>Orders</li>
          <li>Payments</li>
          <li>Returns</li>
        </ul>
      </div>
      <div className="grid_item item-4">
        <p> &copy; 2000-2023 Firman Jabbar, All Rights Reserved</p>
      </div>
    </footer>
  );
}
