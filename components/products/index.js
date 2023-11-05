import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Header from "../layout/Header";
import SearchTopbar from "../layout/SearchTopbar";
import { useEffect, React, useState } from "react";
import CategoryService from "../../services/CategoryService";
import Menu from "../layout/Menu";
import Recipes from "./Recipes";
import ProductDetail from "./ProductDetail";
import Loader from "../Loader";
import Image from "next/image";
import { BsCartFill } from "react-icons/bs";

export default function Product({ shopId }) {
  console.log(shopId);
  const [loading, setLoading] = useState(false);

  const [apires, setApires] = useState("");
  const [apicategory, setApiCategory] = useState("");
  const [categoryindex, setcategoryindex] = useState(0);
  const [apicategoryid, setapiCategoryId] = useState("");

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
      slidesToSlide: 8, // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
      slidesToSlide: 8, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
  };
  const responsive1 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
      slidesToSlide: 8, // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 3000, min: 1440 },
      items: 8,
      slidesToSlide: 8, // optional, default to 1.
    },

    tablet: {
      breakpoint: { max: 1024, min: 568 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 569, min: 0 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
  };

  const getCategoryData = (index) => {
    setcategoryindex(index);
    setApiCategory(apires[index].categories);
    setapiCategoryId(apires[index].categories[0].id);
  };

  const getCategory = (shopId) => {
    let Collected_data = "fridge=0&shop_id=" + shopId;
    CategoryService.get(Collected_data)
      .then((response) => {
        setLoading(false);
        setApires(response.data.data);
        setApiCategory(response.data.data[categoryindex].categories);
        setapiCategoryId(response.data.data[categoryindex].categories[0].id);
        // console.log('resssss', response.data.data)
      })
      .catch((e) => {
        console.log("product display error", e);
      });
  };
  const getProductData = (catindex) => {
    setapiCategoryId(apires[categoryindex].categories[catindex].id);
  };

  useEffect(() => {
    setLoading(true);
    getCategory(shopId);
  }, [shopId]);

  return (
    <>
      <Header></Header>
      <Menu />
      <div className="pro side-body">
        {loading && <Loader />}
        <div className="producttop top-head">
          <SearchTopbar />
          <div className="xl:px-16 lg:px-10 p-8 top-head-cat">
            <Carousel
              responsive={responsive}
              // removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
              showDots={false}
              draggable={true}
            >
              {apires.length > 0 &&
                apires.map((result, index) => {
                  // console.log("RRR", result);
                  return (
                    <div
                      className={`${
                        result.categories[0].id === apicategoryid
                          ? "border-2 border-[#f7d594]"
                          : ""
                      } block py-4 px-3 bg-white mx- space-y-4 mx-2`}
                      key={index}
                      onClick={() => {
                        getCategoryData(index);
                      }}
                    >
                      <div className="flex flex-col items-center justify-center">
                        <div>
                          <Image
                            src={result?.gallery.thumbnail} //{result.gallery.thumbnail}
                            className="object-cover rounded-full h-32 w-32"
                            alt=""
                            height={150}
                            width={150}
                          />
                        </div>

                        <div className="mt-3">
                          <h3 className="font-medium text-lg text-gray-900">
                            {result.name}{" "}
                          </h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </Carousel>
            <div className="owl-nav disabled"></div>
          </div>
        </div>
        <hr className="category-divider" />

        <div className="food-category sub-cat">
          <Carousel
            responsive={responsive1}
            // removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
            showDots={false}
            draggable={true}
          >
            {apicategory.length > 0 &&
              apicategory.map((catresult, catindex) => {
                return (
                  <div
                    className="product_activee"
                    onClick={() => {
                      getProductData(catindex);
                    }}
                    key={catindex}
                  >
                    <div
                      className={`subcat_items ${
                        catresult.id === apicategoryid ? "product_active" : ""
                      } `}
                    >
                      <p className="wrap mb-0">
                        <Image
                          height={100}
                          width={100}
                          src={catresult?.image?.thumbnail}
                          // {catresult.image.thumbnail}
                          className="d-block w-100"
                          alt="..."
                        />
                      </p>
                      <p> {catresult.name.substring(0, 50)}</p>
                    </div>
                  </div>
                );
              })}
          </Carousel>
        </div>
        <section className="xl:px-16 lg:px-10 px-8">
          <section className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
          </section>
        </section>
        <div className="main"></div>
        <div className="categories pt-3">
          <div className="fruits row">
            <ProductDetail
              shopId={shopId}
              apicategoryid={apicategoryid}
            />
          </div>
          <Recipes shopId={shopId} apicategoryid={apicategoryid}></Recipes>
        </div>
      </div>
    </>
  );
}
const Products = () => {
  return (
    <div className="group relative block overflow-hidden bg-white">
      <button className="absolute left-4 top-4 rounded-full bg-white p-1.5 transition">
        <span className="sr-only">Discount</span>
        <div className="text-sm bg-red-900 text-center w-24 text-white py-1">
          <p className="text-white">- 40%</p>
        </div>
      </button>
      <div className="relative w-36 h-52 mx-auto">
        <Image src={`/images/trending-001.png`} alt="" fill={true} />
      </div>

      <div className="relative border border-gray-100 text-center p-6">
        <div>
          <p className="mt-4 text-lg font-medium text-gray-900">Potatoes</p>
          <p className="text-sm text-gray-700">Fresh foods from our store</p>
        </div>
        <p className="text-red-600 text-lg font-bold">$20</p>
        <div className="mt-4">
          <button className="flex items-center justify-center gap-x-4 w-full h-12 font-bold bg-gonje-green rounded-md px-4 text-sm md:text-base transition hover:scale-105">
            <BsCartFill />
            <span className="text-white">Add</span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
