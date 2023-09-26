import RecipeDetail from "../../../components/recipes/RecipeDetail";
import { useRouter } from "next/router";

const Recipe_detail = () => {
  const router = useRouter();

  return (
    <>
      <RecipeDetail recipeId={router.query.recipeId}></RecipeDetail>
    </>
  );
};
export default Recipe_detail;
