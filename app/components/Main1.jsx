import Image from 'next/image';
import { FaBuilding, FaHandshake, FaLock, FaHeadset } from 'react-icons/fa';

export default function Main1() {
  return (
    <section className="main1_wrapper">
      {/* grid item 1 */}
      <div className="main1_grid_item1">
        <p className="main1_p p1">
          Curating the best properties that you truly deserve
        </p>
        <p className="main1_p p2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          cupiditate natus sint a ipsa atque mollitia tenetur deleniti soluta
          similique
        </p>
        <form
          action=""
          className="main1_form">
          <label
            htmlFor=""
            className="main1_form_labels buying">
            Buying
          </label>
          <label
            htmlFor=""
            className="main1_form_labels renting">
            Renting
          </label>
          <input
            type="text"
            placeholder="City, Neighborhood, Address"
            className="main1_form_input"
          />
          <button className="main1_form_btn">Book a call</button>
        </form>

        <div className="line"></div>
        <div className="sponsors">
          <p className="main1_p p4">Proudly backed by</p>
          <Image
            src="/img/th.png"
            alt="treehouse logo"
            width={100}
            height={40}
            className="treehouse"
          />
          <Image
            src="/img/dd.png"
            alt="doordash logo"
            width={100}
            height={40}
            className="dd"
          />
          <Image
            src="/img/maze-resized.png"
            alt="maze logo"
            width={75}
            height={12}
            className="maze"
          />
        </div>
      </div>
      {/* grid item 2 */}
      <div className="main1_grid_item2">
        <Image
          src="/img/Main1.png"
          alt="A kitchen."
          width={500}
          height={500}
          className="kitchen"
        />
      </div>
      {/* 3rd grid item */}
      <div className="main1_footer main1_grid_item3">
        <p className="main1_p p3">Your most ideal solutions</p>
        <p className="main1_p p4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          accusantium aut perferendis illo, alias illum.
        </p>
        <div className="main1_footer_sections">
          <div className="section">
            <FaBuilding className=" fa fa-b" />
            <p className="main1_footer_titles">Trusted Developer</p>
            <p className="section_p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              nihil in, illo natus sit repellat.
            </p>
          </div>
          <div className="section">
            <FaHandshake className=" fa fa-h" />
            <p className="main1_footer_titles">Zero Commissions</p>
            <p className="section_p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              rem aliquid tempore nostrum sequi enim!
            </p>
          </div>
          <div className="section">
            <FaHeadset className=" fa fa-hs" />
            <p className="main1_footer_titles">24/7 Dedicated Support</p>
            <p className="section_p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium modi illum unde iusto et error quam maiores omnis
              autem voluptate
            </p>
          </div>
          <div className="section">
            <FaLock className=" fa fa-l" />
            <p className="main1_footer_titles">Safe & Trustworthy</p>
            <p className="section_p">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
              consequuntur obcaecati odit dolores similique necessitatibus?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
