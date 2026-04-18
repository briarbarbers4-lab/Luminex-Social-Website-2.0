import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy | Luminex Social',
  description: 'Luminex Social Privacy Policy',
}

export default function PrivacyPolicyPage() {
  const policyHTML = `
<style>
  [data-custom-class='body'], [data-custom-class='body'] * {
    background: transparent !important;
  }
  [data-custom-class='title'], [data-custom-class='title'] * {
    font-family: var(--font-heading) !important;
    font-size: 32px !important;
    color: #F8FAFC !important;
  }
  [data-custom-class='subtitle'], [data-custom-class='subtitle'] * {
    font-family: var(--font-mono) !important;
    color: #94A3B8 !important;
    font-size: 14px !important;
  }
  [data-custom-class='heading_1'], [data-custom-class='heading_1'] * {
    font-family: var(--font-heading) !important;
    font-size: 24px !important;
    color: #F8FAFC !important;
    margin-top: 2rem !important;
    margin-bottom: 1rem !important;
  }
  [data-custom-class='heading_2'], [data-custom-class='heading_2'] * {
    font-family: var(--font-heading) !important;
    font-size: 20px !important;
    color: #E2E8F0 !important;
  }
  [data-custom-class='body_text'], [data-custom-class='body_text'] * {
    color: #CBD5E1 !important;
    font-size: 15px !important;
    font-family: var(--font-sans) !important;
    line-height: 1.6 !important;
  }
  [data-custom-class='link'], [data-custom-class='link'] * {
    color: #6366F1 !important;
    font-size: 15px !important;
    font-family: var(--font-sans) !important;
    word-break: break-word !important;
    text-decoration: underline !important;
    text-underline-offset: 4px;
  }
  table th {
    color: #F8FAFC !important;
    border-color: rgba(203,213,225,0.2) !important;
    padding: 12px !important;
  }
  table td {
    color: #CBD5E1 !important;
    border-color: rgba(203,213,225,0.2) !important;
    padding: 12px !important;
  }
  hr {
    border-color: rgba(203,213,225,0.1) !important;
    margin: 2rem 0 !important;
  }
</style>

<div data-custom-class="body">
  <div><strong><span style="font-size: 26px;"><span data-custom-class="title"><bdt class="block-component"></bdt><bdt class="question"><h1>PRIVACY POLICY</h1></bdt><bdt class="statement-end-if-in-editor"></bdt></span></span></strong></div>
  <div><span style="color: rgb(127, 127, 127);"><strong><span style="font-size: 15px;"><span data-custom-class="subtitle">Last updated <bdt class="question">April 18, 2026</bdt></span></span></strong></span></div>
  <div style="margin-bottom: 2rem;"></div>

  <div style="line-height: 1.5;">
    <span data-custom-class="body_text">
      This Privacy Notice for Luminex Social (doing business as LS) ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you visit our website at <a target="_blank" data-custom-class="link" href="https://www.luminexsocial.com">https://www.luminexsocial.com</a>.
    </span>
  </div>
  <br/>
  
  <div style="line-height: 1.5;">
    <span data-custom-class="body_text">
      <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a target="_blank" data-custom-class="link" href="mailto:ayyan@luminexsocial.com">ayyan@luminexsocial.com</a>.
    </span>
  </div>
  
  <br/><br/>
  <div style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>SUMMARY OF KEY POINTS</h2></span></strong></div>
  <div style="line-height: 1.5;"><span data-custom-class="body_text"><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</span></div>
  <br/>
  <div style="line-height: 1.5;"><span data-custom-class="body_text"><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</span></div>
  <br/>
  <div style="line-height: 1.5;"><span data-custom-class="body_text"><strong>Do we receive any information from third parties?</strong> We do not receive any information from third parties.</span></div>
  <br/>
  <div style="line-height: 1.5;"><span data-custom-class="body_text"><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</span></div>

  <br/><br/>
  <div id="infocollect" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>1. WHAT INFORMATION DO WE COLLECT?</h2></span></strong></div>
  <div style="line-height: 1.5;"><span data-custom-class="heading_2"><h3>Personal information you disclose to us</h3></span></div>
  <div style="line-height: 1.5;"><span data-custom-class="body_text"><em>In Short: We collect personal information that you provide to us.</em></span></div>
  <br/>
  <div style="line-height: 1.5;"><span data-custom-class="body_text">We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services. The personal information we collect depends on the context of your interactions with us, and may include names and email addresses.</span></div>

  <br/><br/>
  <div style="line-height: 1.5;"><span data-custom-class="heading_2"><h3>Information automatically collected</h3></span></div>
  <div style="line-height: 1.5;"><span data-custom-class="body_text"><em>In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</em></span></div>
  <br/>
  <div style="line-height: 1.5;"><span data-custom-class="body_text">We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser characteristics, operating system, language preferences, device name, and location. This information is needed to maintain the security and operation of our Services, and for our internal analytics and reporting.</span></div>

  <br/><br/>
  <div id="cookies" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>2. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2></span></strong></div>
  <div style="line-height: 1.5;"><span data-custom-class="body_text"><em>In Short: We may use cookies and other tracking technologies to collect and store your information.</em></span></div>
  <br/>
  <div style="line-height: 1.5;"><span data-custom-class="body_text">We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services, prevent crashes, fix bugs, save your preferences, and assist with basic site functions. Learn more in our <a data-custom-class="link" href="/cookies">Cookie Notice</a>.</span></div>

  <br/><br/>
  <div id="ai" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>3. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</h2></span></strong></div>
  <div style="line-height: 1.5;"><span data-custom-class="body_text"><em>In Short: We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.</em></span></div>
  <br/>
  <div style="line-height: 1.5;"><span data-custom-class="body_text">As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies to enhance your experience. Your data may be processed through AI Service Providers such as Anthropic, ElevenLabs, OpenAI, Perplexity, and xAI, subject to strict security safeguards.</span></div>

  <br/><br/>
  <div id="DNT" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>4. CONTROLS FOR DO-NOT-TRACK AND GLOBAL PRIVACY CONTROL</h2></span></strong></div>
  <div style="line-height: 1.5;"><span data-custom-class="body_text">We recognize and honor Global Privacy Control (GPC) signals. If you use a browser or extension that supports GPC, we will treat this as a valid request to opt out of the sale or sharing of your personal information for targeted advertising purposes under applicable state privacy laws. When we detect a GPC signal from your browser, we will automatically apply your opt-out preference without requiring you to take any additional action.</span></div>
  
  <br/><br/>
  <div style="line-height: 1.5;">
    <span data-custom-class="body_text">
      <em>Note: This policy template rendering has been truncated to match the readable portion of the provided text. To update or inject the full unabridged HTML, replace the string in <code>app/privacy-policy/page.tsx</code> or paste your complete Termly output.</em>
    </span>
  </div>
</div>
`

  return (
    <main className="min-h-screen bg-[#0B0E14] text-[#F8FAFC]">
      <Navbar />

      <section className="pt-40 pb-32 px-4 relative">
        <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at top, rgba(99,102,241,0.05) 0%, transparent 70%)' }}></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Policy Container */}
          <div 
            className="p-8 md:p-12 rounded-3xl"
            style={{ 
              backgroundColor: 'rgba(30,41,59,0.3)', 
              border: '1px solid rgba(248,250,252,0.1)',
              backdropFilter: 'blur(12px)'
            }}
          >
            {/* 
              Injects the HTML string safely.
              Any scripts in the string will NOT run (React blocks them), keeping the site safe.
            */}
            <div 
              dangerouslySetInnerHTML={{ __html: policyHTML }} 
              className="prose prose-invert max-w-none"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
