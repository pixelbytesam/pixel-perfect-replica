import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <h1 className="text-4xl md:text-5xl font-bold text-midnight mb-4">Cookies Policy</h1>
            <p className="text-muted-foreground mb-12">Last updated: January 1, 2026</p>
            
            {/* What Are Cookies */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-midnight mb-4">What Are Cookies</h2>
              <p className="text-foreground/80 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Cookies allow websites to remember your preferences, login status, and other information to enhance your browsing experience. They can be "persistent" (remaining on your device until deleted) or "session" cookies (deleted when you close your browser).
              </p>
            </section>

            {/* Types of Cookies Used */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-midnight mb-4">Types of Cookies Used</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We use the following types of cookies on RankLocal:
              </p>
              <div className="space-y-4">
                <div className="bg-card rounded-xl p-5 border border-border">
                  <h3 className="font-semibold text-midnight mb-2">Essential Cookies</h3>
                  <p className="text-foreground/80 text-sm">Required for the website to function properly. These cannot be disabled and include authentication, security, and accessibility features.</p>
                </div>
                <div className="bg-card rounded-xl p-5 border border-border">
                  <h3 className="font-semibold text-midnight mb-2">Performance Cookies</h3>
                  <p className="text-foreground/80 text-sm">Help us understand how visitors interact with our website by collecting and reporting anonymous information about page visits and errors.</p>
                </div>
                <div className="bg-card rounded-xl p-5 border border-border">
                  <h3 className="font-semibold text-midnight mb-2">Functional Cookies</h3>
                  <p className="text-foreground/80 text-sm">Enable enhanced functionality and personalization, such as remembering your preferences, language settings, and location.</p>
                </div>
                <div className="bg-card rounded-xl p-5 border border-border">
                  <h3 className="font-semibold text-midnight mb-2">Marketing Cookies</h3>
                  <p className="text-foreground/80 text-sm">Used to track visitors across websites to display relevant advertisements. These cookies may be set by our advertising partners.</p>
                </div>
              </div>
            </section>

            {/* How We Use Cookies */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-midnight mb-4">How We Use Cookies</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We use cookies for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
                <li>Authenticating users and maintaining secure sessions</li>
                <li>Remembering your preferences and settings</li>
                <li>Analyzing website traffic and user behavior</li>
                <li>Personalizing content and recommendations</li>
                <li>Measuring the effectiveness of our marketing campaigns</li>
                <li>Preventing fraud and enhancing security</li>
                <li>Improving website performance and user experience</li>
              </ul>
            </section>

            {/* Third-Party Cookies */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-midnight mb-4">Third-Party Cookies</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We may use third-party services that set their own cookies on your device. These include:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
                <li><strong>Google Ads:</strong> For advertising and remarketing purposes</li>
                <li><strong>Facebook Pixel:</strong> For social media advertising and analytics</li>
                <li><strong>Hotjar:</strong> For user behavior analysis and heatmaps</li>
                <li><strong>Stripe:</strong> For secure payment processing</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mt-4">
                These third parties have their own privacy policies addressing how they use your information.
              </p>
            </section>

            {/* Managing Cookie Preferences */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-midnight mb-4">Managing Cookie Preferences</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                You can manage your cookie preferences in several ways:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
                <li><strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings. You can block or delete cookies, or set your browser to notify you when cookies are being sent.</li>
                <li><strong>Cookie Banner:</strong> When you first visit our site, you can choose which types of cookies to accept through our cookie consent banner.</li>
                <li><strong>Opt-Out Tools:</strong> You can opt out of targeted advertising by visiting the Digital Advertising Alliance or Network Advertising Initiative websites.</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mt-4">
                Please note that disabling certain cookies may affect the functionality of our website and limit your access to some features.
              </p>
            </section>

            {/* Updates to This Policy */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-midnight mb-4">Updates to This Policy</h2>
              <p className="text-foreground/80 leading-relaxed">
                We may update this Cookies Policy from time to time to reflect changes in our practices, technologies, or legal requirements. When we make changes, we will update the "Last updated" date at the top of this page. We encourage you to review this policy periodically to stay informed about how we use cookies. Your continued use of our website after any changes constitutes your acceptance of the updated policy.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-midnight mb-4">Contact Information</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                If you have questions about our use of cookies, please contact us at:
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

export default CookiesPolicy;
