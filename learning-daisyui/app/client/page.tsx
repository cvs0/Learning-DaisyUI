"use client"

import { XCircle } from "lucide-react";
import { useState } from "react";


const Page = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [isClosing, setIsClosing] = useState(false);

  const handleClick = (image: string) => {
    setSelectedImage(image);
    const img = new Image();
    img.onload = () => {
      setImageDimensions({ width: img.width, height: img.height });
    };
    img.src = image;
    document.body.style.overflow = 'hidden'; // Disable scrolling
  };
  

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedImage(null);
      setIsClosing(false);
      document.body.style.overflow = ''; // Enable scrolling
    }, 300); // 300ms is the duration of the animation
  };
  
  return (
    <div className='container flex-col items-center justify-center bg-gray-100 font-MONTSERRAT'>
      <div className='p-10 rounded-lg text-center bg-blue-300 hover:bg-blue-400 transition-colors duration-300'>
        <h1 className='text-gray-600 text-6xl pt-10 font-bold'>
          Meteor
          <span className='text-blue-500 inline-block animate-drop'>++</span>
        </h1>
        <p className='font-semibold text-neutral-600 text-sm'>
          A high end <span className='text-blue-500'>Minecraft utility mod.</span>
        </p>
      </div>

      <style jsx>{`
        @keyframes drop {
          0% {
            transform: translateY(-100px);
            opacity: 0;
          }
          30% {
            transform: translateY(30px);
            opacity: 0.8;
          }
          60% {
            transform: translateY(-10px);
            opacity: 0.9;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-drop {
          animation: drop 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .gradient-text {
          background: linear-gradient(45deg, #3498db, #2980b9, #1a5276);
          background-size: 400% 400%;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: gradient 10s ease infinite;
        }

        .overlay {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.8);
          z-index: 1000;
          backdrop-filter: blur(0px);
          transition: backdrop-filter 0.3s ease;
        }

        .overlay.closing {
          backdrop-filter: blur(10px); // Adjust the final blur radius here
        }

        .close-button {
          position: absolute;
          top: 20px;
          right: 20px;
          color: white;
          cursor: pointer;
          z-index: 1100;
        }

        .selected {
          border: 2px solid #000;
          transform: scale(0.8);
        }
      `}</style>

      <div className='container p-10 rounded-lg text-center'>
        <h1 className='text-blue-500 text-4xl pt-10 font-bold gradient-text'>
          Features
        </h1>
        <ul className='mt-8 text-lg text-center'>
          <li className='mb-4 hover:bg-blue-100 transition-colors duration-300'>
            <span className='text-blue-500 font-bold'>1. </span>Bypasses <span className="text-blue-500">|</span> Effortlessly navigate through restrictions and barriers within the game environment.
          </li>
          <li className='mb-4 hover:bg-blue-100 transition-colors duration-300'>
            <span className='text-blue-500 font-bold'>2. </span>Very optimized <span className="text-blue-500">|</span> Experience smooth performance and efficient resource usage for an enhanced gaming experience.
          </li>
          <li className='mb-4 hover:bg-blue-100 transition-colors duration-300'>
            <span className='text-blue-500 font-bold'>3. </span>Advanced PvP features <span className="text-blue-500">|</span> Gain an edge in player-versus-player combat with sophisticated tools and strategies.
          </li>
          <li className='mb-4 hover:bg-blue-100 transition-colors duration-300'>
            <span className='text-blue-500 font-bold'>4. </span>Large collection of utilities <span className="text-blue-500">|</span> Access a wide array of tools and functions to enhance gameplay and customization options.
          </li>
        </ul>
      </div>

      <div className='container p-10 rounded-lg text-center'>
        <h1 className='text-blue-500 text-4xl pt-10 font-bold'>
          Pricing
        </h1>

        <div className="flex justify-center mt-10">
          <div className="card card-compact w-96 shadow-xl mx-4 bg-neutral-200 hover:scale-110 transition-transform duration-300">
            <figure>
              <img src="/images/products/MeteorPP-product-basic.png" alt="Basic" />
            </figure>

            <div className="card-body">
              <h2 className="card-title text-blue-500 hover:bg-blue-100 transition-colors duration-300">
                Basic
                <div className="badge badge-secondary">$5 USD</div>
              </h2>

              <p>Basic Meteor++ provides access to the client only.</p>

              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card card-compact w-96 shadow-xl mx-4 bg-neutral-200 hover:scale-110 transition-transform duration-300">
            <figure>
              <img src="/images/products/MeteorPP-product-standard.png" alt="Standard" />
            </figure>

            <div className="card-body">
              <h2 className="card-title text-blue-500 hover:bg-blue-100 transition-colors duration-300">
                Standard
                <div className="badge badge-secondary">$10 USD</div>
              </h2>

              <p>Standard Meteor++ features a stylish cape and additional bypasses.</p>

              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card card-compact w-96 shadow-xl mx-4 bg-neutral-200 hover:scale-110 transition-transform duration-300">
            <figure>
              <img src="/images/products/MeteorPP-product-premium.png" alt="Premium" />
            </figure>

            <div className="card-body">
              <h2 className="card-title text-blue-500 hover:bg-blue-100 transition-colors duration-300">
                Premium
                <div className="badge badge-secondary">$15 USD</div>
              </h2>

              <p>Premium Meteor++ offers a comprehensive package, including all cosmetics, bypasses, and beta features.</p>

              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='p-10 rounded-lg flex flex-row items-center justify-center space-x-10'>
      {selectedImage && (
        <div className={`overlay ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
          <img
            src={selectedImage}
            className={`fixed inset-0 m-auto z-50`}
            style={{ maxWidth: '80vw', maxHeight: '80vh', filter: 'blur(0px)' }}
          />
          <div className="close-button" onClick={handleClose}><XCircle size={30}/></div>
        </div>
      )}
      <img
        src='/images/meteor-ui.png'
        className={`w-60 h-60 object-cover rounded-lg hover:scale-110 transition-transform duration-300 ${selectedImage === '/images/meteor-ui.png' ? 'selected' : ''}`}
        onClick={() => handleClick('/images/meteor-ui.png')}
      />
      <img
        src='/images/meteor-cpvp-1.png'
        className={`w-60 h-60 object-cover rounded-lg hover:scale-110 transition-transform duration-300 ${selectedImage === '/images/meteor-cpvp-1.png' ? 'selected' : ''}`}
        onClick={() => handleClick('/images/meteor-cpvp-1.png')}
      />
      <img
        src='/images/meteor-cpvp-2.png'
        className={`w-60 h-60 object-cover rounded-lg hover:scale-110 transition-transform duration-300 ${selectedImage === '/images/meteor-cpvp-2.png' ? 'selected' : ''}`}
        onClick={() => handleClick('/images/meteor-cpvp-2.png')}
      />
      </div>
    </div>
  );
};

export default Page;
