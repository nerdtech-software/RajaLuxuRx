
const WhyChooseUsServices = () => {
  
    const features = [
        {
          title: "Stress-Free Arrivals",
          description:
            "We monitor your flights and ensure our chauffeurs are ready to meet you, even if your schedule changes.",
        },
        {
          title: "Seamless Meet and Greet",
          description:
            "Our chauffeurs will meet you at arrivals with a personalized sign and assist you with your luggage.",
        },
        {
          title: "Convenient Curbside Service",
          description:
            "Quickly access your ride with our efficient curbside pickup service, saving you time and hassle.",
        },
      ];
    
      return (
        <section className="bg-[#3D1F1F] text-white py-10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why choose our limo services</h2>
            <div className="flex justify-center gap-6 ">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="  shadow-lg bg-yellow-500 py-10 w-72 "
                >
                  <h3 className="text-xl font-semibold py-14">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}

export default WhyChooseUsServices