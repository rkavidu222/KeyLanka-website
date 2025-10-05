import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from 'lucide-react';
export function Testimonials() {
  const testimonials = [{
    id: 1,
    content: "ShieldForce has transformed our company's security posture. Their team is professional, vigilant, and goes above and beyond to ensure our premises are secure 24/7.",
    author: 'Michael Thompson',
    role: 'Operations Director, TechCorp Inc.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
  }, {
    id: 2,
    content: 'We hired ShieldForce for our annual conference with over 5,000 attendees. Their team managed security flawlessly, from access control to emergency protocols. Highly recommended!',
    author: 'Sarah Johnson',
    role: 'Event Manager, Global Events',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
  }, {
    id: 3,
    content: "As a residential complex with 200+ units, security is our top priority. ShieldForce's integrated systems and patrol services have reduced incidents by 90% in just six months.",
    author: 'Robert Chen',
    role: 'Property Manager, Lakeside Residences',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
  }];
  const [activeIndex, setActiveIndex] = useState(0);
  const nextTestimonial = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            What Our Clients Say
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Hear from businesses and individuals who trust our security services
            to protect what matters most.
          </p>
        </div>
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col items-center text-center">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-6 w-6 text-yellow-400 fill-current" />)}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8">
                "{testimonials[activeIndex].content}"
              </blockquote>
              <div className="flex items-center flex-col">
                <img src={testimonials[activeIndex].avatar} alt={testimonials[activeIndex].author} className="w-16 h-16 rounded-full object-cover border-2 border-blue-600 mb-4" />
                <div className="text-center">
                  <p className="font-bold text-blue-900">
                    {testimonials[activeIndex].author}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-4">
            <button onClick={prevTestimonial} className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-3 rounded-full transition-colors" aria-label="Previous testimonial">
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => <button key={index} onClick={() => setActiveIndex(index)} className={`w-3 h-3 rounded-full transition-colors ${index === activeIndex ? 'bg-blue-600' : 'bg-blue-200'}`} aria-label={`Go to testimonial ${index + 1}`} />)}
            </div>
            <button onClick={nextTestimonial} className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-3 rounded-full transition-colors" aria-label="Next testimonial">
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>;
}