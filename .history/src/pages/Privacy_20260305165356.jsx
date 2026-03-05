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
          This privacy policy applies to the Capy's Journey app (hereby referred to as "Application") for mobile devices that was created by Capy's Journey, Inc. (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".
        </p>

        <h2 className="text-2xl text-gray-900 mt-10 mb-4">Information Collection and Use</h2>
        <p className="mb-4">
          The Application collects information when you download and use it. This information may include information such as:
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
          <li><a className='text-orange-600 text-decoration-underline' href='https://firebase.google.com/support/privacy'>Google Analytics for Firebase</a></li>
          <li><a class="privacyLink" href='https://firebase.google.com/support/privacy'>Firebase Crashlytics</a></li>
          <li><a class="privacyLink" href='https://unity.com/legal/privacy-policy'>Unity</a></li>
          <li><a class="privacyLink" href='https://posthog.com/privacy'>PostHog</a></li>
        </ul>

        <h3 className="text-xl text-gray-900 mt-6 mb-3">Session Replay (Consent-Gated for Users Under 13)</h3>
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
          The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at team@capysjourney.com and they will respond in a reasonable time.
        </p>

        <h2 className="text-2xl text-gray-900 mt-10 mb-4">Account Deletion</h2>
        <p className="mb-4">
          You may request permanent deletion of your account and all associated data at any time by contacting us at team@capysjourney.com. Upon receiving a verified deletion request, we will permanently delete your account and all personally identifiable information associated with it within 30 days. Please note that some anonymized, non-identifiable data may be retained for analytical purposes. For child accounts, a parent or guardian must submit the deletion request. Once deleted, account data cannot be recovered.
        </p>

        <h2 className="text-2xl text-gray-900 mt-10 mb-4">Children — Children Under 13 (COPPA Compliance)</h2>
        <p className="mb-4">
          Capy's Journey is a child-directed application. Children under 13 may only use the Application after a parent or legal guardian has completed the onboarding process, provided their verified email address, and granted explicit consent on the child's behalf. If we become aware that a child under 13 has attempted to access the Application without parental consent, we will take immediate steps to restrict their access and delete any associated data.
        </p>

        <h3 className="text-xl text-gray-900 mt-6 mb-3">Age Verification at Onboarding</h3>
        <p className="mb-4">
          During onboarding, all users are asked to input their age. If a user indicates they are under 13, the Application immediately requires a parent or guardian's email address before proceeding. A verification email is sent to that address via Firebase Authentication, and access to the Application is not granted until the parent or guardian completes email verification. The child user is never asked for their own email address or any other personally identifiable information during this process.
        </p>
        <p className="mb-4">
          We do not collect personally identifiable information from the child user. Usernames for child profiles are non-identifiable and can be updated at any time.
        </p>
        <p className="mb-4">
          For users under 13, accounts are created and managed only using a parent or guardian's email address, and we obtain verifiable parental consent before enabling any optional data syncing or cloud storage.
        </p>
        <p className="mb-4">
          If we ever discover that personal information belonging to a child under 13 has been submitted outside of the parent onboarding flow, we will delete it immediately. Parents may contact us directly at team@capysjourney.com to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Review data associated with their child's profile</li>
          <li>Request deletion</li>
          <li>Revoke consent</li>
        </ul>
        <p className="mb-4">
          We also use industry-standard encryption and secure data handling to protect all parent-linked account information.
        </p>

        <h2 className="text-2xl text-gray-900 mt-10 mb-4">California Privacy Rights (CCPA)</h2>
        <p className="mb-4">
          If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA):
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li><strong>Right to Know</strong> — You have the right to request information about the categories and specific pieces of personal data we have collected about you, the sources from which it was collected, the purposes for which it is used, and any third parties with whom it is shared.</li>
          <li><strong>Right to Delete</strong> — You have the right to request deletion of personal information we have collected from you, subject to certain exceptions permitted by law.</li>
          <li><strong>Right to Opt-Out</strong> — We do not sell personal information. As such, there is no opt-out required, but you may contact us to confirm this at any time.</li>
          <li><strong>Right to Non-Discrimination</strong> — We will not discriminate against you for exercising any of your CCPA rights.</li>
        </ul>
        <p className="mb-4">
          To exercise any of these rights, please contact us at team@capysjourney.com. We will respond to verified requests within 45 days as required by law.
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
          This privacy policy is effective as of 2026-03-05
        </p>

        <h2 className="text-2xl text-gray-900 mt-10 mb-4">Your Consent</h2>
        <p className="mb-4">
          By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.
        </p>

        <h2 className="text-2xl text-gray-900 mt-10 mb-4">Contact Us</h2>
        <p className="mb-8">
          If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at team@capysjourney.com.
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
