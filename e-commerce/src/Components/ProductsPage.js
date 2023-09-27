import { Pdata } from "../Datas/Pdata";

export const ProductsPage = () => {
  return (
    <div>
      <div className="flex justify-between mx-56 mt-12 mb-6">
        <p className="text-slate-800 text-2xl font-bold ">Shop</p>
        <div className="flex">
          <p className="font-bold">Home</p>
          <img src={Pdata.bodyArea.HomeToShop} className="mx-3.5" />
          <p className="text-stone-300 font-bold">Shop</p>
        </div>
      </div>

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
      <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div class="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <nav
              class="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <a
                href="#"
                class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span class="sr-only">Previous</span>
                Firsttttttttt
              </a>

              <a
                href="#"
                aria-current="page"
                class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                1
              </a>
              <a
                href="#"
                class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                2
              </a>
              <a
                href="#"
                class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              >
                3
              </a>

              <a
                href="#"
                class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                Nexttttttttt
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
