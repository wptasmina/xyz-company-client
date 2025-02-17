import { FaCheckCircle } from "react-icons/fa";

const features = [
  { title: "Real-Time Asset Tracking", description: "Monitor company assets instantly with live updates." },
  { title: "Returnable & Non-returnable Items", description: "Easily manage both returnable and consumable assets." },
  { title: "Asset Requests & Approvals", description: "Employees can request assets, and HR can approve with one click." },
  { title: "Secure Login & Authentication", description: "Advanced security ensures data protection and authorized access." },
  { title: "Detailed Analytics & Reports", description: "Gain insights with powerful data-driven reports." },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Why Choose Us?</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-3">Smart, secure, and efficient asset management for your business.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-6 md:px-0">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-4"
          >
            <FaCheckCircle className="text-[#673596] text-3xl flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-1">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
