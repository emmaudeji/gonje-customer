import Image from "next/image";
import { useEffect, React, useState } from "react";
const BirthdayRecipes = () => {
  return (
    <>
      <div className="top-heading p-0">
        <h3>Birthday Recipes</h3>
        <a>See all</a>
      </div>
      <div className="row">
        <a className="recepies">
          <Image
            height={150}
            width={200}
            src="/assets/images/recipe-img.png"
            alt=""
          />
          <div className="content">
            <p>Orange Chicken Stir-Fry With Rice Noodles</p>
            <strong>30 mins</strong>
          </div>
          <div className="fav-recipe-ico">
            <Image
              height={20}
              width={20}
              src="/assets/images/fav-icon.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#" className="recepies">
          <Image
            height={150}
            width={200}
            src="/assets/images/chicken-recipe.png"
            alt=""
          />
          <div className="content">
            <p>Chicken Legs With Peach, Shallot</p>
            <strong>30 mins</strong>
          </div>
          <div className="fav-recipe-ico">
            <Image
              height={20}
              width={20}
              src="/assets/images/fav-icon.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#" className="recepies">
          <Image
            height={150}
            width={200}
            src="/assets/images/buffalo.png"
            alt=""
          />
          <div className="content">
            <p>Kickin Buffalo Chicken Nachos</p>
            <strong>30 mins</strong>
          </div>
          <div className="fav-recipe-ico">
            <Image
              height={20}
              width={20}
              src="/assets/images/fav-icon.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#" className="recepies">
          <Image
            height={150}
            width={200}
            src="/assets/images/chicken-melon.png"
            alt=""
          />
          <div className="content">
            <p>Chicken and Melon Salad</p>
            <strong>30 mins</strong>
          </div>
          <div className="fav-recipe-ico">
            <Image
              height={20}
              width={20}
              src="/assets/images/fav-icon.svg"
              alt=""
            />
          </div>
        </a>
        <a href="#" className="recepies">
          <Image
            height={150}
            width={200}
            src="/assets/images/recipe-img.png"
            alt=""
          />
          <div className="content">
            <p>Orange Chicken Stir-Fry With Rice Noodles</p>
            <strong>30 mins</strong>
          </div>
          <div className="fav-recipe-ico">
            <Image
              height={20}
              width={20}
              src="/assets/images/fav-icon.svg"
              alt=""
            />
          </div>
        </a>
      </div>
    </>
  );
};
export default BirthdayRecipes;
