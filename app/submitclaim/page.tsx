

import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { createContext } from "react";

export default function submitclaim() {
    const submitClaim = async(formData: FormData) => {
        "use server";

        console.log({
            data: {
                title: formData.get("claimName") as string,
                body: formData.get("claimSummary") as string
            }
        })
    }

  return (
    <div className="flex flex-col max-w-2xl xl:max-w-4xl">
      <h1 className="text-4xl font-extrabold my-2">
        Submit a claim of misinformation
      </h1>
      <p>
      If you have seen any claims of misinformation that you believe may cause
        significant harm in society, summarise it below and provide the source
        of that misinformation. If we believe that it has a harmful effect, it
        will be fact checked and written about.
      </p>
      <div className="[&>*]:my-16">
        <form action={submitClaim}>
          <div className="flex flex-col [&>*]:my-2">
            <label className="text-xl" htmlFor="claimName">Claim name:</label>
            <input type="text" className="rounded-md p-2" id="claimName" name="claimName"></input>

            <label className="text-xl" htmlFor="claimSummary">Summarise the claim:</label>
            <textarea
              name="claimSummary"
              className="rounded-lg p-2"
              id="claimSummary"
              cols="30"
              rows="10"
            ></textarea>
            <button className="">Submit Claim</button>
          </div>
        </form>
        <div></div>
      </div>
      <div></div>
    </div>
  );
}
