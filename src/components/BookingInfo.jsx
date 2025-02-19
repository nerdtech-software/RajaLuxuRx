import { useState } from "react";
import car from "../assets/af0b88853568b01076891995e8224974.jpeg";
import car1 from "../assets/car11.jpg";
const BookingInfo = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };
  return (
    <div className="w-full space-y-16">
      {/* Informational Grid Section */}
      <section className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          What Should I Know Before Booking
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Planning to hire one of our vehicles for a very special occasion?
          These guidelines will answer your questions about limousines and
          party bus rentals, ensuring a smooth and unforgettable celebration.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 px-10">
          {[
            {
              title: "Budgeting for Limos",
              text: "Wedding limo costs depend on the number of vehicles needed.",
              image: car1,
            },
            {
              title: "Reserving Your Vehicle",
              text: "Our website displays available vehicles for immediate rental.",
              image: car1,
            },
            {
              title: "Best Time to Marry in Chicago",
              text: "Spring offers ideal weather for Chicago weddings.",
              image: car1,
            },
            {
              title: "Choosing a Stretch Limo",
              text: "The type of event and number of guests will determine the vehicle size.",
              image: car1,
            },
          ].map((item, index) => (
            <div key={index} className="text-center  ">
              <img
                src={item.image}
                alt={item.title}
                className="mx-auto  shadow-md w-44 "
              />
              <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
              <p className="text-gray-500 mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Hero Banner Section */}
      <section
  className="relative text-center bg-cover bg-center h-64 md:h-96 flex items-center justify-center mx-16"
  style={{
    backgroundImage: `url(${car})`, // Assuming 'car' contains the URL of the image
  }}
>
  <div className="bg-black bg-opacity-50 p-8 rounded-md">
    <h2 className="text-3xl font-bold text-white mb-4">
      Unmatched Customer Satisfaction
    </h2>
    <button className="bg-yellow-500 text-black px-6 py-3 my-11 hover:bg-yellow-600">
      Book Now
    </button>
  </div>
</section>
      {/* FAQ Section */}
      <section className="p-8">
        <h2 className="text-2xl font-bold text-center mb-8">FAQ</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              question: "What types of vehicles do you offer?",
              answer:
                "We offer a variety of vehicles including limousines, SUVs, and party buses.",
            },
            {
              question: "Do your prices include gratuity, taxes, and fees?",
              answer:
                "Yes, our prices are all-inclusive with no hidden charges.",
            },
            {
              question: "How far in advance should I book?",
              answer:
                "It’s best to book at least 2 weeks in advance to ensure availability.",
            },
            {
              question: "Do you offer point-to-point services or hourly rentals?",
              answer:
                "We offer both options based on your needs and preferences.",
            },
            {
              question: "What is your cancellation policy?",
              answer:
                "Cancellations within 6 hours of service incur a base fare charge. Contact us for details.",
            },
          ].map((item, index) => (
            <div key={index} className="border-b">
              <button
                className="w-full text-left py-4 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>
                <span>{activeFAQ === index ? "−" : "+"}</span>
              </button>
              {activeFAQ === index && (
                <p className="text-gray-600 mt-2">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default BookingInfo;