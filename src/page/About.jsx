

const About = () => {
  return (
    
    <div>
      <div
    className="relative bg-cover bg-center h-[400px] md:h-[500px]"
    style={{
      backgroundImage:
        "url('https://s3-alpha-sig.figma.com/img/8ee7/6cee/f0e1aa0669c8bbe1fbad49c398671baa?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bn0Gv6KEBFlcmuyGZeX8t7DryCR-Y6Vf6RunxQOWnVQwckxyYe3usvO~aa-bp~IG-zQu-VF25s4l-RMaCRueRijIGxp3CgCU~3EmqXfrgU6GF-yOr9Dxmrac-xCkB7lhuAC5QLMjn6kTGPw8NNya~j4Bnrye45TdoHo92mTmg30EfNEYp1YcfbBjjeuwS8~cZ8h1xeuwZsQlYZadx8CDbEhblJ39~BTT62dfbsPic6QOZZ4MaFNHtfQdyX1pvdZIKU28iUyX5PEOnX4uit~kt~3ELNJl7HA2T03GKxlS2QSUB9i2hoM6B~YdDbXm6h5PUNvAm6CU4NTiUx~nGV~Z6w__')", // Replace with your car image URL
    }}
  >
    {/* Overlay for Darkening Background */}
  

    {/* Centered Content */}
    <div className="relative flex flex-col items-center justify-center text-center text-white h-full">
      <h1 className="text-2xl md:text-4xl font-bold">
      Elite O’Hare Limo Airport <br />Services
      </h1>
      <button className="mt-6 bg-yellow-600 text-white py-2 px-6  hover:bg-yellow-700">
        Book Now
      </button>
    </div>
    <p className="text-center text-gray-700 text-lg bg-gray-200 ">
              We have got you covered! With our luxurious O’Hare Limo Airport
              Services, bid farewell to stressful <br /> commutes and costly parking 
              costs. Let us handle the driving while you unwind and sit back,
              knowing that <br /> your trip to and from the O’Hare airport will go
              without a hitch.
            </p>
    </div>
  
        <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
          
          <div className="max-w-6xl w-full space-y-10">
            {/* Top Description Section */}
            
    
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-10">
              {/* Image */}
              <img
                src="https://via.placeholder.com/400x250" // Replace with the actual car image URL
                alt="Luxury Car"
                className=" shadow-lg"
              />
              {/* Text Content */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  Hi88Limo – The Premier Limousine And Car Service In Chicago
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Experience luxury and convenience with Hi88Limo, the leading car
                  and limo service in Chicago. Renowned for exceptional
                  transportation services, you can enjoy being chauffeured in
                  state-of-the-art premium cars. With professional drivers, a fleet
                  of high-quality vehicles, and affordable rates, Hi88Limo ensures
                  that your trip is not only luxurious but also seamless and
                  stress-free.
                </p>
                <button className="bg-yellow-600 text-white py-2 px-6  hover:bg-yellow-700">
                  Book Now
                </button>
              </div>
            </div>
    
            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
              {/* Text Content */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  Customized Limo Service To Suit Every Need
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  From airport commutes to special occasions, our reliable services
                  extend throughout the tri-state area, offering luxury and comfort
                  for in-state travel. Whether you are celebrating a milestone or
                  need a limo for business, we ensure the best experience in the
                  Tri-State area! Think of us when traveling to the O’Hare or want
                  the perfect transportation for your events tailored to our
                  clients’ needs to the fullest.
                </p>
                <button className="bg-yellow-600 text-white py-2 px-6  hover:bg-yellow-700">
                  Book Now
                </button>
              </div>
              {/* Image */}
              <img
                src="https://via.placeholder.com/400x250" // Replace with the actual car image URL
                alt="Limo Service"
                className=" shadow-lg"
              />
            </div>
          </div>
        </div>
        </div>
        
     
  )
}

export default About