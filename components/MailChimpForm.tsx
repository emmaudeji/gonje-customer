import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z
    .string()
    .min(4, {
      message: "Email must be at least 2 characters.",
    })
    .email("This is not a valid email"),
  postcode: z.string().min(4, {
    message: "Email must be at least 2 characters.",
  }),
});

export function ProfileForm({ onValidated, status, message, setOpen }) {
  const { toast } = useToast();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      postcode: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    onValidated({
      EMAIL: values.email,
      POSTCODE: values.postcode,
    });
    if (status == "success") {
      toast({
        title: "Scheduled: Catch up",
        variant: "success",
        description: "Friday, February 10, 2023 at 5:57 PM",
      });
      setOpen(false)
    }
  }
  return (
    <div>
      {status === "sending" ? (
        <div className={`${setClassName(status)}`}>sending...</div>
      ) : (
        (status === "error" || status === "success") && (
          <div
            className={`${setClassName(status)}`}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postcode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Postcode</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="bg-gonje-green">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

function setClassName(status: string) {
  let className;
  switch (status) {
    case "sending":
      className = "text-gonje";
      break;
    case "error":
      className = "text-red-700";
      break;
    case "success":
      className = "text-gonje-green";
      break;
    default:
      className = "";
  }
  return className;
}
