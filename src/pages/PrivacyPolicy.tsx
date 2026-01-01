import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <h1 className="text-4xl md:text-5xl font-bold text-midnight mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground mb-12">Last updated: January 1, 2026</p>
            
            {/* Introduction */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-midnight mb-4">Introduction</h2>
              <p className="text-foreground/80 leading-relaxed">
                Welcome to RankLocal. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-midnight mb-4">Information We Collect</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Account credentials (username, password)</li>
                <li>Profile information (preferences, saved searches, favorites)</li>
                <li>Location data (when you use location-based features)</li>
                <li>Communication data (feedback, support requests, reviews)</li>
                <li>Usage data (browsing history, search queries, interactions)</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-midnight mb-4">How We Use Your Information</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We use the information we collect for various purposes, including to:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Personalize your experience and deliver relevant content</li>
                <li>Process transactions and send related information</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent activities</li>
              </ul>
            </section>

            {/* Cookies & Tracking */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-midnight mb-4">Cookies & Tracking</h2>
              <p className="text-foreground/80 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that are sent to your browser from a website and stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service. For more details, please see our Cookies Policy.
              </p>
            </section>

            {/* Data Sharing */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-midnight mb-4">Data Sharing</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
                <li>With service providers who perform services on our behalf</li>
                <li>With business partners for joint marketing initiatives</li>
                <li>In response to legal requests or to protect our rights</li>
                <li>In connection with a merger, acquisition, or sale of assets</li>
                <li>With your consent or at your direction</li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-midnight mb-4">Data Security</h2>
              <p className="text-foreground/80 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, access controls, and regular security assessments. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* User Rights */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-midnight mb-4">User Rights</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
                <li>Right to access your personal data</li>
                <li>Right to rectify inaccurate information</li>
                <li>Right to erasure (right to be forgotten)</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>

            {/* Contact Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-midnight mb-4">Contact Information</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-card rounded-xl p-6 border border-border">
                <p className="text-foreground/80"><strong>Email:</strong> privacy@ranklocal.com</p>
                <p className="text-foreground/80 mt-2"><strong>Address:</strong> 123 Main Street, Suite 400, San Francisco, CA 94102</p>
                <p className="text-foreground/80 mt-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
