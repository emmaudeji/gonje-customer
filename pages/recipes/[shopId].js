import Recipes from "../../components/recipes";
import { useRouter } from "next/router";

const RecipesPage = () => {
  const router = useRouter();

  return (
    <>
      <Recipes shopId={router.query.shopId}></Recipes>
    </>
  );
};
export default RecipesPage;
