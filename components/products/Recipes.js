import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, React, useState } from "react";
import CategoryService from "../../services/CategoryService";
import Router from "next/router";

export default function Recipes(props) {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    CategoryService.getRecipe(props.shopId)
      .then((response) => {
        console.log(response.data.data.data)
        setRecipe(response.data.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [props.apicategoryid]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      paritialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 40,
    },
  };

  const recipeRedirect = (recipeId) => {
    Router.push("/recipes/recipe_detail/" + recipeId);
  };

  return (
    <>
      <div className="row recipe container">
        <div className="top-heading">
          {recipe.length == 0 ? "" : <h3>Recipes</h3>}
        </div>
        <div>
          <Carousel
            responsive={responsive}
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            showDots={false}
            draggable={true}
          >
            {recipe.length > 0 &&
              recipe.map((result, index) => {
                return (
                  <div
                    className="recipe_banner"
                    style={{
                      backgroundImage: "url(" + result.banner.original + ")",
                    }}
                    onClick={() => {
                      recipeRedirect(result.id);
                    }}
                    key={index}
                  >
                    {/* hello  {index} */}
                    <img
                  src={result.banner.thumbnail}
                  className="d-block w-100"
                  alt="..."
                />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>{result.name}</h5>
                      <div className="dish row">
                        <div className="active-time ">
                          <p>Active Time</p>
                          <strong>{result.active_time}</strong>
                        </div>
                        <div className="active-time ">
                          <p>Total Time</p>
                          <strong>{result.total_time}</strong>
                        </div>
                        <div className="active-time ">
                          <p>Servings</p>
                          <strong>{result.servings}</strong>
                        </div>
                        <div className="active-time ">
                          <p>Calories</p>
                          <strong>{result.calories}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Carousel>
        </div>
      </div>
    </>
  );
}
