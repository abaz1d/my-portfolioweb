import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    console.log("Message submited: " + JSON.stringify(data));
  };

  return (
    <>
      <form className="contact_form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input_list">
          <ul>
            <li>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Your Name"
              />
              {errors.name && errors.name.type === "required" && (
                <span className="invalid-feedback">Name is required</span>
              )}
            </li>
            {/* End li */}
            <li>
              <input
                {...register(
                  "email",
                  {
                    required: "Email is Required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  },
                  { required: true }
                )}
                type="email"
                placeholder="Your Email"
              />
              {errors.email && (
                <span className="invalid-feedback">{errors.email.message}</span>
              )}
            </li>
            {/* End li */}
            <li>
              <input
                type="number"
                placeholder="Your Phone"
                {...register("number", { required: true })}
              />
              {errors.number && (
                <span className="invalid-feedback">Phone is required.</span>
              )}
            </li>
            {/* End li */}
            <li>
              <input
                type="text"
                placeholder="Subject"
                {...register("subject", { required: true })}
              />
              {errors.subject && (
                <span className="invalid-feedback">Subject is required.</span>
              )}
            </li>
            {/* End li */}
          </ul>
        </div>
        {/* End input-list */}

        <div className="message_area">
          <textarea
            {...register("message", { required: true })}
            placeholder="Your message here"
          ></textarea>
          {errors.message && (
            <span className="invalid-feedback">Message is required.</span>
          )}
        </div>
        {/* End message area */}

        <div className="know_tm_button">
          <button type="submit">Submit Now</button>
        </div>
        {/* End tokyo_tm_button */}
      </form>
      {/* End contact */}
    </>
  );
};

export default Contact;
