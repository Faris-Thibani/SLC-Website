'use client';

const SocialConnect = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center p-4 font-sans w-full">
      <div className="w-full max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 mb-4">
          Street Lights
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Co., Ltd.
        </p>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Illuminating your path forward with innovative lighting solutions
        </p>
      </div>
      
      <div className="relative w-full max-w-2xl">
        {/* 3D Glowing Container */}
        <div 
          className={`rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/90 border border-gray-700/50 shadow-2xl backdrop-blur-3xl overflow-hidden px-12 py-16 transition-all duration-500 hover:scale-105`}
          style={{
            boxShadow:  '0 0 50px rgba(250, 204, 21, 0.6), 0 0 80px rgba(217, 119, 6, 0.4)'
          }}
        >
          <div className="flex flex-wrap justify-center gap-8 pt-12">
            {/* EDIT LINKEDIN LINK BELOW - Replace href with your LinkedIn profile URL */}
            <a href="https://www.linkedin.com/company/street-lights-co-ltd" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
              <div className="icon-container">
                <img src="/icons/linkedin.png" alt="LinkedIn" className="h-8 w-8" />
              </div>
              <span className="icon-label">LinkedIn</span>
            </a>
            
            {/* EDIT INSTAGRAM LINK BELOW - Replace href with your Instagram profile URL */}
            <a href="https://www.instagram.com/streetlightsco.ltd/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
              <div className="icon-container">
                <img src="/icons/instagram.png" alt="Instagram" className="h-8 w-8" />
              </div>
              <span className="icon-label">Instagram</span>
            </a>
            
            {/* EDIT WHATSAPP LINK BELOW - Replace phone number in wa.me/1234567890 format */}
            <a href="https://wa.me/966583270682" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
              <div className="icon-container">
                <img src="/icons/whatsapp.png" alt="WhatsApp" className="h-8 w-8" />
              </div>
              <span className="icon-label">WhatsApp</span>
            </a>
            
            {/* EDIT EMAIL LINK BELOW - Replace the email address with your contact email */}
            <a href="mailto:streetlights.ksa@hotmail.com" className="social-icon email">
              <div className="icon-container">
                <img src="/icons/email.png" alt="Email" className="h-8 w-8" />
              </div>
              <span className="icon-label">Email</span>
            </a>
          </div>
          <div className="text-center mt-12">
            <p className="text-xl font-semibold text-yellow-300">Coming Soon</p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .social-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }
        
        .icon-container {
          display: inline-flex;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          transition: all 0.3s ease;
          position: relative;
          justify-content: center;
          align-items: center;
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .social-icon:hover .icon-container {
          transform: translateY(-10px) scale(1.1);
        }
        
        .social-icon:hover .icon-label {
          opacity: 1;
          transform: translateY(5px);
        }
        
        .icon-label {
          margin-top: 12px;
          color: white;
          font-weight: 500;
          opacity: 0.7;
          transition: all 0.3s ease;
        }
        
        .social-icon.linkedin:hover .icon-container {
          background: #0077b5;
          box-shadow: 0 0 20px rgba(0, 119, 181, 0.6);
        }
        
        .social-icon.instagram:hover .icon-container {
          background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
          box-shadow: 0 0 20px rgba(225, 48, 108, 0.6);
        }
        
        .social-icon.whatsapp:hover .icon-container {
          background: #25D366;
          box-shadow: 0 0 20px rgba(37, 211, 102, 0.6);
        }
        
        .social-icon.email:hover .icon-container {
          background: #EA4335;
          box-shadow: 0 0 20px rgba(234, 67, 53, 0.6);
        }
        
        .social-icon:hover svg {
          animation: shake 0.5s;
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0) rotate(0); }
          20% { transform: translateX(-5px) rotate(-5deg); }
          40% { transform: translateX(5px) rotate(5deg); }
          60% { transform: translateX(-5px) rotate(-5deg); }
          80% { transform: translateX(5px) rotate(5deg); }
        }
        
        .icon-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0.4) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        
        .social-icon:hover .icon-container::before {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export { SocialConnect };
