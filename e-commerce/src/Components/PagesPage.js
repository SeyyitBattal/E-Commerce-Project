import { PagesData } from "../Datas/PagesData";

export const PagesPage = () => {
  return (
    <div>
      <div className="flex my-9 ml-48">
        <p className="font-bold">Home</p>
        <img src={PagesData.headerArea.HomeToShop} className="mx-3.5" />
        <p className="text-stone-300 font-bold">Shop</p>
      </div>

      <div className="flex justify-center mx-48">
        <div className="mr-14">
          <img src={PagesData.headerArea.yellowSeatSlider} className="h-full" />
        </div>
        <div className="w-[40rem]">
          <p className="my-3 text-xl ">Floating Phone </p>
          <div className="flex">
            <img src={PagesData.headerArea.fullStar} />
            <img src={PagesData.headerArea.fullStar} className="mx-1.5" />
            <img src={PagesData.headerArea.fullStar} />
            <img src={PagesData.headerArea.fullStar} className="mx-1.5" />
            <img src={PagesData.headerArea.emptyStar} className="mr-3" />
            <label className="text-neutral-500 font-bold">10 Reviews</label>
          </div>
          <p className="mt-5 mb-1.5 text-2xl font-bold text-slate-800 ">
            $1,139.33
          </p>
          <div className="flex">
            <label className="text-neutral-500 font-bold">Availability :</label>
            <p className="ml-1.5 text-sky-500 font-bold">In Stock</p>
          </div>
          <p className="mt-8 text-neutral-500">
            {PagesData.bodyArea.bigParagraph}
          </p>
          <hr className="my-7" />
          <div className="flex">
            <img src={PagesData.headerArea.blueCircle} />
            <img src={PagesData.headerArea.greenCircle} className="mx-3" />
            <img src={PagesData.headerArea.orangeCircle} />
            <img src={PagesData.headerArea.blackCircle} className="mx-3" />
          </div>
          <div className="flex mt-16">
            <img
              src={PagesData.headerArea.selectOptionsButton}
              className="mr-3"
            />
            <img src={PagesData.headerArea.heartButton} />
            <img src={PagesData.headerArea.basketButton} className="mx-3" />
            <img src={PagesData.headerArea.reviewButton} />
          </div>
        </div>
      </div>
      <div className="flex mt-6 ml-48">
        <img src={PagesData.headerArea.chairPicture} className="mr-5" />
        <img src={PagesData.headerArea.yellowSmallPicture} />
      </div>

      <div className="flex">
        <label>Description</label>
        <label>Additional Information</label>
        <label>Reviews</label>
        <label>( 0 )</label>
      </div>
      <hr />

      <div className="flex">
        <div>
          <img src={PagesData.bodyArea.pinkRoom} />
        </div>
        <div>
          <label>{PagesData.bodyArea.title}</label>
          <p>{PagesData.bodyArea.bigParagraph}</p>
          <p>{PagesData.bodyArea.bigParagraph}</p>
          <p>{PagesData.bodyArea.bigParagraph}</p>
        </div>
        <div>
          {PagesData.bodyArea.arrowArray.map((eachArticle, index) => (
            <div className="flex" key={index}>
              <img src={eachArticle.arrowInBody} />
              <label>{eachArticle.text}</label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label>BESTSELLER PRODUCTS</label>
        <hr />
        <div className="flex">
          {PagesData.bodyArea.bestsellerArray.map((bestCard, index) => (
            <div className="flex flex-col" key={index}>
              <img src={bestCard.img} />
              <label>{bestCard.tittle}</label>
              <label>{bestCard.descripton}</label>
              <div className="flex">
                <label>{bestCard.price1}</label>
                <label>{bestCard.price2}</label>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex mx-48 my-24 justify-between">
        <img src={PagesData.footerArea.brands1} className="object-contain" />
        <img src={PagesData.footerArea.brands2} className="object-contain" />
        <img src={PagesData.footerArea.brands3} className="object-contain" />
        <img src={PagesData.footerArea.brands4} className="object-contain" />
        <img src={PagesData.footerArea.brands5} className="object-contain" />
        <img src={PagesData.footerArea.brands6} className="object-contain" />
      </div>
    </div>
  );
};
