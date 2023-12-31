import { FaArrowUp, FaBell, FaCheck } from 'react-icons/fa';
import Image from 'next/image';

export default function Main3() {
  return (
    <section className="main3_wrapper">
      <div className="m3gi1">
        <Image
          src="/img/phone-no-bg.png"
          alt="an iphone with a picture of a living room"
          width={500}
          height={500}
          className="m3gi1_img"
        />
      </div>
      <div className="m3gi2">
        <p className="m3gi2_p1">
          Sign up for our app and enjoy exclusive access
        </p>
        <p className="m3gi2_p2">
          We also have a mobile app! Download and install our mobile app for
          easier, exclusive access to find your dream property
        </p>
        <ul className="m3gi2_ul">
          <li>
            <FaCheck className="fa-check" /> Real-time notifications for new
            offers
          </li>
          <li className="">
            <FaCheck className="fa-check" /> Complete all transactions using the
            app
          </li>
          <li className="">
            <FaCheck className="fa-check" /> Virtual tour that allows you to
            find a house from anywhere
          </li>
        </ul>
        <div className="m3gi2_img_wrapper">
          <Image
            src="/img/iphone-app-store.png"
            alt="apple store button"
            width={100}
            height={35}
            className="m3gi2_img1"
          />
          <Image
            src="/img/google-play-badge.png"
            alt="google store button"
            width={110}
            height={40}
            className="m3gi2_img2"
          />
        </div>
      </div>
      <div className="m3gi3">
        <div className="">
          <p className="m3gi3_p1">Latest blog posts</p>
          <p className="m3gi3_p2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            in minima ex veniam mollitia magni.
          </p>
          <button className="m3gi3_btn">View all posts</button>
        </div>
        <div className="m3gi3_articles">
          <div className="article article1">
            <div className="m3gi3_img_wrapper">
              <Image
                src="/img/living.jpg"
                alt="a living room"
                width={290}
                height={200}
                className="m3gi3_img img1"
              />
            </div>
            <p className="m3gi3_p3">Insight</p>
            <p className="m3gi3_p4">
              The ultimate checklist you need for buying a property
            </p>
            <div className="authors">
              <Image
                src="/img/man11.jpg"
                alt="a smiling man"
                width={40}
                height={40}
                className="m3gi3_img author1_img"
              />

              <p className="m3gi3_p5">Maverick Vinales</p>
              <p className="m3gi3_p6">Aug 21,2022</p>
            </div>
          </div>
          <div className="article article2">
            <div className="m3gi3_img_wrapper">
              <Image
                src="/img/tipsntrick.jpg"
                alt="people shaking hands"
                width={290}
                height={200}
                className="m3gi3_img img3"
              />
            </div>

            <p className="m3gi3_p3">Tips n tricks</p>
            <p className="m3gi3_p4">
              Must know! How to collaborate with real estate agents
            </p>
            <div className="authors">
              <Image
                src="/img/man22.jpg"
                alt="a smiling man"
                width={40}
                height={40}
                className="m3gi3_img author2_img"
              />

              <p className="m3gi3_p5">Jonah Liamsworth</p>
              <p className="m3gi3_p6">Oct 26, 2022</p>
            </div>
          </div>
          <div className="article article3">
            <div className="m3gi3_img_wrapper ">
              <Image
                src="/img/brown-kitchen.jpg"
                alt="A kitchen"
                width={290}
                height={200}
                className="m3gi3_img img5"
              />
            </div>
            <p className="m3gi3_p3">Interior</p>
            <p className="m3gi3_p4">
              The top 11 most magnificent houses around the world
            </p>
            <div className="authors">
              <Image
                src="/img/woman1.jpg"
                alt="a smiling woman"
                width={40}
                height={40}
                className="m3gi3_img author3_img"
              />

              <p className="m3gi3_p5">Lyoda Matchenko</p>
              <p className="m3gi3_p6">Jul 02, 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
