import Marquee from "react-fast-marquee";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Fade from "react-reveal/Fade";

export default function VisionSection() {
  const [isShown, setIsShown] = useState(false);
  const [isShownImg, setIsShownImg] = useState(true);
  return (
    <>
      <section className="recepies-sec">
        <Fade left>
          <div className="container d-none d-sm-none d-md-block d-lg-block d-xl-block">
            <Image
              src="/images/gonje-need.png"
              className="img-show"
              height={506}
              width={1383}
              alt=""
            />
          </div>
        </Fade>

        <Fade right>
          <div className="container d-md-none d-lg-none d-xl-none">
            <div className="row justify-content-center">
              <div className="col-xl-12 col-lg-12">
                <Image
                  src="/images/gonje-need-small.png"
                  className="img-show"
                  height={506}
                  width={506}
                  alt=""
                />
              </div>
            </div>
          </div>{" "}
        </Fade>
      </section>
    </>
  );
}
