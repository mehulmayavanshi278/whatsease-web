"use client"
import React, { useEffect, useRef } from 'react';

const WelcomeEraSection: React.FC = () => {
  // Create refs with proper TypeScript typing
  const leftDiv1Ref = useRef<HTMLDivElement>(null);
  const leftDiv2Ref = useRef<HTMLDivElement>(null);
  const leftDiv3Ref = useRef<HTMLDivElement>(null);
  const rightImage1Ref = useRef<HTMLImageElement>(null);
  const rightImage2Ref = useRef<HTMLImageElement>(null);
  const rightImage3Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Store original positions for the images
    const image1DefaultPosition = { bottom: '110px', right: '190px', zIndex: '30' };
    const image2DefaultPosition = { bottom: '50px', right: '95px', zIndex: '20' };
    const image3DefaultPosition = { bottom: '0', right: '0', zIndex: '10' };

    // Setup intersection observer options
    const options = {
      root: null, // use viewport as root
      rootMargin: '0px',
      threshold: 0.5, // trigger when 50% visible
    };

    // Function to handle when elements enter/exit viewport
    const handleIntersection = (entries: IntersectionObserverEntry[]): void => {
      entries.forEach(entry => {
        const { target, isIntersecting } = entry;

        if (target === leftDiv1Ref.current) {
          // When leftDiv1 is visible
          if (isIntersecting && leftDiv1Ref.current && leftDiv2Ref.current && leftDiv3Ref.current && 
              rightImage1Ref.current && rightImage2Ref.current && rightImage3Ref.current) {
            leftDiv1Ref.current.style.opacity = '1';
            leftDiv2Ref.current.style.opacity = '0.45';
            leftDiv3Ref.current.style.opacity = '0.45';
            
            // Reset images to default positions
            Object.assign(rightImage1Ref.current.style, image1DefaultPosition);
            Object.assign(rightImage2Ref.current.style, image2DefaultPosition);
            Object.assign(rightImage3Ref.current.style, image3DefaultPosition);
          }
        } else if (target === leftDiv2Ref.current) {
          // When leftDiv2 is visible
          if (isIntersecting && leftDiv1Ref.current && leftDiv2Ref.current && leftDiv3Ref.current && 
              rightImage1Ref.current && rightImage2Ref.current && rightImage3Ref.current) {
            leftDiv1Ref.current.style.opacity = '0.45';
            leftDiv2Ref.current.style.opacity = '1';
            leftDiv3Ref.current.style.opacity = '0.45';
            
            // Swap image1 and image2 positions
            Object.assign(rightImage1Ref.current.style, image2DefaultPosition);
            Object.assign(rightImage2Ref.current.style, image1DefaultPosition);
            Object.assign(rightImage3Ref.current.style, image3DefaultPosition);
          }
        } else if (target === leftDiv3Ref.current) {
          // When leftDiv3 is visible
          if (isIntersecting && leftDiv1Ref.current && leftDiv2Ref.current && leftDiv3Ref.current && 
              rightImage1Ref.current && rightImage2Ref.current && rightImage3Ref.current) {
            leftDiv1Ref.current.style.opacity = '0.45';
            leftDiv2Ref.current.style.opacity = '0.45';
            leftDiv3Ref.current.style.opacity = '1';
            
            // Move image3 to image1's position, and shift others
            Object.assign(rightImage3Ref.current.style, image1DefaultPosition);
            Object.assign(rightImage1Ref.current.style, image3DefaultPosition);
            Object.assign(rightImage2Ref.current.style, image2DefaultPosition);
          }
        }
      });
    };

    // Create observer
    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe each div
    if (leftDiv1Ref.current) observer.observe(leftDiv1Ref.current);
    if (leftDiv2Ref.current) observer.observe(leftDiv2Ref.current);
    if (leftDiv3Ref.current) observer.observe(leftDiv3Ref.current);

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <div className="mt-[100px]">
        <div className="">
          <h1 className="text-6xl pt-sans-bold"><i> Welcome to a </i></h1>
          <h1 className="text-[#04B851] text-7xl font-semibold pt-sans-bold">new era of ticketing</h1>
        </div>

        <div className="mt-[80px]">
          <div className="grid grid-cols-2">
            <div className="">
              <div ref={leftDiv1Ref} className="flex gap-x-6 transition-opacity duration-500" id="leftDiv1">
                <div className="relative h-[250px] w-1.5 bg-[#04B851]">
                  <div className="absolute w-[40px] h-[40px] left-1/2">
                    <img className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2" src="/svg/welcomesecrighticon.svg" alt="" />
                    <img className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2" src="/svg/welcomesecrightinside.svg" alt="" />
                  </div>
                </div>
                <div className="">
                  <h1 className="text-2xl pt-sans-bold">Seamless Communication & Engagement</h1>
                  <div className="w-2/3 mt-3">
                    <p className="break-words text-xl whitespace-pre-wrap pt-sans-regular">
                      Enhance attendee experience with WhatsApp integration, personalized notifications, interactive polls, live Q&As, and networking tools.
                    </p>
                  </div>
                </div>
              </div>

              <div ref={leftDiv2Ref} className="flex gap-x-6 mt-5 opacity-45 transition-opacity duration-500" id="leftDiv2">
                <div className="relative h-[250px] w-1.5 bg-[#04B851]">
                  <div className="absolute w-[40px] h-[40px] left-1/2">
                    <img className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2" src="/svg/welcomesecrighticon.svg" alt="" />
                    <img className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2" src="/svg/welcomesecrightinside.svg" alt="" />
                  </div>
                </div>
                <div className="">
                  <h1 className="text-2xl pt-sans-bold">Reliable Offline Support & Cost Efficiency</h1>
                  <div className="w-1/2 mt-2">
                    <p className="break-words text-xl pt-sans-regular whitespace-pre-wrap">
                      Ensure accessibility with offline schedules, maps, FAQs via SMS backup, instantaneous response time as our automation strategies reduces costs and effort, for you.
                    </p>
                  </div>
                </div>
              </div>

              <div ref={leftDiv3Ref} className="flex gap-x-6 mt-5 opacity-45 transition-opacity duration-500" id="leftDiv3">
                <div className="relative h-[250px] w-1.5 bg-[#04B851]">
                  <div className="absolute w-[40px] h-[40px] left-1/2">
                    <img className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2" src="/svg/welcomesecrighticon.svg" alt="" />
                    <img className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2" src="/svg/welcomesecrightinside.svg" alt="" />
                  </div>
                </div>
                <div className="">
                  <h1 className="text-2xl pt-sans-bold">Smart Insights for Better Event Outreach</h1>
                  <div className="w-1/2 mt-2">
                    <p className="break-words text-xl pt-sans-regular whitespace-pre-wrap">
                      Leverage real-time analytics to optimize event planning and engagement and easily measure user metrics throughout the course of your event.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="relative w-[500px] h-[500px]">
                <img className="w-full absolute" src="/svg/welcomesecrightbg.svg" alt="" />
                <img 
                  ref={rightImage1Ref} 
                  className="w-[300px] absolute bottom-[110px] right-[190px] z-30 transition-all duration-500" 
                  id="rightImage1" 
                  src="/svg/card3.svg" 
                  alt="" 
                />
                <img 
                  ref={rightImage2Ref} 
                  className="w-[300px] absolute bottom-[50px] right-[95px] z-20 transition-all duration-500" 
                  id="rightImage2" 
                  src="/svg/card2.svg" 
                  alt="" 
                />
                <img 
                  ref={rightImage3Ref} 
                  className="w-[300px] absolute bottom-0 right-0 z-10 transition-all duration-500" 
                  id="rightImage3" 
                  src="/svg/card1.svg" 
                  alt="" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeEraSection;