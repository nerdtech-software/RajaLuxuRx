import Logo from "../assets/62cb2645cb0ce4d6584c2d13d226fdba.png";

const Footer = () => {
  return (
    <footer className="bg-[#2e0a09] text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-between space-y-6 md:space-y-0">
          {/* Logo and Description */}
          <div className="w-full md:w-1/4 text-center md:text-left">
            <img src={Logo} alt="Logo" className="w-32 mx-auto md:mx-0 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Raja Luxury Limousine</h2>
            <p className="text-sm">
              We accomplish our goals with a dedicated team of professionals
              whose main priority is complete customer satisfaction. We provide
              full-service professional chauffeured services.
            </p>
          </div>
          {/* Contact Us */}
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start">
                <span className="mr-2">📞</span> 101 3456 789
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <span className="mr-2">📧</span> demo@gmail.com
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <span className="mr-2">📍</span> 132 Dartmouth Street Boston,
                Massachusetts 02156 United States
              </li>
            </ul>
          </div>
          {/* Vehicles */}
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4">Vehicles</h3>
            <ul className="space-y-2">
              <li>Sedan</li>
              <li>SUV</li>
              <li>Luxury Sprinter Van</li>
              <li>Stretch Limo</li>
              <li>Stretch SUV</li>
            </ul>
          </div>
          {/* Quick Links */}
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>About</li>
              <li>Blog</li>
              <li>Reservation</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white mt-6 pt-4 flex flex-wrap justify-between items-center">
          <p className="text-sm text-center md:text-left w-full md:w-auto mb-4 md:mb-0">
            © Copyright 2024, All Rights Reserved by Raja Luxury and nerdtech
          </p>
          <div className="flex justify-center md:justify-end space-x-4 w-full md:w-auto">
            <a href="#" aria-label="Facebook" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Instagram" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white hover:text-gray-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
