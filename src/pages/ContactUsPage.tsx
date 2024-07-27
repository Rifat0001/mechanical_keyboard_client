const ContactUsPage = () => {
  return (
    <section>
      <div className="contact-section-bg flex justify-center items-center">
        <h2 className="lg:text-5xl text-3xl font-bold text-white text-center mb-8">Contact <span className="text-violet-500" >Us</span> </h2>
      </div>
      {/* icon divs  */}
      <div className="mx-8 lg:mx-16 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white border hover:border-violet-500 rounded-lg drop-shadow-lg ">
          <div className="mb-4 flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
  <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
</svg>
          </div>
          <h3 className="text-xl text-violet-500 font-semibold text-center mb-2">Phone Number</h3>
          <a href="tel:+1234567890" className="" ><p className="text-center">+1234567890</p></a>

        </div>
        <div className="p-6 bg-white border hover:border-violet-500 rounded-lg drop-shadow-lg ">
          <div className="mb-4 flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
</svg>


          </div>
          <h3 className="text-xl text-violet-500 font-semibold text-center mb-2">Email</h3>
          <a href="mailto:info@example.com" className="" ><p className="text-center">info@example.com</p></a>
        </div>
        <div className="p-6 bg-white border hover:border-violet-500 rounded-lg drop-shadow-lg ">
          <div className="mb-4 flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
  <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
</svg>


          </div>
          <h3 className="text-xl text-violet-500 font-semibold text-center mb-2">Location</h3>
          <a href="tel:+1234567890" className="" ><p className="text-center">Washington Dc, America</p></a>
        </div>
      </div>
      {/* leave a message  */}
      <div className=" w-full my-8">
          <div className=" w-full ">
            <h2 className="text-4xl mb-1 font-bold w-10/12 ">Leave a message</h2>
            <div className="mt-5">
              <h2>Name*</h2>
              <div className="flex  justify-center">
                <input
                  name="name"
                  className="w-full rounded-lg border border-slate-300 mt-2 p-2 "
                />
              </div>
            </div>
            <div className="mt-2">
              <h2>Email*</h2>
              <div className="flex  justify-center">
                <input
                  name="email"
                  type="email"
                  className="w-full rounded-lg border border-slate-300 mt-2 p-2 "
                />
              </div>
            </div>
            <div className="mt-2">
              <h2>Phone Number*</h2>
              <div className="flex  justify-center">
                <input
                  name="number"
                  className="w-full rounded-lg border border-slate-300 mt-2 p-2 "
                />
              </div>
            </div>
            <div className="mt-8">
              <textarea
                id="message"
                name="message"
                rows={4} // Adjust the number of rows as needed
                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-lg"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button className="btn bg-violet-500 hover:bg-violet-600 w-full text-white py-2 px-4 rounded  transition duration-300 mt-6">
              Send{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
