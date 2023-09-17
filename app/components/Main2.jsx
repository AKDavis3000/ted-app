import Link from 'next/link';
import Image from 'next/image';
import {
  FaArrowUp,
  FaCheck,
  FaMapPin,
  FaBed,
  FaBath,
  FaRulerHorizontal,
} from 'react-icons/fa';

export default function Main2() {
  return (
    <section className="main2_wrapper">
      {/* first grid item */}
      <div className="main2_grid_item1">
        <div className="m2_img">
          <Image
            src="/img/ac-resized.jpg"
            alt="A room with a plant, table, and chair."
            width={500}
            height={600}
            className="main2_lr"
          />
        </div>
        <div className="m2_inner_grid1">
          {/* inner first row */}
          <div className="m2_inner_grid_i1">
            <div className="white_space first_row">
              <p></p>
            </div>
            <div className="second_row">
              <p>Renting</p>
            </div>
            <div>
              <p>Buying</p>
            </div>
          </div>
          {/* second row */}
          <div className="m2_inner_grid_i2">
            <div className="step1 first_row">
              <p>1st step</p>
            </div>
            <div className=" second_row">
              <p>Check it</p>
            </div>
            <div className="">
              <p>Check it</p>
            </div>
          </div>
          {/* 3rd row */}
          <div className="m2_inner_grid3">
            <div className="first_row">
              <p>2nd step</p>
            </div>
            <div className="second_row">
              <p>Signed Docs</p>
            </div>
            <div>
              <p>Signed Docs</p>
            </div>
          </div>
          <div className="m2_inner_grid4">
            <div className="first_row">
              <p>3rd step</p>
            </div>
            <div className="second_row">
              <p>Get your keys</p>
            </div>
            <div>
              <p>Get your keys</p>
            </div>
          </div>
        </div>
      </div>
      {/* second grid item */}
      <div className="main2_grid_item2">
        <p className="m2p1">Accelerate the buying process</p>
        <p className="m2p2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex quae sit
          fugiat laborum repudiandae? Id ab fugiat dolore facilis sapiente?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex quae sit
          fugiat laborum repudiandae? Id ab fugiat dolore facilis sapiente?
        </p>
        <p className="m2_list">
          <FaCheck className="fa-check" />
          {'24/7 access to dedicated member experience teams'}
        </p>
        <p className="m2_list">
          <FaCheck className="fa-check" />

          {'90% digital based. Less paper work! '}
        </p>
        <p className="m2_list">
          <FaCheck className="fa-check" />
          {'No application fees and security deposit '}
        </p>
        <p className="m2_list">
          <FaCheck className="fa-check" />
          {'Full smart home equipment system '}
        </p>
      </div>
      {/* 3rd grid item */}
      <div className="main2_grid_item3">
        <p className="m2gi3_p1">Find amazing properties with the best prices</p>
        <p className="m2gi3_p2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          quidem a optio, omnis repellendus expedita.
        </p>
        <button className="m2gi3_btn1">Contact Agent</button>
        <button className="m2gi3_btn2">
          Learn our process <FaArrowUp className="fa-arrow" />
        </button>
        <div className="m2gi3_grid">
          <div>
            <p className="m2gi3_title">270K+</p>
          </div>
          <div>
            <p className="m2gi3_title">100+</p>
          </div>
          <div>
            <p className="m2gi3_title">12M+</p>
          </div>
          <div>
            <p>Number of coverage countries</p>
          </div>
          <div>
            <p>Properties sold by using teduhan</p>
          </div>
          <div>
            <p>Number of teduhan partners</p>
          </div>
        </div>
      </div>
      {/* 4th grid item */}
      <div className="main2_grid_item4">
        <Image
          src="/img/green-seat-kitchen-cropped.jpg"
          alt="A kitchen."
          width={600}
          height={500}
          className="m2_kitchen"
        />
        <div className="m2_price_list">
          <label
            htmlFor="prices"
            className="label">
            Price range
          </label>
          <select
            name="prices"
            className="prices prices1 ">
            <option value="2000">$2000</option>
            <option value="3000">$3000</option>
            <option value="4000">$4000</option>
            <option value="5000">$5000</option>
            <option value="6000">$6000</option>
            <option value="7000">$7000</option>
            <option value="8000">$8000</option>
            <option value="9000">$9000</option>
            <option value="10000">$10000</option>
          </select>
          <select
            name=""
            className="prices prices2">
            <option value="2000">$2000</option>
            <option value="3000">$3000</option>
            <option value="4000">$4000</option>
            <option value="5000">$5000</option>
            <option value="6000">$6000</option>
            <option value="7000">$7000</option>
            <option value="8000">$8000</option>
            <option value="9000">$9000</option>
            <option value="10000">$10000</option>
          </select>
          <p className="amenities">Amenities</p>
          <div className="m2_price_list_grid">
            <p className="plgi plgi1">Balcony</p>
            <p className="plgi plgi2">Parking</p>
            <p className="plgi plgi3">Elevator</p>
            <p className="plgi plgi4">AC</p>
            <p className="plgi plgi5">Garden</p>
            <p className="plgi plgi6">Wi-Fi</p>
            <p className="plgi plgi7">Doorman</p>
            <p className="plgi plgi8">Kitchen</p>
            <p className="plgi plgi9">Smoking</p>
          </div>
        </div>
      </div>
      {/* 5th grid item */}
      <div className="main2_grid_item5">
        <div className="m2gi5_header">
          <p className="m2gi5_p1">Listings we think you&apos;ll love</p>
          <p className="m2gi5_p2">
            We&apos;ve curated the best properties for you. What you should do
            is just explore the places we serve and connect with one of
            teduhan&apos;s local experts
          </p>
        </div>
        {/* grid */}
        <div className="m2_listings">
          <div className=" listing1">
            <div className="m2_img_wrapper">
              <Image
                src="/img/condo.jpg"
                alt="A large living room."
                width={330}
                height={200}
                className="listing_pic"
              />
              <p className="m2gi5_p3">listed by teduhan</p>
              <p className="m2gi5_p4">virtual tour</p>
            </div>
            <p className="location">
              <FaMapPin />
              {'Miami'}
            </p>
            <p className="listprice">$675,000</p>

            <p className="address">
              12 West 72nd Street Unit 11E Upper West Side Bay
            </p>
            <ul className="address_ul">
              <li className="">
                <FaBath className="" /> 3 baths
              </li>
              <li>|</li>
              <li className="">
                <FaBed className="" /> 6 beds
              </li>
              <li>|</li>
              <li className="">
                <FaRulerHorizontal className="" /> 7471 Sqft
              </li>
            </ul>
          </div>
          <div className=" listing2">
            <div className="m2_img_wrapper">
              <Image
                src="/img/empty-kitchen.jpg"
                alt="An empty kitchen"
                width={330}
                height={200}
                className="listing_pic"
              />
              <p className="m2gi5_p3">listed by teduhan</p>
              <p className="m2gi5_p4">virtual tour</p>
            </div>
            <p className="location">
              <FaMapPin />
              {'Greenwich'}
            </p>
            <p className="listprice">$550,000</p>

            <p className="address">
              170 West 74th Street, Unit 908 Upper West Side Thornidge
            </p>
            <ul className="address_ul">
              <li className="">
                <FaBath className="" /> 3 baths
              </li>
              <li>|</li>
              <li className="">
                <FaBed className="" /> 6 beds
              </li>
              <li>|</li>
              <li className="">
                <FaRulerHorizontal className="" /> 7471 Sqft
              </li>
            </ul>
          </div>
          <div className=" listing3">
            <div className="m2_img_wrapper">
              <Image
                src="/img/white-lr.jpg"
                alt="A living room"
                width={330}
                height={200}
                className="listing_pic"
              />
              <p className=" m2gi5_p3">listed by teduhan</p>
            </div>
            <p className="location">
              <FaMapPin />
              {'Truckee '}
            </p>
            <p className="listprice">$1,095,000</p>

            <p className="address">
              15th Avenue, Unit 3C Greenwich Hammer Street Village
            </p>
            <ul className="address_ul">
              <li className="">
                <FaBath className="" /> 3 baths
              </li>
              <li>|</li>
              <li className="">
                <FaBed className="" /> 6 beds
              </li>
              <li>|</li>
              <li className="">
                <FaRulerHorizontal className="" /> 7471 Sqft
              </li>
            </ul>
          </div>
        </div>
        <div className="m2gi5_btn_wrapper ">
          <button className="m2gi5_btn">
            See all listings
            <FaArrowUp className="fa-arrowUp" />
          </button>
        </div>
      </div>
    </section>
  );
}
