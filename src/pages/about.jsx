export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8">

        {/* ========== HEADING ========== */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-600">
          About ShayariHub
        </h1>
        <p className="text-center text-gray-500 mt-2">
          A place where emotions turn into words 💫
        </p>

        {/* ========== CONTENT ========== */}
        <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">

          <p>
            <span className="font-semibold text-indigo-600">ShayariHub</span> is a
            creative platform built for people who love expressing emotions
            through words. Whether it’s love, pain, happiness, or motivation —
            shayari gives feelings a beautiful voice.
          </p>

          <p>
            This platform is specially designed for writers, readers, and poetry
            lovers who want to read, write, and share shayari in a simple and
            elegant way. Every word here comes from real emotions and real-life
            experiences.
          </p>

          <p>
            We believe that shayari is not just poetry — it’s a reflection of the
            heart. ShayariHub encourages creativity, honesty, and self-expression
            without limits.
          </p>

          <p>
            If you love writing or reading shayari, this place is for you.
            Connect with emotions, connect with people, and let your words speak.
          </p>
        </div>

        {/* ========== QUOTE ========== */}
        <div className="mt-10 bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded">
          <p className="italic text-gray-700">
            “Words have power — and shayari gives them soul.”
          </p>
        </div>
      </div>
    </div>
  );
}
