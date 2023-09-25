import { Hdata } from "../Datas/Hdata";

export const PageBody = () => {
  return (
    <div>
      <img src={Hdata.bodyArea.sliderPhoto1} />
      <p>EDITOR’S PICK</p>
      <p>Problems trying to resolve the conflict between</p>
      <div className="flex">
        <img src={Hdata.bodyArea.editorPicMan} />
        <img src={Hdata.bodyArea.editorPicWoman} />
        <div>
          <img src={Hdata.bodyArea.editorPicAccessories} />
          <img src={Hdata.bodyArea.editorPicKids} />
        </div>
      </div>
      <p>Featured Products</p>
      <p>BESTSELLER PRODUCTS</p>
      <p>Problems trying to resolve the conflict between</p>
      <div className="flex flex-wrap">
        {Hdata.bodyArea.productCarsdArray.map((productCard, index) => (
          <div className="flex-col text-center" key={index}>
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
      YAZI + FOTO ALAN
      <p>Practice Advice</p>
      <p>Featured Posts</p>
      <p>Problems trying to resolve the conflict between</p>
      <p>the two major realms of Classical physics: Newtonian mechanics </p>3
      TANE CARD
    </div>
  );
};
