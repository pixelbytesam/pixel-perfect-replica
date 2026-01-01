import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <h1 className="text-4xl md:text-5xl font-bold text-midnight mb-4">Terms & Conditions</h1>
            <p className="text-muted-foreground mb-12">Last updated: January 1, 2026</p>
            
            {/* Acceptance of Terms */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-midnight mb-4">Acceptance of Terms</h2>
              <p className="text-foreground/80 leading-relaxed">
                By accessing or using RankLocal's website and services, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
              </p>
            </section>

            {/* Use of the Platform */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-midnight mb-4">Use of the Platform</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                RankLocal provides a platform for users to search, compare, and discover local businesses and services. You may use our platform for personal, non-commercial purposes subject to these terms. You agree not to:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
                <li>Use the platform for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any portion of the platform</li>
                <li>Interfere with or disrupt the platform or servers</li>
                <li>Collect or harvest user information without consent</li>
                <li>Upload malicious code or content</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </section>

            {/* User Responsibilities */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-midnight mb-4">User Responsibilities</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                As a user of RankLocal, you are responsible for:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Ensuring the accuracy of information you provide</li>
                <li>Complying with all applicable local, state, and federal laws</li>
                <li>Respecting the intellectual property rights of others</li>
                <li>Providing honest and fair reviews and feedback</li>
              </ul>
            </section>

            {/* Listings & Comparison Disclaimer */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-midnight mb-4">Listings & Comparison Disclaimer</h2>
              <p className="text-foreground/80 leading-relaxed">
                RankLocal strives to provide accurate and up-to-date information about local businesses. However, we do not guarantee the accuracy, completeness, or reliability of any listing information. Business details, prices, ratings, and availability are subject to change without notice. The comparison features are provided for informational purposes only, and we recommend contacting businesses directly to verify current information before making decisions.
              </p>
            </section>

            {/* Payments & Pricing */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-midnight mb-4">Payments & Pricing</h2>
              <p className="text-foreground/80 leading-relaxed">
                Some features or services on RankLocal may require payment. All prices are displayed in the local currency and are subject to applicable taxes. We reserve the right to change pricing at any time. Payments are processed through secure third-party payment processors. Refund policies are specified at the time of purchase. Any transactions between you and businesses found through our platform are solely between you and that business.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-midnight mb-4">Limitation of Liability</h2>
              <p className="text-foreground/80 leading-relaxed">
                To the maximum extent permitted by law, RankLocal and its affiliates, officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or goodwill, arising out of or in connection with your use of the platform. Our total liability for any claims arising under these terms shall not exceed the amount you paid to us in the past twelve months.
              </p>
            </section>

            {/* Termination */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-midnight mb-4">Termination</h2>
              <p className="text-foreground/80 leading-relaxed">
                We may terminate or suspend your access to the platform immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use the platform will cease immediately. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </section>

            {/* Governing Law */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-midnight mb-4">Governing Law</h2>
              <p className="text-foreground/80 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in San Francisco, California. You waive any objections to the exercise of jurisdiction over you by such courts.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-midnight mb-4">Contact Information</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                If you have questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="bg-card rounded-xl p-6 border border-border">
                <p className="text-foreground/80"><strong>Email:</strong> legal@ranklocal.com</p>
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

export default TermsConditions;
