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

export default function Main() {
  return (
    <section className="main2_wrapper">
      <Box1 />
      <div className="main2_grid_item2">
        <p className="m2p1">Accelerate the buying process</p>
        <p className="m2p2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex quae sit
          fugiat laborum repudiandae? Id ab fugiat dolore facilis sapiente?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex quae sit
          fugiat laborum repudiandae? Id ab fugiat dolore facilis sapiente?
        </p>
        <Box2 description="24/7 access to dedicated member experience teams'" />
        <Box2 description="90% digital based. Less paper work!" />
        <Box2 description="No application fees and security deposit " />
        <Box2 description="Full smart home equipment system" />
      </div>
      <Box3 />
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
          <Box4 amenity="Balcony" />
          <Box4 amenity="Parking" />
          <Box4 amenity="Elevator" />
          <Box4 amenity="AC" />
          <Box4 amenity="Garden" />
          <Box4 amenity="Wi-Fi" />
          <Box4 amenity="Doorman" />
          <Box4 amenity="Kitchen" />
          <Box4 amenity="Smoking" />
        </div>
      </div>
      <div className="main2_grid_item5">
        <div className="m2gi5_header">
          <p className="m2gi5_p1">Listings we think you&apos;ll love</p>
          <p className="m2gi5_p2">
            We&apos;ve curated the best properties for you. What you should do
            is just explore the places we serve and connect with one of
            teduhan&apos;s local experts
          </p>
        </div>
        <div className="m2_listings">
          <Box5
            src="/img/condo.jpg"
            alt="A large living room"
            virtual="virtual tour"
            pin="Miami"
            price="$675,000"
            address="12 West 72nd Street Unit 11E Upper West Side Bay"
          />
          <Box5
            src="/img/empty-kitchen.jpg"
            alt="An empty kitchen"
            virtual="virtual tour"
            pin="Greenwich"
            price="$550,000"
            address="170 West 74th Street, Unit 908 Upper West Side Thornidge"
          />
          <Box5
            src="/img/white-lr.jpg"
            alt="A living room"
            pin="Truckee"
            price="$1,095,000"
            address=" 15th Avenue, Unit 3C Greenwich Hammer Street Village"
          />
        </div>
      </div>
    </section>
  );
}

function Box1() {
  return (
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
  );
}
function Box2({ description }) {
  return (
    <ul>
      <li className="m2_list">
        <FaCheck className="fa-check" /> {description}
      </li>
    </ul>
  );
}
function Box3() {
  return (
    <div className="main2_grid_item3">
      <p className="m2gi3_p1">Find amazing properties with the best prices</p>
      <p className="m2gi3_p2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quidem
        a optio, omnis repellendus expedita.
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
  );
}
function Box4({ amenity }) {
  return (
    <div className="m2_price_list_grid">
      <p className="pgli">{amenity}</p>
    </div>
  );
}
function Box5({ src, alt, virtual, pin, price, address }) {
  return (
    <div>
      {/* listing header goes in main */}
      <div className="listing">
        <div className="m2_img_wrapper">
          <Image
            src={src}
            alt={alt}
            width={330}
            height={200}
            className="listing_pic"
          />
          <p className="m2gi5_p3">listed by teduhan</p>
          <p className="m2gi5_p4">{virtual}</p>
        </div>
        <p className="location">
          {' '}
          <FaMapPin /> {pin}
        </p>
        <p className="listprice">{price}</p>
        <p className="address">{address}</p>
        <ul>
          <li>
            <FaBath /> {'3 baths'}
          </li>
          <li> | </li>
          <li>
            <FaBed /> {'6 beds'}
          </li>
          <li> | </li>
          <li>
            <FaRulerHorizontal /> {'7471 Sqft'}
          </li>
        </ul>
      </div>
    </div>
  );
}
