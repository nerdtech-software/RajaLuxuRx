

const ContactPage = () => {
  return (
    <div>
    <div
    className="relative bg-cover bg-center h-[400px] md:h-[500px]"
    style={{
      backgroundImage:
        "url('https://s3-alpha-sig.figma.com/img/8ee7/6cee/f0e1aa0669c8bbe1fbad49c398671baa?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bn0Gv6KEBFlcmuyGZeX8t7DryCR-Y6Vf6RunxQOWnVQwckxyYe3usvO~aa-bp~IG-zQu-VF25s4l-RMaCRueRijIGxp3CgCU~3EmqXfrgU6GF-yOr9Dxmrac-xCkB7lhuAC5QLMjn6kTGPw8NNya~j4Bnrye45TdoHo92mTmg30EfNEYp1YcfbBjjeuwS8~cZ8h1xeuwZsQlYZadx8CDbEhblJ39~BTT62dfbsPic6QOZZ4MaFNHtfQdyX1pvdZIKU28iUyX5PEOnX4uit~kt~3ELNJl7HA2T03GKxlS2QSUB9i2hoM6B~YdDbXm6h5PUNvAm6CU4NTiUx~nGV~Z6w__')", // Replace with your car image URL
    }}
  >
    <div className="relative flex flex-col items-center justify-center text-center text-white h-full">
      <h1 className="text-2xl md:text-4xl font-bold">
        Chicago’s Premium Private Car Rentals Service
      </h1>
     
    </div>
    </div>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-7xl w-full p-10 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg">
        {/* Contact Info Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="text-gray-600">
            📍 <strong>New Jersey, USA</strong>
          </p>
          <p className="text-gray-600">
            📞 <strong>0123 456 789</strong>
          </p>
          <p className="text-gray-600">
            ✉️ <strong>info@example.com</strong>
          </p>
          {/* Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9683167751436!2d-74.00601508459484!3d40.71277607933069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDAlNDInNDYuMCJOIDc0wrAwMCc0OC4wIlc!5e0!3m2!1sen!2sus!4v1632350330097!5m2!1sen!2sus"
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
            className="rounded-md shadow"
          ></iframe>
        </div>

        {/* Message Form Section */}
        <div>
          <h2 className="text-xl font-semibold">Write your Message</h2>
          <form className="space-y-6 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full name"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Your message goes here..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-600 text-white py-2 px-6  hover:bg-yellow-700"
            >
              View All
            </button>
          </form>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default ContactPage;
