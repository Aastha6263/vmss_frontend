import { useEffect, useState } from "react";

export default function TrustedBy() {
  // 🔹 API READY (replace later with backend call)
  const [companies] = useState([
    "Microsoft","Adobe","Capgemini","Oracle","TCS","Amazon","HCL","Cisco",
    "Cognizant","VMware","PayPal","Salesforce","Google","Meta","Tech Mahindra",
    "Zoho","Wipro","Swiggy","Infosys","IBM","SAP","Samsung","Dell","HP",
    "eBay","Netflix","SingTel"
  ]);

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* 🔹 TOP MESSAGE */}
        <h2 className="text-3xl font-bold text-gray-900">
          Trusted by 50+ companies and thousands of learners worldwide
        </h2>
        <p className="mt-2 text-gray-600">
          Our Alumni powering the world's leading Organizations
        </p>

        {/* 🔹 AUTO MOVING SLIDER */}
        <div className="relative mt-12 w-full overflow-hidden">
          <div className="flex animate-slide gap-10 whitespace-nowrap">
            {[...companies, ...companies].map((c, i) => (
              <div
                key={i}
                className="min-w-[160px] rounded-lg bg-gray-50 px-6 py-4
                           text-gray-700 font-semibold shadow-sm"
              >
                {c}
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 STATS */}
        <div className="mt-16 grid gap-10 sm:grid-cols-3 text-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">200+</h3>
            <p className="text-gray-600 mt-1">
              Emerging & Core Technology Training Programs
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">1100+</h3>
            <p className="text-gray-600 mt-1">Learners Trained</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">98%</h3>
            <p className="text-gray-600 mt-1">Success Rate</p>
          </div>
        </div>

      </div>

      {/* 🔹 SLIDER ANIMATION */}
      <style jsx>{`
        .animate-slide {
          animation: slide 30s linear infinite;
        }
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
