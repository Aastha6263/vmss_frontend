import { useState } from "react";
import { Mail, Phone, MapPin, HelpCircle } from "lucide-react";

export default function Contact() {
  const init = { name:"", email:"", contact:"", trainingType:"", city:"", country:"", message:"" };
  const [f,setF] = useState(init);
  const ch = e => setF(p => ({...p,[e.target.name]:e.target.value}));
  const sub = e => { e.preventDefault(); console.table(f); setF(init); };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="text-center mb-12">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
          <HelpCircle size={22}/>
        </div>
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-2 text-gray-600">Get in touch for any queries and concerns.</p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {/* FORM */}
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-4 flex items-center gap-2 font-semibold">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-600">
              <Mail size={14} className="text-white"/>
            </span>
            Contact Us
          </h2>

          <form onSubmit={sub} className="space-y-3">
            <input name="name" required placeholder="Name *" value={f.name} onChange={ch} className="w-full rounded border px-3 py-2"/>
            <input name="email" placeholder="Email" value={f.email} onChange={ch} className="w-full rounded border px-3 py-2"/>
            <input name="contact" required placeholder="Contact No *" value={f.contact} onChange={ch} className="w-full rounded border px-3 py-2"/>
            <select name="trainingType" required value={f.trainingType} onChange={ch} className="w-full rounded border px-3 py-2">
              <option value="">Select Training Type *</option>
              <option>Corporate Training</option>
              <option>In-person Training</option>
            </select>
            <input name="city" required placeholder="City *" value={f.city} onChange={ch} className="w-full rounded border px-3 py-2"/>
            <input name="country" required placeholder="Country *" value={f.country} onChange={ch} className="w-full rounded border px-3 py-2"/>
            <textarea name="message" rows="3" placeholder="Detailed message for us" value={f.message} onChange={ch} className="w-full rounded border px-3 py-2"/>
            <button className="w-full rounded bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700 active:bg-white active:text-blue-600">
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="mb-4 flex items-center gap-2 font-semibold">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-100">
                <HelpCircle size={14} className="text-blue-600"/>
              </span>
              Get in Touch
            </h2>

            <div className="space-y-4 text-gray-600">
              <div className="flex gap-3">
                <Phone size={16} className="text-blue-600"/>
                <div><p className="font-medium text-gray-800">Talk with us</p><p>+91 9179944544</p></div>
              </div>
              <div className="flex gap-3">
                <Mail size={16} className="text-blue-600"/>
                <div><p className="font-medium text-gray-800">24/7 Support</p><p>vmsstech@gmail.com</p></div>
              </div>
              <div className="flex gap-3">
                <MapPin size={16} className="text-blue-600"/>
                <div><p className="font-medium text-gray-800">Office</p><p>Pune, India</p></div>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white shadow">
            <h3 className="mb-2 flex items-center gap-2 font-semibold">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/20">
                <HelpCircle size={14}/>
              </span>
              Ready to Get Started?
            </h3>
            <p className="mb-4 text-sm text-blue-100">
              Schedule a free consultation to discuss your training needs.
            </p>
            <button className="rounded border border-white px-4 py-2 text-sm hover:bg-white hover:text-blue-600">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
