import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-amber-50">
      <header className="border-b border-amber-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto max-w-3xl px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-amber-600 hover:text-amber-700 font-medium">
            ← Capy's Journey
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12 text-gray-800">
        <h1 className="text-4xl text-gray-900 mb-8">Privacy Policy</h1>

        <p className="mb-8">
          This privacy policy applies to the Capys Journey app (hereby referred to as "Application") for mobile devices that was created by Rohan Vyas (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".
        </p>

        <h2 className="text-2xl text-gray-900 mt-10 mb-4">Information Collection and Use</h2>
        <p className="mb-4">
          The Application collects information when you download and use it. This information may include information such as
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Your device's Internet Protocol address (e.g., IP address)</li>
          <li>The pages of the Application that you visit, the time and date of your visit, and the time spent on those pages</li>
          <li>The time spent on the Application</li>
          <li>The operating system you use on your mobile device</li>
        </ul>
        <p className="mb-4">
          The Application does not gather precise information about the location of your mobile device.
        </p>
        <p className="mb-4">
          The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions. For users under 13, any required notices or promotional messages are sent only to the parent or guardian's verified email and are never based on behavioral profiling, personalized tracking, or persistent identifiers from the child user.
        </p>
        <p className="mb-4">
          For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information, including email, age, and username. For users under 13, we may only request email from a verified parent or guardian during onboarding. We never request or require this information from the child user. Child profiles remain anonymous and use non-personally identifiable usernames. The information that the Service Provider requests will be retained by them and used as described in this privacy policy.
        </p>
        <p className="mb-4">
          For child profiles under 13, automatically collected technical information (such as IP logs from Firebase, Unity, or device diagnostics) is never associated with the child's profile, stored for tracking purposes, or used for personalized analytics. Only anonymized or on-device progress data is stored for the child experience.
        </p>

        <h2 className="text-2xl text-gray-900 mt-10 mb-4">Third Party Access</h2>
        <p className="mb-4">
          Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.
        </p>
        <p className="mb-4">
          Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Google Analytics for Firebase</li>
          <li>Firebase Crashlytics</li>
          <li>Unity</li>
          <li>Session Replay (Consent-Gated for Users Under 13)</li>
        </ul>
        <p className="mb-4">
          We use PostHog for product analytics, which may include session replay. For users under 13, session replay is disabled by default and is only enabled after verifiable parental consent (VPC) has been obtained from a parent or legal guardian. When enabled for child users, PostHog is configured to collect replay data in a strictly anonymized mode, meaning it:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>does not capture IP addresses, device IDs, keystrokes, or any persistent identifiers,</li>
          <li>is not linked to a child profile, and</li>
          <li>is not used for behavioral profiling, cross-app tracking, or personalized advertising.</li>
        </ul>
        <p className="mb-4">
          Session replay data for users under 13 is retained only for a limited, short period (no longer than 30 days) and is automatically deleted thereafter. For users 13 and older, replay may be used under standard disclosures and security safeguards, and is only for improving user experience and debugging the Application.
        </p>
        <p className="mb-4">
          The Service Provider may disclose User Provided and Automatically Collected Information:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
          <li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
          <li>with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
        </ul>

        <h2 className="text-2xl text-gray-900 mt-10 mb-4">Opt-Out Rights</h2>
        <p className="mb-4">
          You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.
        </p>

        <h2 className="text-2xl text-gray-900 mt-10 mb-4">Data Retention Policy</h2>
        <p className="mb-4">
          The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at rohanv2006@gmail.com and they will respond in a reasonable time.
        </p>

        <h2 className="text-2xl text-gray-900 mt-10 mb-4">Children</h2>
        <h3 className="text-xl text-gray-900 mt-6 mb-3">Children Under 13 (COPPA Compliance)</h3>
        <p className="mb-4">
          Capy's Journey is a child-directed mindfulness and meditation application. We do not collect personally identifiable information from the child user. Usernames for child profiles are non-identifiable and can be updated at any time.
        </p>
        <p className="mb-4">
          For users under 13, accounts are created and managed only using a parent or guardian's email address, and we obtain verifiable parental consent before enabling any optional data syncing or cloud storage.
        </p>
        <p className="mb-4">
          If we ever discover that personal information belonging to a child under 13 has been submitted outside of the parent onboarding flow, we will delete it immediately. Parents may contact us at the support email:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Review data associated with their child's profile</li>
          <li>Request deletion</li>
          <li>Revoke consent</li>
        </ul>
        <p className="mb-4">
          We also use industry-standard encryption and secure data handling to protect all parent-linked account information.
        </p>

        <h2 className="text-2xl text-gray-900 mt-10 mb-4">Security</h2>
        <p className="mb-4">
          The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.
        </p>

        <h2 className="text-2xl text-gray-900 mt-10 mb-4">Changes</h2>
        <p className="mb-4">
          This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
        </p>
        <p className="mb-4">
          This privacy policy is effective as of 2025-12-30
        </p>

        <h2 className="text-2xl text-gray-900 mt-10 mb-4">Your Consent</h2>
        <p className="mb-4">
          By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.
        </p>

        <h2 className="text-2xl text-gray-900 mt-10 mb-4">Contact Us</h2>
        <p className="mb-8">
          If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at rohanv2006@gmail.com.
        </p>

        <p className="pt-6 border-t border-amber-200">
          <Link to="/" className="text-amber-600 hover:text-amber-700 font-medium">
            ← Back to Capy's Journey
          </Link>
        </p>
      </main>
    </div>
  );
}
