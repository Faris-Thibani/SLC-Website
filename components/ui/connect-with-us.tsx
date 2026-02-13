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
          className={`rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/90 border border-gray-700/50 shadow-2xl backdrop-blur-3xl overflow-hidden p-8 transition-all duration-500 hover:scale-105`}
          style={{
            boxShadow:  '0 0 50px rgba(250, 204, 21, 0.6), 0 0 80px rgba(217, 119, 6, 0.4)'
          }}
        >
          <div className="flex flex-wrap justify-center gap-8 pt-4">
            {/* EDIT LINKEDIN LINK BELOW - Replace href with your LinkedIn profile URL */}
            <a href="https://www.linkedin.com/company/street-lights-co-ltd" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
              <div className="icon-container">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-8 w-8 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  ></path>
                </svg>
              </div>
              <span className="icon-label">LinkedIn</span>
            </a>
            
            {/* EDIT INSTAGRAM LINK BELOW - Replace href with your Instagram profile URL */}
            <a href="https://www.instagram.com/streetlightsco.ltd/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
              <div className="icon-container">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-8 w-8 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.05c-1.224 2.058-3.579 3.367-6.21 3.367-3.897 0-7.055-3.158-7.055-7.055 0-2.631 1.309-4.986 3.367-6.21.622-.571 1.14-1.237 1.14-2.204 0-.966-.518-1.633-1.14-2.204C6.309 5.309 5.527 3.954 5.527 2.38c0-.656.252-1.288.715-1.778.463-.49 1.095-.74 1.751-.74.656 0 1.288.25 1.778.715.49.463.74 1.095.74 1.751 0 .657-.25 1.288-.714 1.778-.464.49-1.095.74-1.751.74-.657 0-1.288-.25-1.778-.714-.49-.464-.74-1.096-.74-1.752 0-.657.25-1.289.714-1.778.464-.49 1.096-.74 1.752-.74.657 0 1.289.25 1.778.715.49.463.74 1.095.74 1.751 0 .966-.518 1.633-1.14 2.204-1.224 1.224-1.978 2.922-1.978 4.806 0 3.897 3.158 7.055 7.055 7.055 2.631 0 4.986-1.309 6.21-3.367"
                  ></path>
                </svg>
              </div>
              <span className="icon-label">Instagram</span>
            </a>
            
            {/* EDIT WHATSAPP LINK BELOW - Replace phone number in wa.me/1234567890 format */}
            <a href="https://wa.me/966583270682" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
              <div className="icon-container">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-8 w-8 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a6.963 6.963 0 00-6.963 6.963c0 1.537.399 3.032 1.156 4.36L.505 21.898l4.593-1.406A6.963 6.963 0 0011.051 3.979c3.843 0 6.963 3.12 6.963 6.963 0 3.843-3.12 6.963-6.963 6.963zm0-12.926c-3.276 0-5.943 2.667-5.943 5.943 0 1.301.43 2.49 1.156 3.48l-747 2.274 2.332-.706a5.918 5.918 0 003.542 1.167c3.276 0 5.943-2.667 5.943-5.943 0-3.276-2.667-5.943-5.943-5.943z"
                  ></path>
                </svg>
              </div>
              <span className="icon-label">WhatsApp</span>
            </a>
            
            {/* EDIT EMAIL LINK BELOW - Replace the email address with your contact email */}
            <a href="mailto:streetlights.ksa@hotmail.com" className="social-icon email">
              <div className="icon-container">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-8 w-8 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                  ></path>
                </svg>
              </div>
              <span className="icon-label">Email</span>
            </a>
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
