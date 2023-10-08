import { PagesData } from "../Datas/PagesData";

export const PagesPage = () => {
  return (
    <div>
      <div className="flex my-20 md:my-9 ml-48">
        <p className="font-bold text-slate-800">Home</p>
        <img src={PagesData.headerArea.HomeToShop} className="mx-3.5" />
        <p className="text-stone-300 font-bold">Shop</p>
      </div>

      <div className="flex  md:flex-none flex-wrap justify-center ">
        <div className="mr-14">
          <img
            src={PagesData.headerArea.yellowSeatSlider}
            className=" min-h-[20rem] min-w-[20rem] md:ml-0 ml-6 flex justify-center"
          />
        </div>
        <div className="w-[40rem] md:mx-0 mx-12">
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
      <div className="flex mt-6 ml-48 desktop-only">
        <img src={PagesData.headerArea.chairPicture} className="mr-5" />
        <img src={PagesData.headerArea.yellowSmallPicture} />
      </div>

      <div className="flex mt-48 md:mt-20 mb-6 mx-auto justify-center ">
        <label className="mx-4 text-neutral-500 font-bold">Description</label>
        <label className="mx-4 text-neutral-500 font-bold">
          Additional Information
        </label>
        <label className="ml-4 mr-2 text-neutral-500 font-bold">Reviews</label>
        <label className="text-teal-700 font-bold">( 0 )</label>
      </div>
      <hr className="mx-48" />

      <div className="flex flex-wrap mt-12 mx-auto justify-center">
        <div>
          <img
            src={PagesData.bodyArea.pinkRoom}
            className="w-[20rem] h-[24rem]"
          />
        </div>
        <div className="w-[20rem] mx-8 md:mt-0 mt-12">
          <p className="text-2xl font-bold mb-8 text-slate-800">
            {PagesData.bodyArea.title}
          </p>
          <p className="text-neutral-500 ">{PagesData.bodyArea.bigParagraph}</p>
          <p className="text-neutral-500 my-4">
            {PagesData.bodyArea.bigParagraph}
          </p>
          <p className="text-neutral-500 ">{PagesData.bodyArea.bigParagraph}</p>
        </div>
        <div>
          <div className="md:mt-0 mt-16">
            <p className="text-2xl font-bold mb-8 text-slate-800 ">
              {PagesData.bodyArea.title}
            </p>
            {PagesData.bodyArea.arrowArray.map((eachArticle, index) => (
              <div className="flex text-neutral-500 mb-2" key={index}>
                <img src={eachArticle.arrowInBody} className="mr-5" />
                <label className="font-bold">{eachArticle.text}</label>
              </div>
            ))}
          </div>
          <div>
            <p className="text-2xl font-bold mb-8 mt-8 text-slate-800">
              {PagesData.bodyArea.title}
            </p>
            {PagesData.bodyArea.arrowArray.map((eachArticle, index) => (
              <div className="flex text-neutral-500 mb-2 min-w-max" key={index}>
                <img src={eachArticle.arrowInBody} className="mr-5" />
                <label className="font-bold">{eachArticle.text}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:mx-48 mx-0">
        <p className="text-2xl font-bold text-slate-800 md:ml-12 ml-0 md:mt-12 mt-24  mb-6 md:text-left text-center">
          BESTSELLER PRODUCTS
        </p>
        <hr className="mb-6 mx-12" />
        <div className="flex flex-wrap mx-auto justify-center mt-12 md:mt-0">
          {PagesData.bodyArea.bestsellerArray.map((bestCard, index) => (
            <div
              className="mx-4 mb-8 flex flex-col shadow-xl text-center"
              key={index}
            >
              <img src={bestCard.img} />
              <div className="flex flex-col mx-6 my-6">
                <label className="font-bold">{bestCard.tittle}</label>
                <label className="text-neutral-500 my-2.5">
                  {bestCard.descripton}
                </label>
                <div className="flex font-bold mx-auto justify-center">
                  <p className="text-stone-300 mr-2 text-center">
                    {bestCard.price1}
                  </p>
                  <p className="text-teal-700 text-center">{bestCard.price2}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap mx-48  my-24 md:mx-48 md:my-24 md:justify-between justify-center">
        <img
          src={PagesData.footerArea.brands1}
          className="object-contain mb-12 md:mb-0"
        />
        <img
          src={PagesData.footerArea.brands2}
          className="object-contain mb-12 md:mb-0"
        />
        <img
          src={PagesData.footerArea.brands3}
          className="object-contain mb-12 md:mb-0"
        />
        <img
          src={PagesData.footerArea.brands4}
          className="object-contain mb-12 md:mb-0"
        />
        <img
          src={PagesData.footerArea.brands5}
          className="object-contain mb-12 md:mb-0"
        />
        <img
          src={PagesData.footerArea.brands6}
          className="object-contain mb-12 md:mb-0 "
        />
      </div>
    </div>
  );
};
