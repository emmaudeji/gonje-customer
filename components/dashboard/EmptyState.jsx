import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";

export const EmptyState = ({ errorName }) => {
  return (
    <section className="bg-white w-full h-full">
      <section className="container">
        <div className="flex flex-col gap-y-3 justify-center items-center">
          <Image
            src="/images/mascot_gonje.png"
            width={400}
            height={400}
            alt="gonje mascot"
            priority={true}
          />
          <div className="text-center space-y-3 flex flex-col justify-center items-center">
            <p className="text-3xl">Oops, looks like this is empty</p>
            <p className="text-lg">{errorName}</p>
            <Button className="bg-gonje-green flex gap-x-2 items-center w-56">
              <ChevronLeft />
              Back to Dashboard
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
};
