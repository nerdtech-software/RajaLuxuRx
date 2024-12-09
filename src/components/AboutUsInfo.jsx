import { Link } from "react-router-dom";

const AboutUsInfo = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[300px] md:h-[500px]"
        style={{
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/8ee7/6cee/f0e1aa0669c8bbe1fbad49c398671baa?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bn0Gv6KEBFlcmuyGZeX8t7DryCR-Y6Vf6RunxQOWnVQwckxyYe3usvO~aa-bp~IG-zQu-VF25s4l-RMaCRueRijIGxp3CgCU~3EmqXfrgU6GF-yOr9Dxmrac-xCkB7lhuAC5QLMjn6kTGPw8NNya~j4Bnrye45TdoHo92mTmg30EfNEYp1YcfbBjjeuwS8~cZ8h1xeuwZsQlYZadx8CDbEhblJ39~BTT62dfbsPic6QOZZ4MaFNHtfQdyX1pvdZIKU28iUyX5PEOnX4uit~kt~3ELNJl7HA2T03GKxlS2QSUB9i2hoM6B~YdDbXm6h5PUNvAm6CU4NTiUx~nGV~Z6w__')",
        }}
      >
        <div className="relative flex flex-col items-center justify-center text-center text-white h-full px-4">
          <h1 className="text-xl md:text-4xl font-bold">
            Elite O’Hare Limo Airport <br /> Services
          </h1>
          <Link to="/booking">
            <button className="mt-6 bg-yellow-600 text-white py-2 px-6 rounded-md hover:bg-yellow-700">
              Book Now
            </button>
          </Link>
        </div>
        <p className="text-center text-gray-700 text-sm md:text-lg bg-gray-200 py-4 px-4 md:px-10">
          We have got you covered! With our luxurious O’Hare Limo Airport
          Services, bid farewell to stressful commutes and costly parking costs.
          Let us handle the driving while you unwind and sit back, knowing that
          your trip to and from the O’Hare airport will go without a hitch.
        </p>
      </div>

      {/* Content Section */}
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-10">
        <div className="max-w-6xl w-full px-4 space-y-16">
          {/* First Row */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image */}
            <img
              src="https://s3-alpha-sig.figma.com/img/81a8/683f/075bcdf704ef9fbfa9f01073d27a7b93?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M-tdOCT5MH-BCZ0CC-3Rqsvikyc7oX24YsCgoJLKLDYTjw6biDqV3A34fSMOrvfoNwqXW3nAzOSp070pFTMxQeHx1kyherHR3SVmLhvxm-SX2~jVCBku2AgU6ByuONicScfzTSK-IIZKTpZYCnI4I7Bj32kU8NqskA-cQmU34t22tlM7s2zJ~2M~03jKZ5yfSEVc5mmEuiziyyiHt0D8kUSuqA4gpsIIf-ujW1lvvQhcaWdAk9hMyHEZtp8dpQVKoleA6cZ6SoJBMu2wRzz7IiFXyzu3~oxLWlWs-32By71ZxVuVXlzEEBenQUCw9p82ZhLHKlrI68AchzR2bzfR6A__"
              alt="Luxury Car"
              className="max-w-full md:max-w-[400px] rounded-lg shadow-lg"
            />
            {/* Text Content */}
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Hi88Limo – The Premier Limousine And Car Service In Chicago
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Experience luxury and convenience with Hi88Limo, the leading car
                and limo service in Chicago. Renowned for exceptional
                transportation services, you can enjoy being chauffeured in
                state-of-the-art premium cars.
              </p>
              <button className="bg-yellow-600 text-white py-2 px-6 rounded-md hover:bg-yellow-700">
                Book Now
              </button>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text Content */}
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Customized Limo Service To Suit Every Need
              </h2>
              <p className="text-gray-700 leading-relaxed">
                From airport commutes to special occasions, our reliable services
                extend throughout the tri-state area, offering luxury and comfort
                for in-state travel. Whether you are celebrating a milestone or
                need a limo for business, we ensure the best experience in the
                Tri-State area!
              </p>
              <button className="bg-yellow-600 text-white py-2 px-6 rounded-md hover:bg-yellow-700">
                Book Now
              </button>
            </div>
            {/* Image */}
            <img
              src="https://s3-alpha-sig.figma.com/img/81a8/683f/075bcdf704ef9fbfa9f01073d27a7b93?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M-tdOCT5MH-BCZ0CC-3Rqsvikyc7oX24YsCgoJLKLDYTjw6biDqV3A34fSMOrvfoNwqXW3nAzOSp070pFTMxQeHx1kyherHR3SVmLhvxm-SX2~jVCBku2AgU6ByuONicScfzTSK-IIZKTpZYCnI4I7Bj32kU8NqskA-cQmU34t22tlM7s2zJ~2M~03jKZ5yfSEVc5mmEuiziyyiHt0D8kUSuqA4gpsIIf-ujW1lvvQhcaWdAk9hMyHEZtp8dpQVKoleA6cZ6SoJBMu2wRzz7IiFXyzu3~oxLWlWs-32By71ZxVuVXlzEEBenQUCw9p82ZhLHKlrI68AchzR2bzfR6A__"
              alt="Limo Service"
              className="max-w-full md:max-w-[400px] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsInfo;
