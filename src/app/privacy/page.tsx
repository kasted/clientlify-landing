export const metadata = {
  title: "Privacy Policy | Clientlify",
  description: "How Clientlify collects, uses, and protects your information. Read our full privacy policy.",
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

export default function PrivacyPage() {
  return (
    <main style={{ fontFamily: "var(--font-hanken, Hanken Grotesk), system-ui, sans-serif" }}>

      {/* Hero */}
      <div style={{ background: "#0f503c" }}>
      <section className="anim-page-hero" style={{ maxWidth: 740, margin: "0 auto", padding: "96px 32px 88px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--font-schibsted, Schibsted Grotesk), sans-serif", fontWeight: 800, fontSize: 46, lineHeight: 1.07, letterSpacing: "-.025em", margin: "0 0 16px", color: "#f7f5f2" }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: 15, color: "rgba(247,245,242,.72)", margin: 0 }}>Last updated: {LAST_UPDATED}</p>
      </section>
      </div>

      <section data-animate style={{ maxWidth: 740, margin: "0 auto", padding: "88px 32px 96px" }}>

        <Section title="1. Overview">
          <p style={{ margin: "0 0 14px" }}>
            Clientlify ("we," "our," or "us") is operated by Scott Mitchell. This Privacy Policy explains how we collect, use, disclose, and protect information about you when you use our platform at clientlify.com (the "Service").
          </p>
          <p style={{ margin: 0 }}>
            By using the Service, you agree to the collection and use of information in accordance with this policy. If you do not agree, please do not use the Service.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p style={{ margin: "0 0 14px" }}>We collect information you provide directly to us, including:</p>
          <ul style={{ margin: "0 0 14px", paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
            <li>Account information (name, email address, business name, phone number)</li>
            <li>Business data you enter into the platform (leads, quotes, invoices, event details)</li>
            <li>Payment information processed through Square (we do not store card numbers)</li>
            <li>Communications you send to us</li>
          </ul>
          <p style={{ margin: "0 0 14px" }}>We also collect information automatically when you use the Service:</p>
          <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
            <li>Log data (IP address, browser type, pages visited, time spent)</li>
            <li>Device information (hardware model, operating system, unique device identifiers)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Information">
          <p style={{ margin: "0 0 14px" }}>We use the information we collect to:</p>
          <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
            <li>Provide, operate, and improve the Service</li>
            <li>Process transactions and send related information</li>
            <li>Send technical notices, updates, and support messages</li>
            <li>Respond to your comments and questions</li>
            <li>Monitor and analyze usage and trends to improve the Service</li>
            <li>Detect and prevent fraudulent transactions and other illegal activities</li>
          </ul>
        </Section>

        <Section title="4. Sharing of Information">
          <p style={{ margin: "0 0 14px" }}>
            We do not sell, trade, or rent your personal information to third parties. We may share your information with:
          </p>
          <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
            <li><strong style={{ color: "#3a443e" }}>Service providers:</strong> third-party vendors who assist us in operating the Service (e.g., hosting, analytics, payment processing via Square)</li>
            <li><strong style={{ color: "#3a443e" }}>Legal compliance:</strong> when required by law, subpoena, or other legal process</li>
            <li><strong style={{ color: "#3a443e" }}>Business transfers:</strong> in connection with a merger, acquisition, or sale of all or a portion of our assets</li>
          </ul>
        </Section>

        <Section title="5. Data Retention">
          <p style={{ margin: 0 }}>
            We retain your information for as long as your account is active or as needed to provide the Service. You may request deletion of your account and associated data at any time by contacting us at the address below. We may retain certain information as required by law or for legitimate business purposes.
          </p>
        </Section>

        <Section title="6. Security">
          <p style={{ margin: 0 }}>
            We take reasonable measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no internet transmission or electronic storage is 100% secure. We encourage you to use a strong, unique password and to contact us immediately if you suspect unauthorized access to your account.
          </p>
        </Section>

        <Section title="7. Cookies">
          <p style={{ margin: 0 }}>
            We use cookies and similar tracking technologies to track activity on the Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. If you do not accept cookies, some portions of the Service may not function properly.
          </p>
        </Section>

        <Section title="8. Third-Party Services">
          <p style={{ margin: 0 }}>
            The Service integrates with third-party services including Square (payment processing) and Google Calendar. Your use of those integrations is subject to those companies' own privacy policies. We are not responsible for the privacy practices of third-party services.
          </p>
        </Section>

        <Section title="9. Children's Privacy">
          <p style={{ margin: 0 }}>
            The Service is not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us and we will promptly delete it.
          </p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p style={{ margin: 0 }}>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of the Service after any changes constitutes your acceptance of the new policy.
          </p>
        </Section>

        <Section title="11. Contact Us">
          <p style={{ margin: 0 }}>
            If you have questions about this Privacy Policy, please contact us at:<br />
            <strong style={{ color: "#3a443e" }}>Clientlify / Scott Mitchell</strong><br />
            Email: hello@clientlify.com
          </p>
        </Section>

      </section>
    </main>
  );
}
