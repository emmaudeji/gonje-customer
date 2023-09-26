import { useRouter } from "next/router";
import SeeAllRecipes from "../../../components/recipes/SeeAllRecipes";

const See_all_recipes = () => {
  const router = useRouter();

  return (
    <>
      <SeeAllRecipes catId={router.query.catId}></SeeAllRecipes>
    </>
  );
};
export default See_all_recipes;
