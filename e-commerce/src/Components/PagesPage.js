import { PagesData } from "../Datas/PagesData";

export const PagesPage = () => {
  return (
    <div>
      <div className="flex">
        <p className="font-bold">Home</p>
        <img src={PagesData.headerArea.HomeToShop} className="mx-3.5" />
        <p className="text-stone-300 font-bold">Shop</p>
      </div>

      <div className="flex">
        <div>
          <img src={PagesData.headerArea.yellowSeatSlider} />
        </div>
        <div>
          <label>Floating Phone</label>
          <div className="flex">
            <img src={PagesData.headerArea.fullStar} />
            <img src={PagesData.headerArea.fullStar} />
            <img src={PagesData.headerArea.fullStar} />
            <img src={PagesData.headerArea.fullStar} />
            <img src={PagesData.headerArea.emptyStar} />
            <label>10 Reviews</label>
          </div>
          <label>$1,139.33</label>
          <div className="flex">
            <label>Availability : </label>
            <label> In Stock</label>
          </div>
          <p>{PagesData.bodyArea.bigParagraph}</p>
          <hr />
          <div className="flex">
            <img src={PagesData.headerArea.blueCircle} />
            <img src={PagesData.headerArea.greenCircle} />
            <img src={PagesData.headerArea.orangeCircle} />
            <img src={PagesData.headerArea.blackCircle} />
          </div>
          <div className="flex">
            <img src={PagesData.headerArea.selectOptionsButton} />
            <img src={PagesData.headerArea.heartButton} />
            <img src={PagesData.headerArea.basketButton} />
            <img src={PagesData.headerArea.reviewButton} />
          </div>
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
