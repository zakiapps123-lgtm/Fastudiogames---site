export const metadata = {
  title: 'Privacy Policy | FA STUDIO GAMES',
  description: 'Our privacy policy and data practices.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8">
        Privacy Policy
      </h1>
      <div className="space-y-6 text-gray-300">
        <p>
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">1. Information We Collect</h2>
          <p>
            When you contact us through our website, we collect the personal information you give us such as your name, email address, and the contents of your message. We use this information solely to respond to your inquiries and support requests.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Provide, operate, and maintain our website and games.</li>
            <li>Improve, personalize, and expand our offerings.</li>
            <li>Understand and analyze how you use our website.</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">3. Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">4. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us via our Contact page.
          </p>
        </section>
      </div>
    </div>
  );
}
