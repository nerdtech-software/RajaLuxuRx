

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Stress-Free Arrivals",
      description:
        "Arrive stress-free knowing you can rely on our limo services for timely and comfortable transfers to your destination.",
    },
    {
      title: "Seamless Meet and Greets",
      description:
        "Our professional drivers ensure a warm welcome and smooth experience from start to finish.",
    },
    {
      title: "Convenient Curbside Service",
      description:
        "Experience efficient curbside service tailored for comfort and convenience.",
    },
  ];

  const features = [
    "Our friendly all airport private car services",
    "Quick and efficient transfers",
    "Enjoy peace of mind",
    "Unforeseen cancellations",
    "Safety First",
    "Professionalism",
  ];

  return (
    <div>
      {/* Section: Why Choose Us */}
      <div className="text-center p-8 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Why choose our limo services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg text-left"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section: We Offer More */}
      <div className="p-8 bg-white">
        <h2 className="text-2xl font-bold text-center mb-4">
          We offer more than just car
        </h2>
        <p className="text-center mb-6">
          Focus on the journey, not the logistics—book sedan rentals for
          seamless transport with premium service!
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Feature List */}
          <ul className="list-disc list-inside space-y-2">
            {features.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
          {/* Placeholder for Image Carousel */}
          <div className="bg-gray-200 h-48 flex justify-center items-center">
            <p>Image Carousel Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
