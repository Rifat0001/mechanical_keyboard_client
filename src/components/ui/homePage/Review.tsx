import { useEffect, useState } from "react";

const testimonials = [
  {
    image:
      "https://media.bizj.us/view/img/12445033/ashleyparsons*1500xx3648-3648-745-0.jpg",
    name: "Sophia Martinez",
    profession: "Graphic Designer",
    review: "Fast service! They replaced my keycaps and it looks fantastic.",
  },
  {
    image:
      "https://media.themoviedb.org/t/p/w500/kRFtw6MeT3AzOdE3TWpkxlQwMbb.jpg",
    name: "Oliver Lee",
    profession: "Content Creator",
    review:
      "Excellent customer service! My RGB keyboard shines like it just came out of the box.",
  },
  {
    image:
      "https://m.media-amazon.com/images/S/amzn-author-media-prod/8prj7ndd69i4sbktd6tkqmhakh.jpg",
    name: "Emma Wilson",
    profession: "Marketing Specialist",
    review:
      "Very professional repair. My keyboard is now quieter and smoother.",
  },
  {
    image:
      "https://media.istockphoto.com/id/1040964930/photo/opportunity-doesnt-hang-around-neither-should-you.jpg?s=612x612&w=0&k=20&c=7VX1J5vcwhVB55O7eNcb6J-Mp9O7Y7llMMiR9O8zIcU=",
    name: "Ava Thompson",
    profession: "Product Manager",
    review:
      "Great pricing for such quality service. My keyboard feels responsive and tactile!",
  }
];

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplayInterval, setAutoplayInterval] = useState(5000); // 5 seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, autoplayInterval);

    return () => clearInterval(intervalId);
  }, [autoplayInterval]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="md:px-12 w-full p-4 my-16 rounded-md">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Customer <span className="text-violet-500" >Reviews</span> </h2>

        <div className="relative mt-10">
          <div className="flex justify-center p-4 space-x-4">
            {testimonials
              .slice(currentIndex, currentIndex + (window.innerWidth >= 768 ? 2 : 1))
              .map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-transparent border border-gray-300 shadow-lg rounded-lg p-6 flex flex-col items-center w-[500px]"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                  <p className="text-lg font-semibold mb-1 text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600 mb-2">{testimonial.profession}</p>
                  <p className="text-gray-600 text-center">"{testimonial.review}"</p>
                </div>
              ))}
          </div>

          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#2b3440] text-white rounded-full px-5 p-4"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#2b3440] text-white rounded-full px-5 p-4"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
