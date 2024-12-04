

const LuxuryLimo = () => {
  return (
    <div className="bg-[#3D1F1F] text-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="lg:w-80 mt-8 lg:mt-0">
        <div className="relative">
          <img
            src="https://s3-alpha-sig.figma.com/img/50aa/9940/8e2a8562dab9c713170bfb6cfb85ce40?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IU2X0AyUzC7rDtgRwmh3gWlpsws0w3NFG42H6FUpwoArYIE0vjalmMgQl6z2KSEP53VRoOZ2u6ItNt3GSdm~Jg~SzlnkjFpb9jQcB0szNbiFmMlh4x78EdaOLzdXVjjXDj2YvDvQ90wVvR7nTuR2jDRMvKR-q4FQ05~vNdxid1igUv7BcNDNO5VOi8MSVddivPeUpqkXmewTmr0IWdLfR-AacR26N5A1pmfdqXzgJuQqb19TSrtb9qS~ML3ThzMsH~UYoEFjjsJwK6QJOCQMuOjuaCCKjuVpmmevADmSxOdcJSqiW1HeK6pvBaN9tDQXG-IGvWvfChLuh01xSzPL0g__"
            alt="Luxury Limo"
            className="rounded-lg shadow-lg"
            />
            <div className="absolute top-4 left-4 w-full h-full border-4 border-yellow-500 rounded-lg transform translate-x-2 translate-y-2"></div>
          </div>
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Raja Luxury Limousine
          </h2>
          <ul className="space-y-4">
            {[
              {
                title: "Luxury experience",
                description:
                  "Hi8Limo maintains a fleet of up-to-date vehicles to ensure comfort, reliability, and safety.",
              },
              {
                title: "Stress-free travel",
                description:
                  "Hi8Limo maintains a fleet of up-to-date vehicles to ensure comfort, reliability, and safety.",
              },
              {
                title: "Technology",
                description:
                  "Hi8Limo maintains a fleet of up-to-date vehicles to ensure comfort, reliability, and safety.",
              },
              {
                title: "Versatility",
                description:
                  "Hi8Limo maintains a fleet of up-to-date vehicles to ensure comfort, reliability, and safety.",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-500 mt-1 mr-2">●</span>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <button className="mt-8 bg-yellow-500 text-black px-6 py-3 mx-8  shadow-md hover:bg-yellow-600">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LuxuryLimo;
