import Image from "next/image";
import Navbar from "./component/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen flex-col  gap-40 px-48 py-24">
        <div className="hero grid grid-cols-2 gap-5">
          <div className="hero-text ">
            <h1 className="text-6xl font-bold mb-5 tracking-wide	 costume-line-height 	 ">
              <span className="text-primary-color 	">Be Kind.</span> <br></br>
              Start From Us.
            </h1>
            <p className="text-xl font-light   mb-5 leading-8 ">
              Lorem donate help people life easier ipsum than heaven granted for
              anyone who trying to
            </p>
            <button
              className="bg-primary-color text-black rounded-lg  font-semibold py-3 px-8 border  mt-5"
              style={{
                borderRadius: "50px",
              }}
            >
              Explore Now
            </button>
          </div>
        </div>
        <div className="grid grid-cols-5  justify-items-center items-center ">
          <Image src="/sponsor1.png" alt="logo" width={91} height={30} />
          <Image src="/sponsor2.png" alt="logo" width={91} height={30} />
          <Image src="/sponsor3.png" alt="logo" width={91} height={30} />
          <Image src="/sponsor4.png" alt="logo" width={91} height={30} />
          <Image src="/sponsor5.png" alt="logo" width={91} height={30} />
        </div>

        <div>
          <h2 className="text-4xl font-semibold text-center  costume-line-height-header mb-20">
            Open <br></br>{" "}
            <span className="text-primary-color ">Funding Now </span>
          </h2>

          <div className=" grid grid-cols-3 gap-5">
            <div className="bg-white rounded-lg">
              <Image
                src="/dummy.jpg"
                alt="logo"
                width={405}
                height={100}
                className="rounded-t-lg h-60 object-cover"
              />
              <div className="p-5">
                <h3 className="text-2xl mb-4 text-black font-bold">
                  Helping Children
                </h3>
                <p className="text-md font-light mb-5 text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="funding-progress">
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-color">
                    <div
                      style={{ width: "30%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-color"
                    ></div>
                  </div>
                  <div className="flex justify-between text-black">
                    <span>45% </span>
                    <span>$ 30,000</span>
                  </div>
                </div>
                <div className="mt-5">
                  <button
                    className="bg-primary-color text-black rounded-lg  font-semibold py-3 px-8 border  mt-5 w-full"
                    style={{
                      borderRadius: "50px", 
                    }}
                  >
                    Funding now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="progress flex flex-col gap-10 items-center ">
          <h2 className="text-4xl font-semibold text-center  costume-line-height-header mb-20">
            We made <br></br>{" "}
            <span className="text-primary-color ">Big progress</span>
          </h2>
          <div className="grid grid-cols-5 gap-20 text-center ">
            <div className="flex flex-col gap-2">
              <h3 className="text-5xl font-bold text-white ">
                500<span className="text-primary-color">M</span>
              </h3>
              <span className="text-md font-light">Total Causes</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-5xl font-bold text-white ">
                $19<span className="text-primary-color">B</span>
              </h3>
              <span className="text-md font-light">Total Donation</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-5xl font-bold text-white ">
                420<span className="text-primary-color">K</span>
              </h3>
              <span className="text-md font-light">Donator</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-5xl font-bold text-white ">
                3<span className="text-primary-color">K</span>
              </h3>
              <span className="text-md font-light">Global Countries</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-5xl font-bold text-white ">
                113<span className="text-primary-color">K</span>
              </h3>
              <span className="text-md font-light">Global Companies</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 w-full">
            <Image
              src="/dummy1.png"
              alt="logo"
              width={641}
              height={500}
              className="w-full col-span-2 rounded-2xl "
            />

          <div className="w-full flex flex-col gap-6">
            <Image
              src="/dummy.jpg"
              alt="logo"
              width={405}
              height={180}
              className="rounded-xl h-full"
            />
            <Image
              src="/dummy3.png"
              alt="logo"
              width={405}
              height={247.5}
              className="rounded-xl h-full"
            />
          </div>
        </div>
      </main>
    </>
  );
}
