import { useState } from "react";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! Thank you for contacting us.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-12">
      {/* Header */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-primaryColor mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 text-lg">
          We’d love to hear from you! Whether you have a question about our
          products, need assistance, or just want to share feedback — we’re
          here.
        </p>
      </div>

      {/* Main Content */}
      <div className="mt-10 grid md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-8 space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryColor"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryColor"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryColor"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-primaryColor text-white py-3 px-6 rounded-lg hover:bg-seconColor transition duration-300 font-semibold"
          >
            Send Message
          </button>
        </form>

        {/* Store Info */}
        <div className="space-y-6 bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primaryColor mb-4">
            Store Information
          </h2>
          <div>
            <p className="text-gray-700">
              <strong>📍 Address:</strong> 123 Market Street, Mogadishu, Somalia
            </p>
            <p className="text-gray-700">
              <strong>📞 Phone:</strong> +252 61 1234567
            </p>
            <p className="text-gray-700">
              <strong>✉ Email:</strong> support@store.com
            </p>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!..."
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              title="Store Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Contact