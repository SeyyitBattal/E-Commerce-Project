import { Hdata } from "../Datas/Hdata";

export const HomePage = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 object-contain">
        <img src={Hdata.bodyArea.sliderPhoto1} className="slider ml-20 " />
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
      <div className="flex flex-wrap">
        {Hdata.bodyArea.productCarsdArray.map((productCard, index) => (
          <div className="flex-col shadow-2xl text-center" key={index}>
            <a href="#">
              <img class="rounded-t-lg" src={productCard.img} alt="" />
            </a>
            <p>{productCard.tittle}</p>
            <p>{productCard.descripton}</p>
            <div className="flex justify-center">
              <p>{productCard.price1}</p>
              <p>{productCard.price2}</p>
            </div>
            <div className="flex justify-center">
              <img src={productCard.color1} />
              <img src={productCard.color2} />
              <img src={productCard.color3} />
              <img src={productCard.color4} />
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
          <img src={Hdata.bodyArea.parthOfTheNeural} />
        </div>
        <div>
          <p className="h5">SUMMER 2020</p>
          <p>Part of the Neural Universe</p>
          <p>
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex">
            <img src={Hdata.bodyArea.buyNowButton} />
            <img src={Hdata.bodyArea.readMoreButton} />
          </div>
        </div>
      </div>
      <p>Practice Advice</p>
      <p>Featured Posts</p>
      <p>Problems trying to resolve the conflict between</p>
      <p>the two major realms of Classical physics: Newtonian mechanics </p>
      <div className="flex flex-wrap">
        {Hdata.bodyArea.featureCarsdArray.map((featureCard, index) => (
          <div className="flex-col" key={index}>
            <a href="#">
              <img class="rounded-t-lg" src={featureCard.img} alt="" />
            </a>
            <p>{featureCard.tittle}</p>
            <p className="w-48">{featureCard.descripton}</p>
            <div className="flex">
              <p>{featureCard.date}</p>
              <p>{featureCard.comments}</p>
            </div>
            <div className="flex">
              <p>Learn More</p>
              <img src={featureCard.arrow} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
