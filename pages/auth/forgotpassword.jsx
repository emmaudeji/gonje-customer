import AuthLayout from "./layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { forgotPassword } from "@/components/Api/Api";
import { useToast } from "@/components/ui/use-toast";

////
import { z, ZodError } from "zod";
import React, { useState } from "react";
import { useRouter } from "next/router";

// Define the email schema
const emailSchema = z
  .string()
  .email("You need to provide a valid email address");
const ForgotPassword = () => {
  const toast = useToast();
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmitForm = async () => {
    setLoading(true);
    try {
      emailSchema.parse(email);
      const forgotPasswordResponse = await forgotPassword(email);
      if (forgotPasswordResponse.success === true) {
        setLoading(false);
       router.push({pathname:'vertifytoken',  query: { email: email }})
      } else {
        toast({
          title: "Request Failed",
          variant: "destructive",
          description: forgotPasswordResponse.success,
        });
      }
      console.log("got forgot password", forgotPasswordResponse);
    } catch (error) {
      setLoading(false);
      if (error instanceof ZodError) {
        // Get the issues array from the error
        const issues = error.issues;
        const emailIssues = issues.find(
          (issue) => issue.validation === "email"
        );
        // Do something with the email issues
        setError(emailIssues.message);
      }
    }
  };
  return (
    <AuthLayout>
      <div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm">
            Email address
          </label>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

export default ForgotPassword;
