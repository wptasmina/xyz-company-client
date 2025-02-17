import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'John Doe',
    company: 'Tech Solutions Ltd.',
    feedback: 'This system has transformed the way we manage company assets. Highly recommended!',
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    name: 'Sarah Lee',
    company: 'InnovateX Inc.',
    feedback: 'A must-have for businesses. The real-time tracking feature is a game-changer!',
    image: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    name: 'Michael Smith',
    company: 'Enterprise Hub',
    feedback: 'Simple, efficient, and powerful. Our HR team loves it!',
    image: 'https://randomuser.me/api/portraits/men/3.jpg'
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8 px-4">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 shadow-lg rounded-2xl flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
              <p className="text-gray-700 mb-4">{testimonial.feedback}</p>
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full border-2 border-blue-500 mb-2" />
              <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
