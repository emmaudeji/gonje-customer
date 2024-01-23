import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./customForm";

export default function MailChimp() {
  const url =
    "https://gonje.us20.list-manage.com/subscribe/post?u=8293c49fe797c04b3b9f52c23&amp;id=b040c42304";
  return (
    <>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <>
            {/* <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            /> */}
            <FormDialog {...{ subscribe, status, message }} />
          </>
        )}
      />
    </>
  );
}

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ProfileForm } from "@/components/MailChimpForm";
import { useState } from "react";

export function FormDialog({ subscribe, status, message }) {
  // console.log(subscribe, status, message);
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gonje-green">Get Started</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md h-[58%] !bg-[url('/images/popuptop.png')]">
        <DialogHeader>
          <DialogTitle>Subscribe to our mailing list</DialogTitle>
          <DialogDescription>
            Join Our Waitlist to receive free delivery, BBQ Grills and many more
            surprises for the first 500 subscribers.
          </DialogDescription>
        </DialogHeader>
        <ProfileForm
          {...{ status, message, setOpen }}
          onValidated={(formData) => subscribe(formData)}
        />
      </DialogContent>
    </Dialog>
  );
}
export function SignupDialog({ subscribe, status, message }) {
  // console.log(subscribe, status, message);
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <li className="nav-item font-semibold">Sign In</li>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md h-[58%] !bg-[url('/images/popuptop.png')]">
        <DialogHeader>
          <DialogTitle>Subscribe to our mailing list</DialogTitle>
          <DialogDescription>
            Join Our Waitlist to receive free delivery, BBQ Grills and many more
            surprises for the first 500 subscribers.
          </DialogDescription>
        </DialogHeader>
        <ProfileForm
          {...{ status, message, setOpen }}
          onValidated={(formData) => subscribe(formData)}
        />
      </DialogContent>
    </Dialog>
  );
}
