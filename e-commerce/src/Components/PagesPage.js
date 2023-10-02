import { PagesData } from "../Datas/PagesData";

export const PagesPage = () => {
  return (
    <div>
      <div className="flex">
        <p className="font-bold">Home</p>
        <img src={PagesData.headerArea.HomeToShop} className="mx-3.5" />
        <p className="text-stone-300 font-bold">Shop</p>
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
