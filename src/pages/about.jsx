import { div } from "framer-motion/client";
import { useEffect, useRef, useState } from "react";

function About() {
  const stats = [
    { id: 1, value: 10000, label: "HAPPY CUSTOMERS" },
    { id: 2, value: 100, label: "BRANCHES" },
    { id: 3, value: 1000, label: "PARTNER" },
    { id: 4, value: 100, label: "AWARDS" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 1));
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (visible) {
      stats.forEach((stat, index) => {
        let start = 1;
        const duration = 2000;
        const stepTime = Math.max(Math.floor(duration / stat.value), 10);

        const counter = setInterval(() => {
          start += Math.ceil(stat.value / (duration / stepTime));
          if (start >= stat.value) {
            start = stat.value;
            clearInterval(counter);
          }
          setCounts((prev) => {
            const updated = [...prev];
            updated[index] = start;
            return updated;
          });
        }, stepTime);
      });
    }
  }, [visible]);

  const filterData = [
    {
      id: 1,
      group: [
        { id: "1a", name: "Garreth Smith", role: "MANAGER", image: "https://randomuser.me/api/portraits/men/32.jpg" },
        { id: "1b", name: "Alice", role: "ENGINEER", image: "https://randomuser.me/api/portraits/women/65.jpg" },
        { id: "1c", name: "John", role: "DESIGNER", image: "https://randomuser.me/api/portraits/men/45.jpg" },
        { id: "1d", name: "Sophia", role: "DEV", image: "https://randomuser.me/api/portraits/women/12.jpg" },
      ],
    },
    {
      id: 2,
      group: [
        { id: "2a", name: "Michael", role: "MARKETING", image: "https://randomuser.me/api/portraits/men/75.jpg" },
        { id: "2b", name: "Emma", role: "HR", image: "https://randomuser.me/api/portraits/women/33.jpg" },
        { id: "2c", name: "David", role: "CEO", image: "https://randomuser.me/api/portraits/men/88.jpg" },
        { id: "2d", name: "Linda", role: "ACCOUNTANT", image: "https://randomuser.me/api/portraits/women/45.jpg" },
      ],
    },
    {
      id: 3,
      group: [
        { id: "3a", name: "Oliver", role: "MANAGER", image: "https://randomuser.me/api/portraits/men/90.jpg" },
        { id: "3b", name: "Sophia", role: "ANALYST", image: "https://randomuser.me/api/portraits/women/66.jpg" },
        { id: "3c", name: "Ethan", role: "CTO", image: "https://randomuser.me/api/portraits/men/21.jpg" },
        { id: "3d", name: "Grace", role: "UX DESIGNER", image: "https://randomuser.me/api/portraits/women/11.jpg" },
      ],
    },
    {
      id: 4,
      group: [
        { id: "4a", name: "Henry", role: "TEAM LEAD", image: "https://randomuser.me/api/portraits/men/13.jpg" },
        { id: "4b", name: "Chloe", role: "PM", image: "https://randomuser.me/api/portraits/women/72.jpg" },
        { id: "4c", name: "Lucas", role: "DEVELOPER", image: "https://randomuser.me/api/portraits/men/18.jpg" },
        { id: "4d", name: "Mia", role: "UI DESIGNER", image: "https://randomuser.me/api/portraits/women/29.jpg" },
      ],
    },
  ];

  const [activeId, setActiveId] = useState(1);
  const activeGroup = filterData.find((g) => g.id === activeId);

  return (
    <div className="flex flex-col items-center px-4 sm:px-8 py-8 space-y-12">
      <div
      className="relative h-[200px] flex items-center w-full justify-center bg-center  bg-cover"
      style={{ backgroundImage: "url('https://themewagon.github.io/cozastore/images/product-05.jpg')" }}// Change path to your image
>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <h1 className="relative z-10 text-white text-5xl font-bold">About</h1>
    </div>
   
      <div
        ref={sectionRef}
        className="relative bg-cover bg-center w-full mb-10 h-[200px] md:h-[300px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1350&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center text-black font-bold">
          {stats.map((stat, index) => (
            <div key={stat.id}>
              <h2 className="text-xl sm:text-2xl md:text-3xl">{counts[index].toLocaleString()}</h2>
              <p className="text-xs sm:text-sm tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* =======================
          Testimonials Section
          ======================= */}
      <h1 className="text-2xl sm:text-3xl font-semibold">Team Member & Ideas</h1>
      <div className="flex flex-col items-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
          {activeGroup.group.map((person) => (
            <div
              key={person.id}
              className="p-4 border w-full sm:w-80 rounded-lg shadow-md text-center mx-auto"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full shadow-md"
              />
              <h3 className="mt-3 font-semibold">{person.name}</h3>
              <p className="text-sm text-gray-500">{person.role}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-6">
          {filterData.map((group) => (
            <label key={group.id} className="cursor-pointer">
              <input
                type="radio"
                name="testimonialGroup"
                value={group.id}
                checked={activeId === group.id}
                onChange={() => setActiveId(group.id)}
                className="sr-only"
              />
              <span
                className={`block w-3 h-3 rounded-full ${
                  activeId === group.id ? "bg-orange-500" : "bg-gray-300"
                }`}
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
