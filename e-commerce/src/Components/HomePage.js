import { Hdata } from "../Datas/Hdata";

export const HomePage = () => {
  return (
    <div>
      *** ORNEK
      <body class="p-10">
        <div class="relative w-[500px]">
          <img src="https://www.kindacode.com/wp-content/uploads/2022/06/big-boss.jpeg" />
          <div class="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
            <h3 class="text-xl text-white font-bold">Hey, I Am The Big Boss</h3>
            <p class="mt-2 text-sm text-gray-300">
              Some description text. Some dummy text here. Welcome to
              KindaCode.com
            </p>
          </div>
        </div>
      </body>
      *** ORNEK
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 object-contain relative">
        <img src={Hdata.bodyArea.sliderPhoto1} className="slider ml-20 " />
        <div class="absolute text-white top-48 left-48">
          <p className="font-bold ">SUMMER 2020</p>
          <p class="my-9 font-bold text-7xl ">NEW COLLECTION</p>
          <p class="text-2xl w-96  ">
            We know how large objects will act, but things on a small scale.
          </p>
          <img src={Hdata.bodyArea.shopNowButton} className="mt-9" />
        </div>
      </div>
      <p className="text-slate-800 text-2xl font-bold text-center mt-20">
        EDITOR’S PICK
      </p>
      <p className="text-neutral-500 text-center mt-2.5 mb-12">
        Problems trying to resolve the conflict between
      </p>
      <div className="flex mx-48">
        <img src={Hdata.bodyArea.editorPicMan} />
        <img src={Hdata.bodyArea.editorPicWoman} className="mx-7" />
        <div>
          <img src={Hdata.bodyArea.editorPicAccessories} className="mb-4" />
          <img src={Hdata.bodyArea.editorPicKids} />
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
      <div className="flex flex-wrap ml-48 mr-32 ">
        {Hdata.bodyArea.productCarsdArray.map((productCard, index) => (
          <div
            className="flex-col shadow-xl text-center mx-4 mb-20"
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
      <div className="flex bg-color bg-emerald-700">
        <div>
          <p className="h5">SUMMER 2020</p>
          <p>Vita Classic Product</p>
          <p>
            We know how large objects will act, We know how are objects will
            act, We know
          </p>
          <div className="flex">
            <p>$16.48</p>
            <img src={Hdata.bodyArea.addToCardButton} />
          </div>
        </div>
        <div>
          <img src={Hdata.bodyArea.sliderPhoto2} />
        </div>
      </div>
      <div className="flex ">
        <div>
          <img src={Hdata.bodyArea.parthOfTheNeural} className="ml-28 mr-28" />
        </div>
        <div className="max-w-xs mt-44">
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
          the two major realms of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
      <div className="flex flex-wrap mx-48">
        {Hdata.bodyArea.featureCarsdArray.map((featureCard, index) => (
          <div className="flex-col shadow-xl mx-3 " key={index}>
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
