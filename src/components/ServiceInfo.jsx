
import car from "../assets/car7.jpg";
const ServiceInfo = () => {
  return (
    <div className="py-20">

    <div className="bg-gray-900 text-white">
      {/* Service Details Section */}
      <section className="py-16 bg-white text-gray-900">
        <div className="max-w-6xl mx -auto px-8 grid md:grid-cols-2 gap-8 items-center">
          <img
            src={`${car}`}// Replace with your actual image URL
            alt="Luxury Car"
            className=" shadow-lg"
          />
          <div>
            <h3 className="text-3xl font-bold mb-4">
              Exceptionally Reliable Airport Rental Services At Limousine
            </h3>
            <p className="text-gray-700 mb-4">
              All our drivers always have a cell phone with them, and they stay
              connected with our passengers.
            </p>
            <p className="text-gray-700 mb-4">
              We track the arrival of your flight so that we are always updated
              on your whereabouts.
            </p>
            <p className="text-gray-700 mb-4">
              For our corporate accounts, we offer prompt and thorough invoices
              that provide an in-depth accounting of the service and make it
              easy to record expenses or rebill.
            </p>
            <p className="text-gray-700 mb-6">
              Every car at Limousine is radio-dispatched and operates around the
              clock.
            </p>
            <button className="bg-yellow-600 text-white px-6 py-3  hover:bg-yellow-700">
              Book Now
            </button>
          </div>
        </div>
      </section>
    <section
        className="relative py-16 text-center text-white"
        style={{
          backgroundImage: "url('https://s3-alpha-sig.figma.com/img/88c1/048f/af0b88853568b01076891995e8224974?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NDNHaNwekoZevk0OZMYkH1EZ3sQPjlpLaF9k5fm0uGTRU4lUdy3I6IEDBIdWnBQJ9ceCXK4Zxa7xvDu4pGOCHO~lmT3~GKtfPOupeqcKTKbjVpGcVsp4g~1h1KkY8owldxSZwD0Dv1m1mufD2zBZhTSL4~nn1w4UBxTFsw5fVe5y4PRtMUZwTfOj-0aJ4EHmaz-J00GZ8xAceuSBeuypbb1iXW9oKQ5xkQCcohZYoa7Po74sz4QCBq1SmyuNt2a5qbkbBgFa~tSNsxOUhccqmMO1my3gQ3cjZAWGZT2QDf1UO7yjWFdyqUFNyN6R50NkSANsM~jhnEOoW19ljRhb6Q__')", // Replace with your actual background image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black bg-opacity-50 py-12 px-8">
          <p className="text-lg max-w-3xl mx-auto mb-6">
            You can be sure that when you make a reservation with Limousine for
            Chicago O'Hare airport car service, you will get all you require. We
            are here to provide our clients with high-quality service—you just
            need to download our app from Apple for iPhone and Google Play for
            Android and book a suitable ride.
          </p>
          <button className="bg-yellow-600 text-white px-6 py-3  hover:bg-yellow-700">
            Book Now
          </button>
        </div>
      </section>
      </div>
      </div>
  );
};

export default ServiceInfo;
