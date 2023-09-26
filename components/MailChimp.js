import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from './customForm';

export default function MailChimp() {
  const url =
  "https://gonje.us20.list-manage.com/subscribe/post?u=8293c49fe797c04b3b9f52c23&amp;id=b040c42304";
    return (
      <>
     <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
      
      </>
    )
  }
  
