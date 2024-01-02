import GoogleLogin from "react-google-login";
import Router from "next/router";
import { googlelogin } from "./Api/Api";
import { FaGoogle } from "react-icons/fa";


export default function GoogleLoginComp() {
  const clientId =process.env.NEXT_PUBLIC_GOOGLE_ID


  const onSuccess = async (response) => {
    // console.log('GOOGLESUCCESS', response, )
    const json = await googlelogin(response);
    if (json) {
      localStorage.setItem("user_detail", JSON.stringify(json));
      Router.push("/dashboard");
      // console.log('FEEDBK json', json);
    } else {
      Router.push("/");
      // console.log('FEEDBK error', );
    }
  };
  const onFailure = (response) => {
    console.log('GOOGLEERROR', response);
  };

  return (
    <>
      <GoogleLogin
        buttonText="Continue with Google"
        clientId={clientId}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        render={(renderProps) => (
          <button type="button" onClick={renderProps.onClick} className="">
			      <FaGoogle size={28} color="red"/>
            {/* <p>CONTINUE WITH GOOGLE</p> */}
          </button>
    
        )}
      
        // id="custom-google-button"
      />
    </>
  );
}
