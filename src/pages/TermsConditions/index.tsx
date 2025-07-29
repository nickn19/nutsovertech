import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

const TermsConditions = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center px-4 py-20 max-w-5xl mx-auto md:mt-20 mt-10">
      <h1 className="font-['Playfair',Helvetica] font-bold text-foundationredred-13 text-4xl md:text-6xl text-center mb-6">
        Terms of Use
      </h1>
      <div className="font-['Lato',Helvetica] text-foundationblackblack-10 text-base space-y-6">
        <p>
          <strong>Terms of Use for</strong>
          <a href="http://www.nutsovertech.com">
            {" "}
            <strong className="text-foundationredred-13">www.nutsovertech.com</strong>
          </a>
        </p>
        <p>
          The use of any product, service, or feature (collectively referred to as “Materials”) available through the
          websites accessible at
          <a href="http://www.nutsovertech.com" className="text-foundationredred-13"> www.nutsovertech.com</a> (hereinafter, the “Website”) by any user of
          the Website (“User,” “You,” or “Your”) is governed by the following Terms of Use. By accessing or using the
          Website, You are deemed to have accepted these terms and conditions. Please read them carefully before using
          the Website or its services.
        </p>

        <h3 className="text-xl font-semibold">1. General</h3>
        <p>
        The Website is owned and operated by Nutsovertech Technologies (hereinafter referred to as “Nutsovertech”), a company incorporated under the laws of India, with its registered office at F1902, Panchshil Towers, Kharadi, Pune – 411014. The Website is provided for informational purposes only. If You do not agree to these Terms of Use, You must refrain from using the Website or downloading Materials from it. In case of a conflict between these Terms of Use and specific terms posted on certain sections of the Website, the latter will take precedence for those sections.
        </p>

        <h3 className="text-xl font-semibold">2. Ownership</h3>
        <p>
        All Materials available on the Website (except third-party materials) are the sole property of Nutsovertech and are protected under applicable intellectual property laws. Nutsovertech retains all rights, title, and interest in the Materials provided on the Website.
        </p>

        <h3 className="text-xl font-semibold">3. Limited License</h3>
        <p>
        Subject to these Terms of Use, Nutsovertech grants You a non-exclusive, non-transferable, limited license to access and display the Website and its Materials for personal and non-commercial use, provided You retain all copyright, trademark, and proprietary notices. Any unauthorized reproduction, distribution, or modification of the Website content is prohibited. This license does not extend to mirroring content or using software or materials in violation of their respective license terms.
        </p>

        <h3 className="text-xl font-semibold">4. Blogs</h3>
        <p>Nutsovertech may host blogs authored by individuals (“Contributors”) on the Website. The views expressed in these blogs are personal to the Contributors and do not necessarily represent the official positions of Nutsovertech. Comments and feedback on blogs must comply with the following guidelines:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Refrain from defaming, harassing, or threatening any party, including Nutsovertech.</li>
          <li>Avoid posting inappropriate, offensive, or unlawful content.</li>
          <li>
            Do not upload files that contain malicious software, viruses, or copyrighted materials without authorization.
          </li>
          <li>
            Nutsovertech reserves the right to moderate, edit, or remove user contributions that violate these
            guidelines.
          </li>
        </ul>

        <h3 className="text-xl font-semibold">5. Third-Party Content</h3>
        <p>
        The Website may include content, links, or services from third-party sources (“Third-Party Content”). Nutsovertech does not create, endorse, or guarantee the accuracy or reliability of such Third-Party Content. Users access such content at their own risk and must comply with the terms of use and privacy policies of the respective third-party websites.
        </p>

        <h3 className="text-xl font-semibold">6. Confidential Information</h3>
        <p>
        Nutsovertech does not accept confidential or proprietary information via the Website. Any material shared with Nutsovertech will be treated as non-confidential and non-proprietary. By submitting such materials, You grant Nutsovertech an irrevocable license to use, reproduce, and distribute the information for any purpose. However, Nutsovertech will not disclose Your name or personally identifiable information without Your consent, except as required by law.
        </p>

        <h3 className="text-xl font-semibold">7. Disclaimer</h3>
        <p>
        The Website and its Materials are provided “as is” without any warranties, express or implied, including but not limited to, warranties of merchantability, fitness for a particular purpose, or non-infringement. Nutsovertech does not guarantee uninterrupted or error-free access to the Website, nor does it warrant that the content will be free of viruses or other harmful elements.
        </p>

        <h3 className="text-xl font-semibold">8. Limitation of Liability</h3>
        <p>
        To the fullest extent permitted by law, Nutsovertech shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use of the Website, its content, or Third-Party Content. This includes but is not limited to loss of profits, data, or business interruptions.
        </p>

        <h3 className="text-xl font-semibold">9. Lawful Use</h3>
        <p>You agree to use the Website only for lawful purposes. You shall not:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Damage, disable, or impair the Website or its associated networks.</li>
          <li>Attempt unauthorized access to restricted sections of the Website.</li>
          <li>Upload harmful or malicious files or disrupt the operations of the Website.</li>
        </ul>

        <h3 className="text-xl font-semibold">10. Indemnity</h3>
        <p>
        You agree to indemnify and hold harmless Nutsovertech, its affiliates, and its employees from any claims, damages, or losses arising from Your use of the Website or violation of these Terms of Use.
        </p>

        <h3 className="text-xl font-semibold">11. Modifications</h3>
        <p>
        Nutsovertech reserves the right to modify or update these Terms of Use at any time without prior notice. Your continued use of the Website signifies acceptance of any changes. Nutsovertech may also modify or discontinue any part of the Website without liability.
        </p>

        <h3 className="text-xl font-semibold">12. International Use</h3>
        <p>
        The Website is controlled and operated from India. Users accessing the Website from outside India are responsible for complying with local laws. Nutsovertech makes no representation that the Website or its content is appropriate for use in other jurisdictions.
        </p>

        <h3 className="text-xl font-semibold">13. Governing Law</h3>
        <p>
        These Terms of Use are governed by the laws of India. Any disputes arising from the use of the Website will be subject to the exclusive jurisdiction of the courts in Pune, India.
        </p>

        <h3 className="text-xl font-semibold">14. Entire Agreement</h3>
        <p>
        These Terms of Use constitute the entire agreement between Nutsovertech and the User regarding the use of the Website. If any provision is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
        </p>

        <p>
          By accessing and using
          <a href="http://www.nutsovertech.com" className="text-foundationredred-13"> www.nutsovertech.com</a>, You agree to adhere to these Terms of Use.
        </p>
      </div>

      
    </div>
  );
};

export default TermsConditions;
