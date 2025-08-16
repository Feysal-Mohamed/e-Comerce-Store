function About(){
    const testimonials = [
    {
      id: 1,
      name: "Garreth Smith",
      role: "MARKETING MANAGER",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Garreth Smith",
      role: "INTERFACE DESIGNER",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image:
        "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 3,
      name: "Alice Johnson",
      role: "SOFTWARE ENGINEER",
      text: "Coding is like poetry. It’s not just about logic, it’s also about elegance and readability.",
      image:
        "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

    return  (
    <div className="flex flex-col items-center justify-center p-8">
      {/* Display Selected Testimonial */}
      <div className="max-w-lg text-center">
        <div className="flex justify-center">
          <img
            src={testimonials[selected].image}
            alt={testimonials[selected].name}
            className="w-20 h-20 rounded-full shadow-md"
          />
        </div>
        <p className="mt-6 text-gray-700 italic">
          {testimonials[selected].text}
        </p>
        <h3 className="mt-4 text-lg font-semibold">
          {testimonials[selected].name}
        </h3>
        <p className="text-sm text-gray-500 tracking-widest uppercase">
          {testimonials[selected].role}
        </p>
      </div>

      {/* Radio Buttons */}
      <div className="flex gap-3 mt-6">
        {testimonials.map((_, index) => (
          <label key={index}>
            <input
              type="radio"
              name="testimonial"
              className="hidden peer"
              checked={selected === index}
              onChange={() => setSelected(index)}
            />
            <span className={`w-3 h-3 rounded-full block cursor-pointer ${
              selected === index ? "bg-orange-500" : "bg-gray-300"
            }`}></span>
          </label>
        ))}
      </div>
    </div>
  );
      
    
}

export default About