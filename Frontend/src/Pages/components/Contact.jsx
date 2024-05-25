const Contact = () => {
  return (
    <>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-2xl font-extrabold text-center text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Your email
            </label>
            <input
              type="email"
              className="placeholder-white placeholder-opacity-50  bg-transparent text-white text-sm rounded-lg block w-full p-2.5"
              placeholder="name@flowbite.com"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Your email
            </label>
            <input
              type="email"
              className="placeholder-white placeholder-opacity-50  bg-transparent text-white text-sm rounded-lg block w-full p-2.5"
              placeholder="name@flowbite.com"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="backdrop-blur bg-transparent text-white text-sm rounded-lg block w-full p-2.5"
              placeholder="Leave a comment..."
            ></textarea>
          </div>

          <div className="flex items-center justify-center ">
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center border border-white text-white rounded-lg sm:w-fit"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
