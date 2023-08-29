import { FaArrowUp, FaBell, FaCheck } from 'react-icons/fa';
import Image from 'next/image';

export default function Main3() {
  return (
    <section className="grid auto-rows-[1fr, 2fr] grid-cols-2 gap-5 p-5">
      {/* 1st grid item */}
      <div>
        <Image
          src="/phone-no-bg.png"
          alt="an iphone with a picture of a living room"
          width={500}
          height={500}
        />
      </div>
      {/* second grid item */}
      <div className="w-2/3 mt-10">
        <p className="text-3xl mb-5">
          Sign up for our app and enjoy exclusive access
        </p>
        <p>
          We also have a mobile app! Download and install our mobile app for
          easier, exclusive access to find your dream property
        </p>
        <ul>
          <li className="my-3">
            <FaCheck className="inline-block text-green-400 mr-1" /> Real-time
            notifications for new offers
          </li>
          <li className="my-3">
            <FaCheck className="inline-block text-green-400 mr-1" /> Complete
            all transactions using the app
          </li>
          <li className="my-3">
            <FaCheck className="inline-block text-green-400 mr-1" /> Virtual
            tour that allows you to find a house from anywhere
          </li>
        </ul>
        <div className="flex">
          <Image
            src="/iphone-app-store.png"
            alt="apple store button"
            width={100}
            height={20}
          />
          <Image
            src="/google-play-badge.png"
            alt="google store button"
            width={100}
            height={20}
          />
        </div>
      </div>
      {/* 3rd grid item */}
      <div className="col-span-2 p-5">
        <div className="my-5">
          <button className="bg-orange text-white py-3 px-4 rounded-sm float-right">
            View all posts
          </button>
          <p className="text-4xl">Latest blog posts</p>
          <p className="w-2/5 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            in minima ex veniam mollitia magni.
          </p>
        </div>
        {/* all articles */}
        <div className="flex justify-around">
          <div>
            <Image
              src="/living.jpg"
              alt="a living room"
              width={390}
              height={350}
            />
            <p className="my-3 uppercase">Insight</p>
            <p>The ultimate checklist you need for buying a property</p>

            <Image
              src="/man1.jpg"
              alt="a smiling man"
              width={40}
              height={20}
              className="rounded-full aspect-square  mt-10"
            />
            <div className="ml-12 -mt-12">
              <p>Maverick Vinales</p>
              <p>Aug 21,2022</p>
            </div>
          </div>
          <div>
            <Image
              src="/tipsntrick.jpg"
              alt="people shaking hands"
              width={390}
              height={350}
            />
            <p className="my-3 uppercase">Tips n tricks</p>
            <p>Must know! How to collaborate with real estate agents</p>
            <Image
              src="/man2.jpg"
              alt="a smiling man"
              width={40}
              height={20}
              className="rounded-full aspect-square mt-10"
            />
            <div className="ml-12 -mt-12">
              <p>Jonah Liamsworth</p>
              <p>Oct 26, 2022</p>
            </div>
          </div>
          <div>
            <Image
              src="/brown-kitchen.jpg"
              alt="A kitchen"
              width={390}
              height={350}
            />
            <p className="my-3 uppercase">Interior</p>
            <p>The top 11 most magnificent houses around the world</p>
            <Image
              src="/woman.jpg"
              alt="a smiling woman"
              width={40}
              height={20}
              className="rounded-full aspect-square mt-10"
            />
            <div className="ml-12 -mt-12 ">
              <p>Lyoda Matchenko</p>
              <p>Jul 02, 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
