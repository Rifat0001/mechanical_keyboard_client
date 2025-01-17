import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";

const testimonials = [
  {
    image: "https://media.bizj.us/view/img/12445033/ashleyparsons*1500xx3648-3648-745-0.jpg",
    name: "John Doe",
    profession: "Web Developer",
    review: "Excellent website design and development!",
  },
  {
    image: "https://media.themoviedb.org/t/p/w500/kRFtw6MeT3AzOdE3TWpkxlQwMbb.jpg",
    name: "Jane Smith",
    profession: "Marketing Manager",
    review: "Impressive marketing campaign results!",
  },
  {
    image: "https://m.media-amazon.com/images/S/amzn-author-media-prod/8prj7ndd69i4sbktd6tkqmhakh.jpg",
    name: "Michael Johnson",
    profession: "Sales Consultant",
    review: "Outstanding customer service and support!",
  },
  {
    image: "https://media.istockphoto.com/id/1040964930/photo/opportunity-doesnt-hang-around-neither-should-you.jpg?s=612x612&w=0&k=20&c=7VX1J5vcwhVB55O7eNcb6J-Mp9O7Y7llMMiR9O8zIcU=",
    name: "Emily Brown",
    profession: "Project Manager",
    review: "Efficient project management and delivery!",
  }
];


const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplayInterval,] = useState(5000); // 5 seconds

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
        <Slide>
          <h2 className="text-3xl font-bold text-center">Customer <span className="text-violet-500" >Reviews</span> </h2></Slide>

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
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-violet-500 text-white rounded-full p-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clip-rule="evenodd" />
            </svg>


          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-violet-500 text-white rounded-full p-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
            </svg>

          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
