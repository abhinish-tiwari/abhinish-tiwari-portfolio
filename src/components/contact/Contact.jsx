import HeaderSection from '../common/herder-section/HeaderSection';
import ContactInfo from './contact-info/ContactInfo';
import ContactForm from './contact-form/ContactForm';
import {SocialLinks} from '../common/social-links/SocialLinks';


const Contact = () => {
  return (
    <div className="py-20 bg-white dark:bg-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeaderSection headerName="Get In Touch" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <ContactInfo />
            <SocialLinks/>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
