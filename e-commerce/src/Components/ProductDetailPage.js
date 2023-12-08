import React, { useEffect, useRef } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { PagesData } from "../Datas/PagesData";
import { Link } from "react-router-dom";

export const ProductDetailPage = () => {
  const { productId } = useParams();
  const history = useHistory();
  const products = useSelector((state) => state.product.productList);
  const productRef = useRef(null);

  useEffect(() => {
    if (productRef.current) {
      productRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [productId]);

  const selectedProduct = products.find(
    (product) => product.id === parseInt(productId)
  );
  if (!selectedProduct) {
    return <p>Product not found</p>;
  }

  const handleBack = () => {
    history.goBack();
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<img key={i} src={PagesData.headerArea.fullStar} />);
    }

    if (hasHalfStar) {
      stars.push(<img key="half" src={PagesData.headerArea.halfStar} />);
    }

    const remainingEmptyStars = 5 - stars.length;
    for (let i = 0; i < remainingEmptyStars; i++) {
      stars.push(
        <img key={`empty-${i}`} src={PagesData.headerArea.emptyStar} />
      );
    }

    return stars;
  };

  const isInStock = selectedProduct.stock > 0;
  const stockStatus = isInStock ? "In Stock" : "Out of Stock";
  const stockColor = isInStock ? "text-blue-500" : "text-red-500";

  return (
    <div>
      <div ref={productRef}>
        <button
          className="my-20 md:my-9 ml-72 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 shadow-xl"
          onClick={handleBack}
        >
          Back
        </button>
        <div className="flex mx-auto flex-wrap justify-center ">
          <div className="mr-14">
            <img
              src={selectedProduct.images[0].url}
              className=" max-h-[30rem] max-w-[30rem] md:ml-0 ml-6 flex justify-center"
            />
          </div>
          <div className="w-[20rem] md:mx-0 mx-12">
            <p className="my-3 text-xl ">{selectedProduct.name}</p>
            <div className="flex">
              {renderStars(selectedProduct.rating)}
              <label className="text-neutral-500 font-bold ml-3">
                ({selectedProduct.rating})
              </label>
            </div>
            <p className="mt-5 mb-1.5 text-2xl font-bold text-slate-800 ">
              {selectedProduct.price.toFixed(2)} ₺
            </p>
            <div className="flex">
              <label className="text-neutral-500 font-bold">
                Availability :
              </label>
              <p
                className={`ml-1.5 font-bold ${
                  isInStock ? "text-blue-500" : "text-red-500"
                }`}
              >
                {stockStatus}
              </p>
            </div>
            <p className="mt-8 text-neutral-500">
              {selectedProduct.description}
            </p>
            <hr className="my-7" />
            <div className="flex">
              <img src={PagesData.headerArea.blueCircle} />
              <img src={PagesData.headerArea.greenCircle} className="mx-3" />
              <img src={PagesData.headerArea.orangeCircle} />
              <img src={PagesData.headerArea.blackCircle} className="mx-3" />
            </div>
            <div className="flex mt-16">
              <button className="px-16 py-4 bg-blue-500 text-white rounded hover:bg-blue-700 shadow-xl">
                Sepete Ekle
              </button>
            </div>
          </div>
        </div>
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
