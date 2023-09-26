import Header from "../layout/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, React, useState } from "react";
import Image from "next/image";

export default function RecipeCookingSteps() {
  const [apires, apiReasponse] = useState([]);

  const recipesteps = useSelector((state) => state.recipes);
  useEffect(() => {
    if (recipesteps && typeof recipesteps.cooking_steps !== "undefined") {
      apiReasponse(recipesteps.cooking_steps);
    }
  }, [!recipesteps.cooking_steps]);

  return (
    <>
      <div className="ingredients cooking-stp">
        <div className="top-heading">
          <h3>Cooking Steps</h3>
        </div>
        <div className="row">
          {apires.length ? (
            apires.map((result, index) => (
              <div className="ingre-item steps" key={index}>
                <strong>Step {index + 1}</strong>
                <div className="cokk-step">
                  {result.image && result.image.hasOwnProperty("thumbnail") ? (
                    <Image
                      height={140}
                      width={140}
                      src={result.image.thumbnail}
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                </div>
                <strong className="title">{result.name}</strong>
                <div className="steps-content d-flex">
                  <p>{result.description}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="side-rght-inr">
              <div className="empty-txt">cooking step&apos;s not found.</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
