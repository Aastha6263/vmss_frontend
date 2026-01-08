import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Data:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-lg grid md:grid-cols-2 overflow-hidden">

        {/* ================= LEFT INFO ================= */}
        <div className="bg-indigo-600 text-white p-8 space-y-6">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-indigo-100">
            Feel free to contact us for any queries, feedback, or collaboration.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail />
              <span>support@example.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin />
              <span>Bhopal, Madhya Pradesh, India</span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT FORM ================= */}
        <div className="p-8">
          <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Write your message..."
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
