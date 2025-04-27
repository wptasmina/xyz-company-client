import { Link } from "react-router-dom";

const PackagesSection = () => {
  const packages = [
    { id: 1, employees: 5, price: 5 },
    { id: 2, employees: 10, price: 8 },
    { id: 3, employees: 20, price: 15 },
  ];

  return (
    <section className="py-12 bg-white dark:bg-[#1e293b]">
      <div className="w-10/12 mx-auto text-center">
        <h2 data-aos="fade-up"
                        ata-aos="zoom-in-left"
                        data-aos-duration="1000" 
                        className="text-3xl font-bold mb-6 text-[#131c58] dark:text-white">Our Packages</h2>
        <p data-aos="fade-up"
           ata-aos="zoom-in-left"
          data-aos-duration="1000" 
          className="text-lg text-gray-700 dark:text-gray-400 mb-10 md:w-2/3 mx-auto w-full">
          Choose the package that best fits your business needs. Manage your team and assets efficiently with flexible plans.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div  data-aos="fade-up"
            ata-aos="zoom-in-left"
            data-aos-duration="1000"
              key={pkg.id}
              className="border border-gray-300 dark:border-gray-900 dark:bg-[#131e2e] rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="sm:text-2xl text-lg dark:text-gray-200 font-semibold mb-4">
                Maximum {pkg.employees} Employees
              </h3>
              <p className="text-xl font-bold text-green-600 mb-6">${pkg.price}</p>
             <Link to="/hr-register">
             <button className="bg-[#031278] text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                Choose Plan
              </button>
             </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
