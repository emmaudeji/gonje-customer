import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { facebooklogin } from "./Api/Api";
import Router from "next/router";
import Image from "next/image";
import { FaFacebookF } from 'react-icons/fa';



export default function FacebookLoginComp() {
  const responseFacebook = async (response) => {
    console.log("FB callback=", response);
    const json = await facebooklogin(response);
    
    if (json) {
      localStorage.setItem("user_detail", JSON.stringify(json));
      Router.push("/dashboard");
      console.log("FB JSON=", json);

    } else {
      Router.push("/");
      console.log("FB No JSON=", );
    }
  };

  return (
    <>
      <FacebookLogin
        // icon="fa-facebook"
        appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        render={(renders) => (
          <button type="button" onClick={renders.onClick} className="">
			      <FaFacebookF size={28} color="blue"/>
            {/* <p>CONTINUE WITH FACEBOOK</p> */}
          </button>
    
        )}
      />
    </>
  );
}
