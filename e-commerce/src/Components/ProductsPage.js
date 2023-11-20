import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/actions/globalActions";
import { fetchProductsActionCreator } from "../store/actions/productActions";
import { Pdata } from "../Datas/Pdata";
import InfiniteScroll from "react-infinite-scroll-component";

export const ProductsPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.global.categories);
  const loading = useSelector((state) => state.product.loading);
  const products = useSelector((state) => state.product.productList);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProductsActionCreator());
  }, [dispatch]);
  const topFive = categories.sort((a, b) => b.rating - a.rating).slice(0, 5);
  if (loading) {
    return <p>Loading...</p>;
  }

  const fetchMoreData = () => {
    const offset = products.length;
    dispatch(fetchProductsActionCreator(offset));
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center md:justify-between mx-44 md:mx-56 mt-24 md:mt-12 mb-6">
        <p className="text-slate-800 text-2xl font-bold ">Shop</p>
        <div className="flex flex-wrap mt-12 md:mt-0">
          <p className="font-bold text-slate-800">Home</p>
          <img src={Pdata.bodyArea.HomeToShop} className="mx-3.5" />
          <p className="text-stone-300 font-bold">Shop</p>
        </div>
      </div>
      <div className="flex flex-wrap mx-auto justify-center ml-48 mr-48 ">
        {topFive.map((category, index) => (
          <a
            href="#"
            className="relative mx-4 min-w-max my-10 hover:shadow-md transform transition-transform duration-100 hover:scale-105"
            key={index}
          >
            <img className="rounded-lg max-h-56" src={category.img} alt="" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
              <div className="p-4 text-white text-center">
                <p className="text-xl font-bold">{category.title}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="flex flex-wrap justify-between  ml-36 mr-24 md:ml-52 md:mr-64 my-4">
        <p className="text-neutral-500 content-end ml-4 md:ml-0 mt-3 font-bold ">
          Showing all 12 results
        </p>
        <div className="flex my-6 md:my-0 ml-4 md:ml-0">
          <p className="text-neutral-500 content-end  mt-3 font-bold">Views:</p>
          <img src={Pdata.headerArea.viewBox} className="mx-3.5" />
          <img src={Pdata.headerArea.viewList} />
        </div>
        <div className="flex">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-black bg-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-white border dark:hover:bg-blue-700 "
            type="button"
          >
            Popularity
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  111
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  222
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  333
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  444
                </a>
              </li>
            </ul>
          </div>

          <img src={Pdata.headerArea.filterButton} className="ml-3.5" />
        </div>
      </div>

      <div className="flex flex-wrap mx-auto justify-center ">
        {Array.isArray(products) && products.length > 0 ? (
          <InfiniteScroll
            dataLength={products.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={<p>No more products to show</p>}
          >
            <div className="flex flex-wrap m-12 justify-center ml-48 mr-48 items-center">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col items-center m-8 shadow-2xl text-center w-64 rounded-lg p-8 hover:shadow-md transform transition-transform duration-300 hover:scale-105"
                >
                  <img
                    className="rounded-lg max-h-56"
                    src={product.images[0].url}
                    alt=""
                  />
                  <p className="text-xl font-bold mt-6 text-zinc-600">
                    {product.name}
                  </p>
                  <p className="text-sm">{product.description}</p>
                  <p className="text-lg font-bold text-green-500">{`$${product.price.toFixed(
                    2
                  )}`}</p>
                </div>
              ))}
            </div>
          </InfiniteScroll>
        ) : (
          <p>No products available.</p>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between border-t border-gray-200 bg-white px-4 py-3 md:mx-0 ">
        <div className="flex mx-auto justify-center">
          <div className=" mt-12 ml-auto mr-auto">
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <a
                href="#"
                className="relative inline-flex items-center rounded-l-md px-6 py-4 text-sky-500 font-bold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                First
              </a>

              <a
                href="#"
                aria-current="page"
                className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-6 text-sm font-semibold text-sky-500 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                2
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-sky-500 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              >
                3
              </a>

              <a
                href="#"
                className="relative inline-flex items-center rounded-r-md px-6 py-4 text-sky-500 font-bold  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                Next
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mx-48  my-24 md:mx-48 md:my-24 md:justify-between justify-center">
        <img
          src={Pdata.footerArea.brands1}
          className="object-contain mb-12 md:mb-0"
        />
        <img
          src={Pdata.footerArea.brands2}
          className="object-contain mb-12 md:mb-0"
        />
        <img
          src={Pdata.footerArea.brands3}
          className="object-contain mb-12 md:mb-0"
        />
        <img
          src={Pdata.footerArea.brands4}
          className="object-contain mb-12 md:mb-0"
        />
        <img
          src={Pdata.footerArea.brands5}
          className="object-contain mb-12 md:mb-0"
        />
        <img
          src={Pdata.footerArea.brands6}
          className="object-contain mb-12 md:mb-0 "
        />
      </div>
    </div>
  );
};
