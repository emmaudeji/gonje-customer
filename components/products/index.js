import { useEffect, React, useState, useRef } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
////
import Header from "../layout/Header";
import SearchTopbar from "../layout/SearchTopbar";
import CategoryService from "../../services/CategoryService";
import Menu from "../layout/Menu";
import Recipes from "./Recipes";
import ProductDetail from "./ProductDetail";
import Loader from "../Loader";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { SearchIcon } from "lucide-react";

export default function Product({ shopId }) {
  // console.log(shopId);
  const [productName, setProductName] = useState("");
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
        // console.log('APIRES', response.data.data)
        // console.log('Api Category', response.data.data[categoryindex].categories)
        // console.log(response.data.data[categoryindex].categories[0].id)
      })
      .catch((e) => {
        console.log("product display error", e);
      });
  };
  const getProductData = (catindex) => {
    setapiCategoryId(apires[categoryindex].categories[catindex].id);
  };
  const scrollRef = useRef(null);

  // I added a function to handle the click event on the buttons
  const handleScroll = (direction) => {
    // I used the scrollLeft property to change the horizontal position of the scroll area
    if (direction === "left") {
      console.log("scroll left ", scrollRef.current.scrollLeft);
      scrollRef.current.scrollLeft -= 100; // you can adjust this value as you like
    } else if (direction === "right") {
      console.log("scroll right ", (scrollRef.current.scrollLeft += 100));

      scrollRef.current.scrollLeft += 100; // you can adjust this value as you like
    }
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
        {/* {loading && <Loader />} */}
        <div className="producttop top-head mx-2 z-20">
          <SearchTopbar />
          {/* <div className="px-4 md:container border-t py-4 z-20">
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
          </div> */}
        </div>
        <div className="container my-4 space-y-4 z-20 py-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 pl-10 pr-4 border rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
            />
            <SearchIcon className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
          </div>
          <div className="">
            {loading ? (
              // Render loading div if loading is true
              <div className="flex justify-center items-center h-16">
                <p className="text-gray-500">Loading...</p>
              </div>
            ) : (
              // Render the buttons if loading is false
              <div className="flex gap-x-4">
                {apires.length > 0 &&
                  apires.map((result, index) => {
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          getCategoryData(index);
                        }}
                        className={`${
                          result.categories[0].id === apicategoryid
                            ? "bg-[#0F0F0F] text-gray-200"
                            : "bg-gray-200 text-[#0F0F0F]"
                        } p-2 border rounded-lg max-w-[10rem] text-ellipsis`}
                      >
                        {result.name}
                      </button>
                    );
                  })}
              </div>
            )}
          </div>
        </div>

        <hr className="my-2" />

        <div className="categories md:pt-3 space-y-4">
          {apicategory.length > 0 &&
            apicategory.map((catresult, catindex) => {
              // console.log("category result", catresult);
              return (
                <div className="" key={catindex}>
                  <h1
                    className={`py-[3px] px-3 whitespace-nowrap text-2xl font-semibold  `}
                  >
                    {catresult.name.substring(0, 50)}{" "}
                  </h1>
                  {/* <div className="flex gap-x-6">
                    <button onClick={() => handleScroll("left")}>
                      {"<"} back
                    </button>
                    <button onClick={() => handleScroll("right")}>
                      {">"} front
                    </button>
                  </div> */}
                  <ScrollArea className="py-4" ref={scrollRef}>
                    <ProductDetail
                      shopId={shopId}
                      apicategoryid={catresult.id}
                      productName={productName}
                    />
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                </div>
              );
            })}
          <div className="fruits row">
            {/* <ProductDetail shopId={shopId} apicategoryid={apicategoryid} /> */}
          </div>
          <Recipes shopId={shopId} apicategoryid={apicategoryid}></Recipes>
        </div>
      </div>
    </>
  );
}

{
  /* <div className="px-4 md:container py-3">
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
        </div> */
}
