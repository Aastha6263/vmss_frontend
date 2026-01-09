import { useState } from "react";
import { Mail, Phone, MapPin, HelpCircle, Info, Rocket } from "lucide-react";

export default function Contact() {
  const init={name:"",email:"",contact:"",trainingType:"",city:"",country:"",message:""};
  const [f,set]=useState(init);
  const ch=e=>set(p=>({...p,[e.target.name]:e.target.value}));
  const sub=e=>(e.preventDefault(),console.log(f),set(init));

  const Inp=p=><input {...p} value={f[p.name]} onChange={ch}
    className="w-full rounded border px-3 py-2"/>;

  const Item=({I,t,l})=>(
    <div className="flex gap-4">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
        <I size={18} className="text-blue-600"/>
      </span>
      <div className="text-sm text-gray-600">
        <p className="font-semibold text-gray-900">{t}</p>
        {l.map((x,i)=><p key={i}>{x}</p>)}
      </div>
    </div>
  );

  return (
  <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
    <div className="mb-12 text-center">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
        <HelpCircle size={22}/>
      </div>
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-2 text-gray-600">Get in touch for any queries.</p>
    </div>

    <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">

      {/* FORM */}
      <div className="rounded-xl bg-white p-6 shadow">
        <h2 className="mb-5 flex items-center gap-2 font-semibold">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-600">
            <Mail size={14} className="text-white"/>
          </span> Contact Us
        </h2>

        <form onSubmit={sub} className="space-y-4">
          <Inp name="name" required placeholder="Full Name *"/>
          <Inp name="contact" required placeholder="Contact No *"/>

          <select name="trainingType" required value={f.trainingType}
            onChange={ch} className="w-full rounded border px-3 py-2">
            <option value="">Training Type *</option>
            <option>Corporate Training</option>
            <option>In-person Training</option>
          </select>

          {["city","country"].map(i=>(
            <Inp key={i} name={i} required placeholder={`${i[0].toUpperCase()+i.slice(1)} *`}/>
          ))}

          <Inp name="email" placeholder="Email (optional)"/>

          <textarea name="message" rows="4" value={f.message} onChange={ch}
            placeholder="Detailed message for us"
            className="w-full rounded border px-3 py-2"/>

          <button className="w-full rounded bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>

      {/* RIGHT */}
      <div className="space-y-6">
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-6 flex items-center gap-2 font-semibold">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
              <Info size={16} className="text-blue-600"/>
            </span> Get in Touch
          </h2>

          <div className="space-y-5">
            <Item I={Phone} t="Phone" l={["+91 9179944544","Mon–Fri 9AM–6PM IST"]}/>
            <Item I={Mail} t="Email" l={["vmsstech@gmail.com","We’ll respond within 24 hours"]}/>
            <Item I={MapPin} t="Office" l={["Sector A 781, Hinjewadi Phase 1","Pune, India 411057"]}/>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-xl bg-blue-600 p-6 text-white shadow">
          <h3 className="mb-2 flex items-center gap-2 font-semibold">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
              <Rocket size={16}/>
            </span> Ready to Get Started?
          </h3>
          <p className="mb-4 text-sm text-blue-100">
            Schedule a free consultation to discuss your training needs.
          </p>
          <button className="flex items-center gap-2 rounded border border-white px-4 py-2 text-sm hover:bg-white hover:text-blue-600">
            <Rocket size={14}/> Schedule Free Consultation
          </button>
        </div>
      </div>

    </div>
  </div>
  );
}
