export const metadata = {
  title: 'Contact | FA STUDIO GAMES',
  description: 'Get in touch with FA STUDIO GAMES for support, business inquiries, or just to say hi.',
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
          <span className="bg-gradient-to-r from-orange-400 to-amber-600 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Have a question about our games? Want to report a bug, or discuss a business opportunity? Drop us a line below.
        </p>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl">
        <form action="https://formspree.io/f/xojkolgz" method="POST" className="space-y-6">
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-300">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  id="first-name"
                  autoComplete="given-name"
                  required
                  className="block w-full rounded-xl border-0 bg-gray-950 py-3 px-4 text-white shadow-sm ring-1 ring-inset ring-gray-800 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6 transition-all"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-300">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastName"
                  id="last-name"
                  autoComplete="family-name"
                  required
                  className="block w-full rounded-xl border-0 bg-gray-950 py-3 px-4 text-white shadow-sm ring-1 ring-inset ring-gray-800 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6 transition-all"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-xl border-0 bg-gray-950 py-3 px-4 text-white shadow-sm ring-1 ring-inset ring-gray-800 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6 transition-all"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="block w-full rounded-xl border-0 bg-gray-950 py-3 px-4 text-white shadow-sm ring-1 ring-inset ring-gray-800 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6 transition-all"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-3.5 py-4 text-center text-sm font-semibold text-white shadow-lg hover:from-purple-400 hover:to-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 transition-all duration-300 hover:-translate-y-1 transform"
            >
              Send Message
            </button>
          </div>
        </form>


      </div>
    </div>
  );
}
