import { Pdata } from "../Datas/Pdata";

export const ProductsPage = () => {
  return (
    <div>
      <div className="flex flex-wrap ml-48 mr-32 ">
        {Pdata.bodyArea.productCarsdArray.map((productCard, index) => (
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
    </div>
  );
};
