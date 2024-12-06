import { useState } from "react";


const VehiclesFAQ = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

return(
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
)
}

export default VehiclesFAQ;
