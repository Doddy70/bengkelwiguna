// app/terms/page.tsx
import Link from "next/link";
import PageTitle from "@/components/ui/PageTitle";

export const metadata = {
    title: 'Privacy policy - Exsit Next',
    description: 'Read the terms and conditions for using Exsit Next template.',
};

export default function PrivacyPage() {
    return (
        <>
            {/* Page Title */}
            <PageTitle
                title="Privacy policy"
                subtitle="Genuine feedback from those who know us best."
            />
            <section className="term-wrap font-dm lg:pb-24 pb-12">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 lg:pt-24 pt-20">
                    <div className="lg:w-7/12 mx-auto">
                        <h2 className="text-2xl md:text-3xl text-gray-900 font-semibold">1. Introduction</h2>
                        <ul className="list-disc py-6 pl-5 mb-3 text-gray-800 font-medium text-[17px] leading-7">
                            <li><strong>Personal Information:</strong> Name, email address, phone number, etc. (only if provided via forms)</li>
                            <li><strong>Usage Data:</strong> IP address, browser type, device information, and pages visited</li>
                            <li><strong>Cookies:</strong> We may use cookies to enhance your experience on our site</li>
                        </ul>
                        <p className="mb-8 text-gray-800 font-medium text-[17px] leading-7">Fintech startups are rising to meet these expectations by offering tools that go beyond traditional banking. Going through this checklist will ensure that your content covers multiple angles, making it richer and more inclusive. This approach prevents your content from feeling one-dimensional or narrowly focused—allowing it to resonate with a broader and more diverse audience.</p>
                        
                        <h2 className="text-2xl md:text-3xl text-gray-900 font-semibold">2. How We Use Your Information</h2>
                        <ul className="mb-8 list-disc py-6 pl-5 mb-3 text-gray-800 font-medium text-[17px] leading-7">
                            <li>To respond to inquiries or customer service requests</li>
                            <li>To improve our website functionality and user experience</li>
                            <li>To send occasional updates, if you opt-in to our mailing list</li>
                        </ul> 
                        
                        <h2 className="text-2xl md:text-3xl text-gray-900 font-semibold mb-4">3. Sharing Your Information</h2>
                        <p className="text-gray-800 font-medium text-[17px] leading-7">We do not sell, trade, or share your personal information with third parties except as necessary to provide our services or comply with the law.</p>
                        <p className="mb-8 text-gray-800 font-medium text-[17px] leading-7">Third parties who perform services on your behalf (e.g., hosting, payment processing, analytics, email delivery, customer support). Clearly state that these providers are typically bound by confidentiality agreements and only use data for specified purposes.</p>
                        
                        <h2 className="text-2xl md:text-3xl text-gray-900 font-semibold mb-4">4. Third-Party Services</h2>
                        <p className="text-gray-800 font-medium text-[17px] leading-7">We may use third-party tools like Google Analytics or email providers. These tools may collect data in accordance with their own privacy policies.</p>
                        <p className="mb-8 text-gray-800 font-medium text-[17px] leading-7">If you are involved in a merger, acquisition, or asset sale, explain that data may be transferred as part of that transaction. Explain that you may share data that cannot reasonably identify an individual for various purposes (e.g., research, marketing, reporting).</p>
                        
                        <h2 className="text-2xl md:text-3xl text-gray-900 font-semibold mb-4">5. Your Rights</h2>
                        <p className="text-gray-800 font-medium text-[17px] leading-7">You can request to review, update, or delete your personal data by contacting us directly at <Link href="mailto:support@uitheme.net" className="text-blue-600 underline">support@uitheme.net</Link>.</p>
                        <ul className="list-disc py-6 pl-5 mb-3 text-gray-800 font-medium text-[17px] leading-7">
                            <li>Complying with applicable laws, regulations, and legal processes.</li>
                            <li>Responding to lawful requests from public authorities.</li>
                            <li>Enforcing your terms and conditions.</li>
                        </ul> 
                        
                        <h2 className="text-2xl md:text-3xl text-gray-900 font-semibold mb-4">6. Data Security</h2>
                        <p className="mb-8 text-gray-800 font-medium text-[17px] leading-7">We implement reasonable security measures to protect your data from unauthorized access, disclosure, or misuse. Describe the security measures you implement to protect data (e.g., encryption, access controls, firewalls, secure servers, regular security audits, employee training)</p>
                        
                        <h2 className="text-2xl md:text-3xl text-gray-900 font-semibold mb-4">7. Changes to This Policy</h2>
                        <p className="mb-8 text-gray-800 font-medium text-[17px] leading-7">We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with a new effective date. Acknowledge that no method of transmission over the internet or electronic storage is 100% secure, and while you strive to protect data, you cannot guarantee absolute security.</p>
                        
                        <h2 className="text-2xl md:text-3xl text-gray-900 font-semibold mb-4">8. Contact Us</h2>
                        <p className="text-gray-800 font-medium text-[17px] leading-7">If you have any questions about this Privacy Policy, please contact us at <Link href="mailto:support@uitheme.net" className="text-blue-600 underline">support@uitheme.net</Link>. If you do collect data from minors (only where legally permissible and with parental consent), describe the process.</p>
                    </div>
                </div>
            </section>
        </>
    );
}
