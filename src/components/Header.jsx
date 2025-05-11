function Header() {
    return (
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center relative shadow-md">
              <span className="absolute bg-white rounded-sm" style={{ width: '10px', height: '60%', left: '50%', top: '20%', transform: 'translateX(-50%)' }}></span>
              <span className="absolute bg-white rounded-sm" style={{ height: '10px', width: '60%', top: '50%', left: '20%', transform: 'translateY(-50%)' }}></span>
            </div>
            <div>
              <h1 className="heading-font text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                Team Kindness
              </h1>
              <p className="text-gray-600 font-medium text-sm">
                Home Care & Clinic
              </p>
            </div>
          </div>
          {/* <div className="hidden md:block">
            <div className="flex items-center space-x-2 bg-indigo-100 px-4 py-2 rounded-full">
              <i className="fas fa-phone-alt text-indigo-600"></i>
              <a href="tel:7733094864" className="font-semibold text-indigo-700 hover:text-indigo-900 transition">Emergency: 7733094864</a>
            </div>
          </div> */}
        </div>
      </header>
    );
  }
  
  export default Header;
  