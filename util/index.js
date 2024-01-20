export const validateEmail = (email) => {
  if (email) {
    const pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!pattern.test(email)) {
      return "Please enter valid email address.";
    }
  }
};

export const validatePhone = (phone) => {
  if (phone) {
    // This regex matches landline numbers with area code 02, 03, 07, or 08, followed by 8 digits
    const pattern1 = /^(?:\+?61|0)(?:2|3|7|8)\d{8}$/;
    // This regex matches mobile numbers with prefix 04, followed by 8 digits
    const pattern2 = /^(?:\+?61|0)4\d{8}$/;
    // This regex matches local rate numbers with prefix 13, followed by 6 digits
    const pattern3 = /^13\d{6}$/;
    // This regex combines the three patterns with a pipe | character, which indicates alternative matches
    const pattern = new RegExp(`(${pattern1.source})|(${pattern2.source})|(${pattern3.source})`);
    if (!pattern.test(phone)) {
      return "Please enter valid phone number.";
    }
  }
};

export const GOOGLE_ADDRESS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
//  "AIzaSyCxMO0g5Vv0ZtSthhrrXMVOYVBcjf4G1hw";
export const NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
// "pk_test_51JUqxaCQ7rc17WeioiorcontVhfKvvWwCZfTVqCX3pL5hwZ3EARBNTUBUcMeLyeY0znBxOjor0DEHR3JwuWeQFR100oJKWYkin";
