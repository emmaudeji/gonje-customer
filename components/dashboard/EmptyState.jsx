import { Button } from "@/components/ui/button";
import { ChevronLeft, Image } from "lucide-react";

export const EmptyState =({errorName})=>{
    return(
      <section className="container flex justify-center items-center h-screen">
      <div className="flex flex-col gap-y-3 justify-center items-center">
        <Image
          src="/images/mascot_gonje.png"
          width={600}
          height={500}
          alt="gonje mascot"
          priority={true}
          quality={50}
        />
        <div className="text-center space-y-3 flex flex-col justify-center items-center">
          <p className="text-3xl">Oops, looks like this is empty</p>
          <p className="text-lg">
            {errorName}
          </p>
          <Button className="bg-gonje-green flex gap-x-2 items-center w-56">
            <ChevronLeft />
            Back to Dashboard
          </Button>
        </div>
      </div>
    </section>
    )
  }