import { Hdata } from "../Datas/Hdata";

export const PageBody = () => {
  return (
    <div>
      <img src={Hdata.bodyArea.sliderPhoto1} />
      <p>EDITOR’S PICK</p>
      <p>Problems trying to resolve the conflict between</p>
      BURAYA FOTOLAR
      <p>Featured Products</p>
      <p>BESTSELLER PRODUCTS</p>
      <p>Problems trying to resolve the conflict between</p>
      ********
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {Hdata.bodyArea.productCarsdArray.map((productCard, index) => {
          <div key={index}>
            <a href="#">
              <img class="rounded-t-lg" src={productCard.img} alt="" />
            </a>
            <p>{productCard.tittle}</p>
            <p>{productCard.descripton}</p>
            <div>
              <p>{productCard.price1}</p>
              <p>{productCard.price2}</p>
            </div>
            <div>
              <p>{productCard.color1}</p>
              <p>{productCard.color2}</p>
              <p>{productCard.color3}</p>
              <p>{productCard.color4}</p>
            </div>
          </div>;
        })}
      </div>
      <p>Practice Advice</p>
      <p>Featured Posts</p>
      <p>Problems trying to resolve the conflict between</p>
      <p>the two major realms of Classical physics: Newtonian mechanics </p>3
      TANE CARD
    </div>
  );
};
