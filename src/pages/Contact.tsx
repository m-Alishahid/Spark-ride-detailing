
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-24 pb-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
          </div>
          
          <ContactSection />
          
          {/* <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Find Us On Facebook</h2>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="aspect-video">
                <iframe 
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDecentautodetailing&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no" 
                  frameBorder="0" 
                  allow="encrypted-media"
                  title="Decent Auto Detailing Facebook Page"
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
