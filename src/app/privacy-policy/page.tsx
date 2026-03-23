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
      <div className="space-y-8 text-gray-300 leading-relaxed">
        <p className="text-lg">
          At Fa Studio Games, we believe in a simple and private gaming experience. This Privacy Policy explains our commitment to your data security while using our mobile applications.
        </p>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-white">1. Zero Data Collection</h2>
          <p className="mb-2">We respect your privacy. Our games do not collect, store, or share any personal or non-personal information from your device.</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>We do not collect names, email addresses, phone numbers, or locations.</li>
            <li>We do not use tracking identifiers or analytics tools.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-white">2. No Advertising</h2>
          <p className="mb-2">To provide a clean and uninterrupted user experience, our games are 100% Ad-Free.</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>We do not display third-party advertisements.</li>
            <li>We do not share any information with advertising networks because we do not use them.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-white">3. Children’s Privacy</h2>
          <p>
            Our games are designed for all ages and are safe for children. Since we do not collect any data, our applications are fully compliant with privacy laws such as COPPA (Children&apos;s Online Privacy Protection Act).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-white">4. Third-Party Links</h2>
          <p>
            Our games are self-contained and do not contain links to external websites or third-party services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-white">5. Changes to This Policy</h2>
          <p>
            We may update this policy occasionally. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-white">6. Contact Us</h2>
          <p className="mb-4">If you have any questions regarding our privacy practices, please contact us at:</p>
          <div className="space-y-2 bg-gray-900/50 p-6 rounded-xl border border-gray-800">
            <p>
              <strong className="text-white">Email:</strong>{' '}
              <a href="mailto:contact@fastudiogames.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                contact@fastudiogames.com
              </a>
            </p>
            <p>
              <strong className="text-white">Website:</strong>{' '}
              <a href="https://fastudiogames.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
                https://fastudiogames.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
