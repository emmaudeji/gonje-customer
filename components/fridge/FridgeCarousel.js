import { useEffect, React, useState, useCallback } from "react";
import CategoryService from "../../services/CategoryService";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SearchTopbar from "../layout/SearchTopbar";
import Products from "./Products";
import Loader from "../Loader";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const FridgeCarousel = ({ shopId }) => {
  const [loading, setLoading] = useState(false);
  const [apires, apiReasponse] = useState("");
  const [apicategory, apiCategory] = useState(0);
  const [categoryindex, setcategoryindex] = useState(0);
  const [indexedCategory, setIndexedCategory] = useState(0);
  const getCategory = useCallback(() => {
    let Collected_data = "is_fridge=1&shop_id=" + shopId;
    CategoryService.get(Collected_data)
      .then((response) => {
        setLoading(false);
        apiReasponse(response.data.data[categoryindex].categories);
        apiCategory(response.data.data[categoryindex].categories[0].id);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [shopId, categoryindex]);
  const getCategoryData = (index) => {
    // console.log('function', index+1, apires[index].id)
    setIndexedCategory(apires[index].id);
    apiCategory(apires[index].id);
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
      slidesToSlide: 8, // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 3000, min: 1366 },
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

  useEffect(() => {
    setLoading(true);
    getCategory(shopId);
  }, [shopId, getCategory]);

  return (
    <>
      {loading && <Loader />}
      <div className="producttop top-head">
        <SearchTopbar></SearchTopbar>
        <div className="container p-0 food-category fridge-cat">
          <Carousel
            className="fridge-cate"
            responsive={responsive}
            // removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
            showDots={false}
            draggable={true}
          >
            {apires.length > 0 &&
              apires.map((result, index) => {
                return (
                  <div className="top-product-sliders" key={index}>
                    {/* hello  {index} */}
                    <a
                      className="wrap"
                      href="#"
                      onClick={() => {
                        getCategoryData(index);
                      }}
                    >
                      <Image
                        height={100}
                        width={100}
                        src={result.image.thumbnail}
                        className="d-block"
                        alt="..."
                      />
                    </a>
                    <p>{result.name}</p>
                  </div>
                );
              })}
          </Carousel>
          <div className="owl-nav disabled"></div>
        </div>
      </div>
      <div className="main"></div>
      <div className="categories">
        <div className="fruits row justify-content-center">
          <Products shopId={shopId} categoryId={apicategory}></Products>
        </div>
      </div>
    </>
  );
};
export default FridgeCarousel;
