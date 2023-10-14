import { BlogData } from "../Datas/BlogData";

export const BlogPage = () => {
  return (
    <div className="">
      <div className="flex flex-wrap mx-48 mb-40  justify-center">
        {BlogData.CardsdArray.map((featureCard, index) => (
          <div className="flex-col shadow-xl  mx-8 mt-20 " key={index}>
            <div className="relative">
              <a href="#">
                <img className="rounded-t-lg" src={featureCard.img} alt="" />
              </a>
              <div className="absolute top-7 left-7">
                <img src={featureCard.newOnPicture} />
              </div>
            </div>

            <div className="mx-6 mt-6 mb-9">
              <div className="flex text-neutral-500">
                <p className="text-blue-300">{featureCard.google}</p>
                <p className="mx-4">{featureCard.trending}</p>
                <p>{featureCard.new}</p>
              </div>
              <p className="text-slate-800 font-bold my-2.5 text-2xl max-w-sm">
                {featureCard.tittle}
              </p>
              <p className="w-72 text-neutral-500">{featureCard.descripton}</p>
              <div className="flex text-neutral-500 my-4 justify-between">
                <p>{featureCard.date}</p>
                <p>{featureCard.comments}</p>
              </div>
              <div className="flex">
                <p className="text-neutral-500 font-bold mr-2.5">Learn More</p>
                <img src={featureCard.arrow} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
