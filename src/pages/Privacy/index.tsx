import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

const Privacy = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-20 text-left md:mt-20 mt-10">
      <h1 className="font-['Playfair',Helvetica] font-bold text-foundationredred-13 text-4xl md:text-6xl text-center mb-6">
      Privacy Statement
      </h1>

      <div className="max-w-4xl text-foundationblackblack-10 font-['Lato',Helvetica] text-base space-y-6">
        <p><strong>Privacy Statement for Nutsovertech Technologies</strong></p>

        <p>Nutsovertech Technologies ("Nutsovertech," "we," "us," or "our") is committed to respecting your privacy and preferences. This Privacy Statement outlines our practices for collecting, processing, and safeguarding your Personal Information in compliance with applicable data privacy regulations.</p>

        <h3 className="text-xl font-bold">Objective</h3>
        <p>This Privacy Statement provides an overview of our privacy practices regarding the collection and use of Personal Information through various sources. While the primary focus is on data collected via Nutsovertech’s websites, such as <a href="http://www.nutsovertech.com" className=" text-foundationredred-13">www.nutsovertech.com</a> and its subdomains ("Nutsovertech Websites"), our adherence to the privacy principles described here extends to all data processing activities across our organization.</p>

        <p>Additional privacy details may be provided for specific purposes or relationships, which are accessible below.</p>
        <p>The Statement applies globally, but region-specific terms may apply depending on your location. In case of discrepancies between translated versions, the English version will take precedence.</p>
        <h3 className="text-xl font-bold">Omnicapture Mobile Privacy</h3>
        <p>
        Omnicapture Mobile is a product developed and operated by Nutsovertech, with current information and support available at <a href="https://omnicapture.nutsovertech.com/" className=" text-foundationredred-13">https://omnicapture.nutsovertech.com/</a>. As part of the Nutsovertech ecosystem, Omnicapture Mobile adheres to the privacy principles and commitments outlined on this page, with the following additional details specific to its use:
        </p>
        <ul className="list-disc list-inside">
            <li><strong>Data Collection</strong>: Omnicapture Mobile may collect technical information related to device type, operating system, app usage statistics, content captured or processed by the app, and diagnostic data to improve service reliability and efficiency. Omnicapture Mobile does not collect more personal information than is necessary for the app’s features and user experience.</li>
            <li><strong>User Consent</strong>: Users are informed about the data Omnicapture Mobile collects and must actively provide consent where required by law before these data are captured or sent to Nutsovertech servers.</li>
            <li><strong>Data Security</strong>: All data transmitted by Omnicapture Mobile is encrypted both in transit and at rest, and is subject to Nutsovertech’s rigorous security and access protocols.</li>
            <li><strong>Third-Party Sharing</strong>: Omnicapture Mobile does not share personal or usage data with third parties except as required by law, or as essential to deliver the app’s services (such as using cloud storage/providers under strict privacy agreements).</li>
            <li><strong>User Rights</strong>: Users may contact Nutsovertech to request access, correction, or deletion of personal data collected via Omnicapture Mobile, following the processes described in the general privacy policy.</li>
            <li><strong>Updates</strong>: Any privacy-specific updates affecting Omnicapture Mobile will be communicated via app updates or the Omnicapture website.</li>
           
        </ul>
      
<p>
If you have further questions regarding privacy in Omnicapture Mobile, please contact Nutsovertech directly or refer to information on the official Omnicapture website.
</p>

        <h3 className="text-xl font-bold">1. Personal Information We Collect and Process</h3>
        <h4 className="font-semibold">1.1 Categories of Personal Information</h4>
        <ul className="list-disc list-inside">
          <li><strong>Website Visit Data</strong>: IP address, device information, telemetry data, OS, browser, and cookie data.</li>
          <li><strong>Contact Details</strong>: Name, email, phone, address, designation, company, LinkedIn, etc.</li>
          <li><strong>Login Credentials</strong>: Username and password.</li>
          <li><strong>Audio-Visual Data</strong>: Photos, videos, or recordings from events or webinars.</li>
          <li><strong>Feedback and Preferences</strong>: Comments, marketing, and dietary preferences.</li>
        </ul>

        <h4 className="font-semibold">1.2 Sources of Personal Information</h4>
        <ul className="list-disc list-inside">
          <li>Website forms, direct correspondence.</li>
          <li>Employee interactions (sales, marketing, etc.).</li>
          <li>Public sources including social media.</li>
          <li>Service providers, partners, affiliates.</li>
          <li>Cookies and tracking technologies.</li>
        </ul>

        <h4 className="font-semibold">1.3 Use of Personal Information</h4>
        <ul className="list-disc list-inside">
          <li>Enhancing usability, troubleshooting.</li>
          <li>User identification and authentication.</li>
          <li>Communication and support.</li>
          <li>Tailored content and marketing.</li>
          <li>Event organization and promotions.</li>
          <li>Publishing testimonials, case studies.</li>
          <li>Business optimization.</li>
          <li>Information security.</li>
          <li>Legal and regulatory compliance.</li>
        </ul>

        <h4 className="font-semibold">1.4 Legal Basis for Processing</h4>
        <ul className="list-disc list-inside">
          <li><strong>Contract</strong>: Fulfilling service obligations.</li>
          <li><strong>Legitimate Interests</strong>: Operations, analytics, security.</li>
          <li><strong>Consent</strong>: Marketing/events (revocable).</li>
          <li><strong>Legal Obligations</strong>: Regulatory compliance.</li>
        </ul>

        <h3 className="text-xl font-bold">2. Consequences of Not Providing Personal Information</h3>
        <p>Without necessary information, we may not fulfill services or respond to requests.</p>

        <h3 className="text-xl font-bold">3. Data Sharing and International Transfers</h3>
        <h4 className="font-semibold">3.1 Data Sharing</h4>
        <ul className="list-disc list-inside">
          <li>Subsidiaries and affiliates.</li>
          <li>Service providers and agents.</li>
          <li>Auditors and government bodies.</li>
        </ul>

        <h4 className="font-semibold">3.2 International Transfers</h4>
        <p>Transfers may occur globally. We apply protective measures.</p>

        <h3 className="text-xl font-bold">4. Your Rights</h3>
        <h4 className="font-semibold">4.1 Rights Overview</h4>
        <ul className="list-disc list-inside">
          <li>Access or rectify your data.</li>
          <li>Request deletion or restriction.</li>
          <li>Withdraw consent.</li>
          <li>Object to certain processing.</li>
        </ul>

        <h4 className="font-semibold">4.2 Exercising Rights</h4>
        <p>Email <strong>privacy@nutsovertech.com</strong> to make requests (with ID proof).</p>

        <h4 className="font-semibold">4.3 Preference Management</h4>
        <p>Manage preferences via the Contact Preference Center.</p>

        <h3 className="text-xl font-bold">5. Data Security</h3>
        <p>We apply admin, physical, and technical controls for data protection.</p>

        <h3 className="text-xl font-bold">6. Data Retention</h3>
        <p>We retain data only as long as necessary or legally required.</p>

        <h3 className="text-xl font-bold">7. Local Data Protection Authority</h3>
        <p>You may contact your local authority for unresolved concerns.</p>

        <h3 className="text-xl font-bold">8. Linked Websites</h3>
        <p>We are not responsible for third-party privacy practices. Review their policies.</p>

        <h3 className="text-xl font-bold">9. Children’s Privacy</h3>
        <p>We do not knowingly collect children's data. Contact <strong>privacy@nutsovertech.com</strong> for concerns.</p>

        <h3 className="text-xl font-bold">10. Contact Us</h3>
        <p><strong>Data Privacy Officer</strong><br />Nutsovertech Technologies,<br />F1902, Panchshil Towers, Kharadi, Pune – 411014, India<br />Email: <strong>privacy@nutsovertech.com</strong></p>

        <h3 className="text-xl font-bold">11. Updates</h3>
        <p>We update this statement periodically. Changes will appear here.</p>

        <h2 className="text-2xl font-bold pt-8">Privacy Practices for Investors</h2>

        <h3 className="text-xl font-bold">Categories of Data</h3>
        <p>Name, designation, contact info, fund details. Sensitive data varies by region.</p>

        <h3 className="text-xl font-bold">Use of Data</h3>
        <ol className="list-decimal list-inside">
          <li>To maintain communication.</li>
          <li>To share news and developments.</li>
        </ol>

        <h3 className="text-xl font-bold">Legal Basis</h3>
        <ul className="list-disc list-inside">
          <li><strong>Legitimate Interest</strong>: Business purposes unless overridden by rights.</li>
          <li><strong>Consent</strong>: Where law requires.</li>
        </ul>

        <h3 className="text-xl font-bold">Recipients</h3>
        <ul className="list-disc list-inside">
          <li>Internal Nutsovertech entities.</li>
          <li>Service providers (e.g., cloud providers).</li>
          <li>Partners, consultants, and authorities.</li>
          <li>Law enforcement and auditors.</li>
        </ul>

        <p>Contact <strong>privacy@nutsovertech.com</strong> for questions.</p>
      </div>

     
    </div>
  );
};

export default Privacy;
