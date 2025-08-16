function About(){
     const filterData = [
    {
      id: 1,
      name: "Garreth Smith",
      role: "MARKETING MANAGER",
      text:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Garreth Smith",
      role: "INTERFACE DESIGNER",
      text:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 3,
      name: "Alice Johnson",
      role: "SOFTWARE ENGINEER",
      text:
        "Coding is like poetry. It’s not just about logic, it’s also about elegance and readability.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 4,
      name: "John Doe",
      role: "PROJECT MANAGER",
      text: "Great teamwork and communication lead to the best results.",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
    },
  ];

  // Use id so it's unambiguous and easy to debug
  const [activeId, setActiveId] = useState(filterData[0].id);
  const active = filterData.find((t) => t.id === activeId) || filterData[0];

    return  (
    <div className="flex flex-col items-center justify-center p-8">
      {/* Selected testimonial */}
      <div className="max-w-lg text-center">
        <div className="flex justify-center">
          <img
            src={active.image}
            alt={active.name}
            className="w-20 h-20 rounded-full shadow-md"
          />
        </div>
        <p className="mt-6 text-gray-700 italic">{active.text}</p>
        <h3 className="mt-4 text-lg font-semibold">{active.name}</h3>
        <p className="text-sm text-gray-500 tracking-widest uppercase">
          {active.role}
        </p>
      </div>

      {/* Four radios */}
      <div className="flex gap-3 mt-6">
        {filterData.map((item) => (
          <label key={item.id} htmlFor={`t-${item.id}`} className="cursor-pointer">
            <input
              id={`t-${item.id}`}
              type="radio"
              name="testimonial"
              value={item.id}
              checked={activeId === item.id}
              onChange={(e) => setActiveId(Number(e.target.value))}
              className="sr-only"
            />
            <span
              className={`block w-3 h-3 rounded-full ${
                activeId === item.id ? "bg-orange-500" : "bg-gray-300"
              }`}
            />
          </label>
        ))}
      </div>
    </div>
  );
      
    
}

export default About