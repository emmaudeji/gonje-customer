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
      <div className="pro side-body">
        {loading && <Loader />}
        <div className="producttop top-head">
          <SearchTopbar />
          <div className="xl:px-16 lg:px-8 p-8 top-head-cat">
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
                        result.categories[0].id === apicategoryid ? "" : ""
                      } block py-2 px-3 bg- mx- space-y-4 mx-2 cursor-pointer`}
                      key={index}
                      onClick={() => {
                        getCategoryData(index);
                      }}
                    >
                      <div className="flex flex-col items-center justify-center">
                        <div className="relative rounded-full h-20 w-20">
                          <Image
                            src={result?.gallery.thumbnail} //{result.gallery.thumbnail}
                            className="object-cover rounded-full"
                            alt=""
                            fill={true}
                          />
                        </div>

                        <div className="mt-3">
                          <h3 className="font-medium text-base text-gray-900">
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

        <div className="food-category px-4 md:px-8 xl:px-16 sub-cat">
          <Carousel
            responsive={responsive1}
            // removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
            showDots={false}
            draggable={true}
          >
            {apicategory.length > 0 &&
              apicategory.map((catresult, catindex) => {
                // console.log(apires)
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
          {/* {apicategory.length > 0 &&
            apicategory.map((catresult, catindex) => {
              return (
                <div key={catindex}>
                  <CategoryBox
                    catindex={catindex}
                    apicategoryid={apicategoryid}
                    shopId={shopId}
                    name={catresult.name.substring(0, 50)}
                    getCategoryData={getCategoryData}
                  />
                </div>
              );
            })} */}
        </div>
        <div className="main"></div>
        <div className="categories pt-3">
          <div className="fruits row">
            <ProductDetail shopId={shopId} apicategoryid={apicategoryid} />
          </div>
          <Recipes shopId={shopId} apicategoryid={apicategoryid}></Recipes>
        </div>
      </div>
    </>
  );
}

