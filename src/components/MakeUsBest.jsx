import { Link } from "react-router-dom"


const MakeUsBest = () => {
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
      Elite O’Hare Limo Airport <br />Services
      </h1>
      <Link to="/booking"><button className="mt-6 bg-yellow-600 text-white py-2 px-6  hover:bg-yellow-700">
            Book Now
          </button></Link>
    </div>
    </div>
      <div className="text-center p-8 bg-gray-100">
    <h3 className="text-sm font-bold text-gray-500 mb-2 uppercase">
      Best Rental Car
    </h3>
    <h1 className="text-3xl font-bold mb-4">
      Why Choose Our Chicago Limo Rental And Car Services
    </h1>
    <p className="max-w-2xl mx-auto text-gray-700 mb-6">
      Experience Chicago in unparalleled style and comfort with H&B Limo, your
      premier destination for luxurious limousine services. Whether youre
      seeking a grand entrance for a special occasion or a stress-free ride to
      the airport.
    </p>
    <div className="p-8 bg-white shadow-lg rounded-lg max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">What Makes Us Best</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="h-96 flex justify-center items-center" style={{
      backgroundImage:
        "url('https://s3-alpha-sig.figma.com/img/13c0/b7a1/004be7614446e6282e2cfd0e2ba3dd85?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=brC9xmU9hYTaIamsdFIdOtKnsaJdG7ndhomhWzSlgImnOK4Uv3CufWmoDkduowfdxqA9ADwXGXiZ8RS~8adMmhM1YCPCqosVi1wIoWMXyGdLWUF03xyEdMVnBxcqImXD34M8GqSnEkeXsgabsJtRUsz0W0ghgPWX34UukGfR3dSXmQTj6NVSzZ822xMM5rKu76gX5XMnbkdU2sLd~8mkD1ZXOI4bzXXN~9WjGJphB84~~rEZ4QNS9SjLfJqsAJ~UHsIB50Vq1FK09lCs3RbPlZ3L4mGYsvDJHbtiGdR~EZnJggUiOjDQvpbWGFzmFfThgD4oiilcp~bRubg2xdQmBQ__')", // Replace with your car image URL
    }}>
         
        </div>
        <ul className="space-y-4 text-left">
          {[
            {
              title: "Punctuality",
              description:
                "We understand the importance of time. Our experienced chauffeurs ensure you arrive promptly and safely, every time.",
            },
            {
              title: "Professionalism",
              description:
                "Expect courteous, knowledgeable drivers who navigate the city with ease.",
            },
            {
              title: "Unmatched Comfort",
              description:
                "Our meticulously maintained fleet guarantees a relaxing and enjoyable experience.",
            },
            {
              title: "Effortless Convenience",
              description:
                "From meet-and-greet services to curbside drop-off, we make your transportation a breeze.",
            },
          ].map((item, index) => (
            <li key={index}>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 text-center">
        <button className="bg-yellow-500 text-white py-2 px-6 rounded-md font-semibold shadow hover:bg-yellow-600 transition">
          Book Now
        </button>
      </div>
    </div>
    </div>
    </div>

  )
}

export default MakeUsBest