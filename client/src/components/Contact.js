// import React from "react";
// import { SectionTitle } from "./SectionTitle";

// export const Contact = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//   };

//   return (
//     <div>
//       <SectionTitle title="Contact" />
//       <div className="text-white flex">
//         {/* Form container */}
//         <div className="flex flex-col justify-center w-1/2">
//           <p className="mb-4">
//             Feel free to reach out to me using the form below or through other
//             contact methods.
//           </p>

//           <form onSubmit={handleSubmit} className="flex flex-col max-w-md">
//             {/* Form inputs */}
//             <label className="text-lg mb-2">Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               className="p-2 mb-4 border rounded-[13px]"
//               required
//             />

//             <label className="text-lg mb-2">Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               className="p-2 mb-4 border rounded-[13px]"
//               required
//             />

//             <label className="text-lg mb-2">Message</label>
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               rows="4"
//               className="p-2 mb-4 border resize-none rounded-[13px]"
//               required
//             ></textarea>

//             {/* Submit button */}
//             <button
//               type="submit"
//               className="bg-fivth rounded-[13px] text-white p-3 hover:bg-third"
//             >
//               Submit
//             </button>
//           </form>
//         </div>

//         {/* Image container */}
//         <div className="h-[70vh] w-1/2 mobile:w-full">
//           <lottie-player
//             src="https://lottie.host/a152950d-0bc2-451e-83ce-0fb674dcc969/BdTUD2KXU6.json"
//             background="##FFFFFF"
//             speed="1"
//             autoplay
//             direction="1"
//           ></lottie-player>
//         </div>
//       </div>
//     </div>
//   );
// };

// AdminRegister.js

import React from "react";
import { SectionTitle } from "./SectionTitle";

export const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch('/api/contact/send-email', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      if (result.success) {
        alert('Email sent successfully');
      } else {
        alert('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred');
    }
  };

  return (
    <div>
      <SectionTitle title="Contact" />
      <div className="text-white flex">
        <div className="flex flex-col justify-center w-1/2">
          <p className="mb-4">
            Feel free to reach out to me using the form below or through other
            contact methods.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col max-w-md">
            <label className="text-lg mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-2 mb-4 border rounded-[13px]"
              required
            />

            <label className="text-lg mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-2 mb-4 border rounded-[13px]"
              required
            />

            <label className="text-lg mb-2">Recipient Email</label>
            <input
              type="email"
              name="recipient"
              placeholder="Recipient Email"
              className="p-2 mb-4 border rounded-[13px]"
              required
            />

            <label className="text-lg mb-2">Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="p-2 mb-4 border resize-none rounded-[13px]"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-fivth rounded-[13px] text-white p-3 hover:bg-third"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="h-[70vh] w-1/2 mobile:w-full">
          <lottie-player
            src="https://lottie.host/a152950d-0bc2-451e-83ce-0fb674dcc969/BdTUD2KXU6.json"
            background="##FFFFFF"
            speed="1"
            autoplay
            direction="1"
          ></lottie-player>
        </div>
      </div>
    </div>
  );
};
