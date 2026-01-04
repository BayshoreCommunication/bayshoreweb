export default function WhyDoingThis() {
  return (
    <section className="w-full px-8 py-8 md:py-16">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Why Are We <span className="text-[#f97316]">Doing</span> This?
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          We flip the script on how you work with agencies.
        </p>

        {/* CARDS */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* OLD WAY */}
          <div className="rounded-2xl p-8 text-left bg-gradient-to-br from-[#fff7f4] to-[#fffdfc] shadow-lg">
            <span className="inline-block mb-4 rounded-full border border-red-300 px-4 py-1 text-xs text-red-500">
              The Old Way
            </span>

            <h3 className="font-semibold text-lg mb-4">
              The Typical Agency Model
            </h3>

            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="text-red-500">✕</span>
                Pay upfront, hope for results
              </li>
              <li className="flex gap-3">
                <span className="text-red-500">✕</span>
                Generic strategies from a playbook
              </li>
              <li className="flex gap-3">
                <span className="text-red-500">✕</span>
                Pressure to commit long-term
              </li>
              <li className="flex gap-3">
                <span className="text-red-500">✕</span>
                Often don’t understand your business
              </li>
            </ul>
          </div>

          {/* OUR WAY */}
          <div className="rounded-2xl p-8 text-left bg-gradient-to-br from-[#f6fff7] to-[#fdfffd] shadow-lg">
            <span className="inline-block mb-4 rounded-full border border-green-300 px-4 py-1 text-xs text-green-600">
              Our Way
            </span>

            <h3 className="font-semibold text-lg mb-4">
              The Typical Agency Model
            </h3>

            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="text-green-600">✔</span>
                Experience our process risk-free
              </li>
              <li className="flex gap-3">
                <span className="text-green-600">✔</span>
                See exactly where you stand
              </li>
              <li className="flex gap-3">
                <span className="text-green-600">✔</span>
                Get a custom strategy built for you
              </li>
              <li className="flex gap-3">
                <span className="text-green-600">✔</span>
                Decide for yourself, no pressure
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM ADVANTAGE CARD */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-[#fff9f5] to-[#ffffff] p-10 shadow-lg">
          <div className="flex justify-center mb-4">
            <span className="text-green-600 text-2xl">🛡️</span>
          </div>

          <h4 className="font-semibold text-lg mb-2">
            This is our competitive advantage.
          </h4>

          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            We're so confident in the quality of our work, we lead with free
            value and let results speak for themselves. We're not after every
            deal—we're after the right partnerships.
          </p>
        </div>
      </div>
    </section>
  );
}
