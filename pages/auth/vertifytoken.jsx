import AuthLayout from "./layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { forgotPassword } from "@/components/Api/Api";
import { useToast } from "@/components/ui/use-toast";

////
import { z, ZodError } from "zod";
import { useState } from "react";
import { useRouter } from "next/router";
import { vertifyToken } from "../../components/Api/Api";

const tokenSchema = z
  .string({ description: "token" })
  .min(3, "Incorrect Token");
const VertifyToken = () => {
  const router = useRouter();
  const { email } = router.query;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [token, setToken] = useState("");

  const handleSubmitForm = async () => {
    setLoading(true);
    try {
      tokenSchema.parse(token);
      const tokenVertificationResponse = await vertifyToken(email, token);
      if (tokenVertificationResponse.success === true) {
        setLoading(false);
        router.push({
          pathname: "resetpassword",
          query: { email: email, token: token },
        });
      }
      setError(tokenVertificationResponse?.message);
    } catch (error) {
      setLoading(false);
      console.log("message error main", error);
      if (error instanceof ZodError) {
        // Get the issues array from the error
        // Do something with the email issues
        //i used the array directly becasue I couldn't find the decription for the token in the zod erro messag
        setError(error[0].message);
      }
    }
  };
  return (
    <AuthLayout>
      <div className="space-y-3">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm">
            Email address
          </label>
          <Input
            type="text"
            name="email"
            value={email}
            required
            className="w-full px-3 py-2 border rounded-md border-gray-400 focus:dark:border-green-400"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="token" className="block text-sm">
            Token
          </label>
          <Input
            type="text"
            name="token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md border-gray-400 focus:dark:border-green-400"
          />
        </div>
        {error && (
          <p className="text-red-700 my 3 text-sm font-semibold">{error}</p>
        )}
        <Button
          type="submit"
          className={`w-full text-white px-8 py-2 font-semibold rounded-md bg-green-600 my-4 ${
            loading ? "opacity-50 pointer-events-none" : ""
          }`}
          onClick={handleSubmitForm}
        >
          {loading ? <span className="animate-spin mr-2">&#9696;</span> : null}
          Reset
        </Button>
      </div>
    </AuthLayout>
  );
};

export default VertifyToken;
