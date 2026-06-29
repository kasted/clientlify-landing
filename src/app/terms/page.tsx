export const metadata = {
  title: "Terms of Service — Clientlify",
  description: "The rules and conditions for using Clientlify. Read our full terms of service before signing up.",
};

const LAST_UPDATED = "June 27, 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 700, fontSize: 22, letterSpacing: "-.01em", margin: "0 0 12px", color: "#161d1a" }}>
        {title}
      </h2>
      <div style={{ fontSize: 15.5, lineHeight: 1.75, color: "#566159" }}>{children}</div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <main style={{ fontFamily: "var(--font-hanken, Hanken Grotesk), system-ui, sans-serif" }}>

      {/* Hero */}
      <div style={{ background: "#0f503c" }}>
      <section className="anim-page-hero" style={{ maxWidth: 740, margin: "0 auto", padding: "96px 32px 88px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 46, lineHeight: 1.07, letterSpacing: "-.025em", margin: "0 0 16px", color: "#f7f5f2" }}>
          Terms of Service
        </h1>
        <p style={{ fontSize: 15, color: "rgba(247,245,242,.72)", margin: 0 }}>Last updated: {LAST_UPDATED}</p>
      </section>
      </div>

      <section data-animate style={{ maxWidth: 740, margin: "0 auto", padding: "88px 32px 96px" }}>

        <Section title="1. Acceptance of Terms">
          <p style={{ margin: 0 }}>
            By accessing or using Clientlify ("Service"), operated by Scott Mitchell ("we," "our," or "us"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service. These Terms apply to all visitors, users, and others who access or use the Service.
          </p>
        </Section>

        <Section title="2. Description of Service">
          <p style={{ margin: 0 }}>
            Clientlify is a client lifecycle management platform designed for event service businesses. The Service includes lead pipeline management, quoting, invoicing, event management, payment processing via Square, and related tools. We reserve the right to modify or discontinue the Service at any time with or without notice.
          </p>
        </Section>

        <Section title="3. Accounts">
          <p style={{ margin: "0 0 14px" }}>
            To use the Service, you must create an account. You agree to:
          </p>
          <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
            <li>Provide accurate, current, and complete information during registration</li>
            <li>Maintain and promptly update your account information</li>
            <li>Keep your password confidential and not share it with any third party</li>
            <li>Notify us immediately of any unauthorized use of your account</li>
            <li>Accept responsibility for all activities that occur under your account</li>
          </ul>
        </Section>

        <Section title="4. Acceptable Use">
          <p style={{ margin: "0 0 14px" }}>You agree not to use the Service to:</p>
          <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
            <li>Violate any applicable law or regulation</li>
            <li>Infringe the intellectual property rights of others</li>
            <li>Transmit any harmful, fraudulent, or deceptive content</li>
            <li>Attempt to gain unauthorized access to the Service or its related systems</li>
            <li>Interfere with or disrupt the integrity or performance of the Service</li>
            <li>Collect or harvest data from the Service without our express written consent</li>
          </ul>
        </Section>

        <Section title="5. Payments and Billing">
          <p style={{ margin: "0 0 14px" }}>
            Access to the Service may require payment of fees as described on our website. All fees are in US dollars and are non-refundable except as expressly stated in these Terms or required by applicable law.
          </p>
          <p style={{ margin: 0 }}>
            Payment processing for your clients is handled through Square. Your use of Square's payment processing is subject to Square's own terms of service and privacy policy. We are not responsible for errors or interruptions in Square's services.
          </p>
        </Section>

        <Section title="6. Your Data">
          <p style={{ margin: "0 0 14px" }}>
            You retain ownership of all data you submit to the Service ("Your Data"). By using the Service, you grant us a limited license to store, process, and display Your Data solely to provide the Service to you.
          </p>
          <p style={{ margin: 0 }}>
            You are responsible for ensuring that Your Data does not violate the rights of any third party and complies with applicable law. You may export or delete Your Data at any time through the Service settings.
          </p>
        </Section>

        <Section title="7. Intellectual Property">
          <p style={{ margin: 0 }}>
            The Service and its original content, features, and functionality are and will remain the exclusive property of Scott Mitchell and Clientlify. Our trademarks may not be used in connection with any product or service without our prior written consent. Nothing in these Terms transfers any intellectual property rights to you.
          </p>
        </Section>

        <Section title="8. Third-Party Integrations">
          <p style={{ margin: 0 }}>
            The Service integrates with third-party services including Square and Google Calendar. These integrations are provided for your convenience. We do not control and are not responsible for the availability, accuracy, or content of third-party services. Your use of any third-party service is governed by that service's own terms and policies.
          </p>
        </Section>

        <Section title="9. Disclaimer of Warranties">
          <p style={{ margin: 0 }}>
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
          </p>
        </Section>

        <Section title="10. Limitation of Liability">
          <p style={{ margin: 0 }}>
            TO THE FULLEST EXTENT PERMITTED BY LAW, CLIENTLIFY AND SCOTT MITCHELL SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM THE USE OF THE SERVICE SHALL NOT EXCEED THE AMOUNTS YOU PAID TO US IN THE TWELVE MONTHS PRECEDING THE CLAIM.
          </p>
        </Section>

        <Section title="11. Indemnification">
          <p style={{ margin: 0 }}>
            You agree to indemnify, defend, and hold harmless Clientlify, Scott Mitchell, and our affiliates, officers, agents, and employees from any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with your access to or use of the Service, your violation of these Terms, or your violation of any rights of another.
          </p>
        </Section>

        <Section title="12. Termination">
          <p style={{ margin: 0 }}>
            We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Service will immediately cease. You may also cancel your account at any time through the account settings. All provisions of these Terms which by their nature should survive termination shall survive.
          </p>
        </Section>

        <Section title="13. Governing Law">
          <p style={{ margin: 0 }}>
            These Terms shall be governed and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. You agree to submit to the personal jurisdiction of the courts located in California for the resolution of any disputes.
          </p>
        </Section>

        <Section title="14. Changes to These Terms">
          <p style={{ margin: 0 }}>
            We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on this page and updating the "Last updated" date. Your continued use of the Service after changes become effective constitutes your acceptance of the new Terms.
          </p>
        </Section>

        <Section title="15. Contact Us">
          <p style={{ margin: 0 }}>
            If you have questions about these Terms, please contact us at:<br />
            <strong style={{ color: "#3a443e" }}>Clientlify / Scott Mitchell</strong><br />
            Email: hello@clientlify.com
          </p>
        </Section>

      </section>
    </main>
  );
}
