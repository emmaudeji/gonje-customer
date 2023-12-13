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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Product({ shopId }) {
  // console.log(shopId);
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
      <div className="pro side-body bg-white">
        {loading && <Loader />}
        <div className="producttop top-head mx-2">
          <SearchTopbar />
          <div className="px-4 md:container border-t py-4 z-20">
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
                      className={`border-none bg-none p-0 text-xs leading-4 w-[76px] font-semibold cursor-pointer text-center ${
                        result.categories[0].id === apicategoryid ? "" : ""
                      }`}
                      key={index}
                      onClick={() => {
                        getCategoryData(index);
                      }}
                    >
                      <div className="relative flex items-center justify-center border-2 rounded-lg border-transparent bg-gray-200 w-[76px] h-[76px]">
                        <Image
                          src={result?.gallery.thumbnail} //{result.gallery.thumbnail}
                          className="object-cover"
                          alt=""
                          fill={true}
                        />
                      </div>
                      <div className="mt-1">
                        <h3 className="text-xs text-gray-900">
                          {result.name}{" "}
                        </h3>
                      </div>
                    </div>
                  );
                })}
            </Carousel>
            <div className="owl-nav disabled"></div>
          </div>
        </div>
        <hr className="my-2" />

        <div className="px-4 md:container py-3">
        <ScrollArea className="h w-full py-4">
          <div className="flex justify-between gap-x-8">
          {apicategory.length > 0 &&
              apicategory.map((catresult, catindex) => {
                // console.log(apires)
                return (
                  <div
                    className=""
                    onClick={() => {
                      getProductData(catindex);
                    }}
                    key={catindex}
                  >
                    <button
                      className={`border border-transparent rounded-[16px]  py-[3px] px-3 whitespace-nowrap text-sm font-medium text-gray-700 bg-gray-200 ${
                        catresult.id === apicategoryid ? "product_active" : ""
                      } `}
                    >
                      <p> {catresult.name.substring(0, 50)}</p>
                    </button>
                  </div>
                );
              })}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>


        </div>
        <div className="categories md:pt-3">
          <div className="fruits row">
            <ProductDetail shopId={shopId} apicategoryid={apicategoryid} />
          </div>
          <Recipes shopId={shopId} apicategoryid={apicategoryid}></Recipes>
        </div>
      </div>
    </>
  );
}
