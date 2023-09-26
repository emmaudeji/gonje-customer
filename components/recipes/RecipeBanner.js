import { useEffect, React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function RecipeBanner() {
  const [apires, apiReasponse] = useState([]);

  const recipesDetail = useSelector((state) => state.recipes);

  useEffect(() => {
    if (recipesDetail && typeof recipesDetail.banner !== "undefined") {
      apiReasponse(recipesDetail.banner.original);
    }
  }, [!recipesDetail.banner]);
  return (
    <>
      <div
        className="hero-banner"
        style={{
          backgroundImage: "url(" + apires + ")",
        }}
      >
        <div className="content">
          <h3>{recipesDetail.name}</h3>
          <div className="detail">
            <div className="active-time">
              <p>Active Time</p>
              <strong>{recipesDetail.active_time}</strong>
              <hr />
            </div>
            <div className="active-time">
              <p>Total Time</p>
              <strong>{recipesDetail.total_time}</strong>
              <hr />
            </div>
            <div className="active-time">
              <p>Servings</p>
              <strong>{recipesDetail.servings}</strong>
              <hr />
            </div>
            <div className="active-time">
              <p>Calories</p>
              <strong>{recipesDetail.calories}</strong>
            </div>
          </div>
          <div className="fav">
            <svg
              width="17px"
              height="15px"
              viewBox="0 0 17 15"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title>Path</title>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Dashboard-products"
                  transform="translate(-1508.000000, -1240.000000)"
                  fill="#DADADA"
                  fillRule="nonzero"
                >
                  <g
                    id="Group-11"
                    transform="translate(287.301417, 1225.826136)"
                  >
                    <path
                      d="M1235.84154,15.6174613 C1234.94881,14.7184254 1233.73449,14.2123894 1232.46752,14.2114186 C1231.28098,14.2116125 1230.13777,14.6573384 1229.26424,15.4603436 C1228.39079,14.6572031 1227.24753,14.2114186 1226.06096,14.2114186 C1224.79248,14.2127393 1223.57692,14.7199677 1222.68374,15.6206678 C1220.79752,17.5148974 1220.79832,20.4776875 1222.68534,22.363901 L1229.26424,28.942802 L1235.84314,22.363901 C1237.73016,20.4776875 1237.73096,17.5148974 1235.84154,15.6174613 Z"
                      id="Path"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <p className="bottom-banner">{recipesDetail.description}</p>
    </>
  );
}
