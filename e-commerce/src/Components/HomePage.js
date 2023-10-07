import { Hdata } from "../Datas/Hdata";

export const HomePage = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full ">
          <div className="bg-gradient-to-r from-cyan-500 to-cyan-500 object-contain relative ">
            <div className="flex mx-auto justify-end ">
              <img
                src={Hdata.bodyArea.sliderPhoto1}
                className="slider ml-20 "
              />
            </div>
            <div class="absolute text-slate-800 md:top-48 top-0  left-0 md:left-48">
              <p className="font-bold ">SUMMER 2020</p>
              <p class="my-9 font-bold text-7xl ">NEW COLLECTION</p>
              <p class="text-2xl w-96  ">
                We know how large objects will act, but things on a small scale.
              </p>
              <img src={Hdata.bodyArea.shopNowButton} className="mt-9" />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-circle text-black hover:text-white bg-transparent"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle text-black hover:text-white bg-transparent"
            >
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <div className="bg-gradient-to-r from-cyan-500 to-cyan-500 object-contain relative">
            <div className="flex mx-auto justify-end">
              <img
                src={Hdata.bodyArea.sliderPhoto1}
                className="slider ml-20 "
              />
            </div>
            <div class="desktop-only absolute text-white md:top-48 top-0 left-0 md:left-48 h-5 md:h-auto w-5 md:w-auto">
              <p className="font-bold ">SUMMER 2020</p>
              <p class="my-9 font-bold text-7xl ">NEW COLLECTION</p>
              <p class="desktop-only text-2xl w-96 ">
                We know how large objects will act, but things on a small scale.
              </p>
              <img
                src={Hdata.bodyArea.shopNowButton}
                className="desktop-only mt-9 "
              />
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle text-black hover:text-white bg-transparent"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle text-black hover:text-white bg-transparent"
            >
              ❯
            </a>
          </div>
        </div>
      </div>

      <p className="text-slate-800 text-2xl font-bold text-center mt-20">
        EDITOR’S PICK
      </p>
      <p className="text-neutral-500 text-center mt-2.5 mb-12">
        Problems trying to resolve the conflict between
      </p>
      <div className="flex flex-wrap mx-auto justify-center">
        <body className="flex flex-wrap ">
          <div class="flex relative w-[300px] h-[350px] md:w-[500px] md:h-auto mx-auto justify-center">
            <img src={Hdata.bodyArea.editorPicMan} />
            <div class="absolute bottom-7 left-7">
              <img src={Hdata.bodyArea.menText} />
            </div>
          </div>

          <div className="flex relative w-[300px] h-[350px] md:w-[235px] md:h-auto mx-auto justify-center md:mx-8 mt-8 md:mt-auto">
            <img
              src={Hdata.bodyArea.editorPicWoman}
              className=" md:w-auto w-[14rem]"
            />
            <div class="absolute bottom-7 left-7">
              <img src={Hdata.bodyArea.womenText} />
            </div>
          </div>
        </body>
        <div className="mt-8 md:mt-0">
          <div class="relative w-[235px] mb-4 ">
            <img src={Hdata.bodyArea.editorPicAccessories} />
            <div class="absolute bottom-7 left-7">
              <img src={Hdata.bodyArea.accessoriesText} />
            </div>
          </div>
          <div class="relative w-[235px]  mt:8 md:mt-0">
            <img src={Hdata.bodyArea.editorPicKids} />
            <div class="absolute bottom-7 left-7">
              <img src={Hdata.bodyArea.kidsText} />
            </div>
          </div>
        </div>
      </div>
      <p className="text-neutral-500 text-xl text-center mt-40">
        Featured Products
      </p>
      <p className="text-slate-800 text-2xl font-bold text-center mt-2.5">
        BESTSELLER PRODUCTS
      </p>
      <p className="text-neutral-500 text-center mt-2.5 mb-12">
        Problems trying to resolve the conflict between
      </p>
      <div className="flex flex-wrap mx-auto justify-center ml-48 mr-48 ">
        {Hdata.bodyArea.productCarsdArray.map((productCard, index) => (
          <div
            className="flex flex-col shadow-xl text-center mx-4 mb-20 min-w-max "
            key={index}
          >
            <a href="#">
              <img class="rounded-t-lg" src={productCard.img} alt="" />
            </a>
            <div className="mt-6 mb-9">
              <p className="font-bold ">{productCard.tittle}</p>
              <p className="text-neutral-500">{productCard.descripton}</p>
              <div className="flex justify-center font-bold">
                <p className="text-stone-300 font-bold mr-2">
                  {productCard.price1}
                </p>
                <p className="text-teal-700 font-bold">{productCard.price2}</p>
              </div>
              <div className="flex justify-center">
                <img src={productCard.color1} className="mx-1" />
                <img src={productCard.color2} className="mx-1" />
                <img src={productCard.color3} className="mx-1" />
                <img src={productCard.color4} className="mx-1" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex bg-color bg-emerald-700 pt-28">
        <div className=" object-contain relative ml-0 md:ml-52">
          <div className="absolute text-white top-20 left-20">
            <p>SUMMER 2020</p>
            <p class="my-9 font-bold text-7xl ">Vita Classic Prouduct</p>
            <p class="text-xl w-96  ">
              We know how large objects will act, We know how are objects will
              act, We know
            </p>
            <div className="flex mt-9">
              <p className="text-2xl font-bold mt-2 mr-9">$16.48</p>
              <img src={Hdata.bodyArea.addToCardButton} className="" />
            </div>
          </div>
        </div>
        <div className=" mr:0 md:mr-52 ml-auto mt-[30rem] md:mt-0">
          <img src={Hdata.bodyArea.sliderPhoto2} className=" max-w-full " />
        </div>
      </div>

      <div className="flex flex-wrap mx-auto justify-center">
        <div>
          <img src={Hdata.bodyArea.parthOfTheNeural} className="mr-28 mt-48" />
        </div>
        <div className="max-w-xs mt-12 mb-48 md:mt-44">
          <p className=" text-stone-300 mb-8">SUMMER 2020</p>
          <p className="text-4xl font-bold text-slate-800 ">
            Part of the Neural Universe
          </p>
          <p className="text-xl text-neutral-500 my-8">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex">
            <img src={Hdata.bodyArea.buyNowButton} className="mr-2" />
            <img src={Hdata.bodyArea.readMoreButton} />
          </div>
        </div>
      </div>
      <div className="mt-28 mb-20 text-center">
        <p className="text-sky-500 font-bold">Practice Advice</p>
        <p className="text-slate-800 text-5xl font-bold my-2">Featured Posts</p>
        <p className="text-neutral-500">
          Problems trying to resolve the conflict between
        </p>
        <p className="text-neutral-500 ">
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex flex-wrap mb-40 mx-auto justify-center">
        {Hdata.bodyArea.featureCarsdArray.map((featureCard, index) => (
          <div className="flex-col shadow-xl mx-3 mt-12 md:mt-0" key={index}>
            <a href="#">
              <img class="rounded-t-lg" src={featureCard.img} alt="" />
            </a>

            <div className="mx-6 mt-6 mb-9">
              <div className="flex text-neutral-500">
                <p className="text-blue-300">{featureCard.google}</p>
                <p className="mx-4">{featureCard.trending}</p>
                <p>{featureCard.new}</p>
              </div>
              <p className="text-slate-800 font-bold my-2.5">
                {featureCard.tittle}
              </p>
              <p className="w-72 text-neutral-500">{featureCard.descripton}</p>
              <div className="flex text-neutral-500 my-4 justify-between">
                <p>{featureCard.date}</p>
                <p>{featureCard.comments}</p>
              </div>
              <div className="flex">
                <p className="text-neutral-500 font-bold mr-2.5">Learn More</p>
                <img src={featureCard.arrow} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
