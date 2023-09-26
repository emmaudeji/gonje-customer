import { useEffect, React, useState } from "react";
const ItalianRecipes = () => {
  return (
    <>
      <div class="top-heading p-0">
        <h3>Italian Recipes</h3>
        <a href="#">See all</a>
      </div>
      <div class="row">
        <a href="#" class="recepies">
          <img src="/assets/images/hesselback-tomoto.png" alt="" />
          <div class="content">
            <p>Hasselback Tomato Caprese Salad</p>
            <strong>20 mins</strong>
          </div>
          <div class="fav-recipe-ico">
            <img src="/assets/images/fav-icon.svg" alt="" />
          </div>
        </a>
        <a href="#" class="recepies">
          <img src="/assets/images/chicken-recipe.png" alt="" />
          <div class="content">
            <p>Chicken Legs With Peach, Shallot</p>
            <strong>30 mins</strong>
          </div>
          <div class="fav-recipe-ico">
            <img src="/assets/images/fav-icon.svg" alt="" />
          </div>
        </a>
        <a href="#" class="recepies">
          <img src="/assets/images/buffalo.png" alt="" />
          <div class="content">
            <p>Kickin' Buffalo Chicken Nachos</p>
            <strong>40 mins</strong>
          </div>
          <div class="fav-recipe-ico">
            <img src="/assets/images/fav-icon.svg" alt="" />
          </div>
        </a>
        <a href="#" class="recepies">
          <img src="/assets/images/chicken-melon.png" alt="" />
          <div class="content">
            <p>Chicken and Melon Salad</p>
            <strong>30 mins</strong>
          </div>
          <div class="fav-recipe-ico">
            <img src="/assets/images/fav-icon.svg" alt="" />
          </div>
        </a>
        <a href="#" class="recepies">
          <img src="/assets/images/veg-soup.png" alt="" />
          <div class="content">
            <p>Ravioli & Vegetable Soup</p>
            <strong>30 mins</strong>
          </div>
          <div class="fav-recipe-ico">
            <img src="/assets/images/fav-icon.svg" alt="" />
          </div>
        </a>
      </div>
    </>
  );
};
export default ItalianRecipes;
