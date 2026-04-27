import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, ShieldCheck, Map, Calendar, ArrowRight, Ticket, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  // Expanded features explicitly for the 5-second slideshow presentation
  const features = [
    { 
      icon: Search, 
      title: "Discover Amazing Events", 
      desc: "Find the most exciting events happening around you. From music festivals to tech summits, we've got your next memory covered.", 
      color: "text-blue-500", 
      bg: "bg-blue-50" 
    },
    { 
      icon: Users, 
      title: "Community Driven Experiences", 
      desc: "Join thousands of like-minded people at amazing events happening all around the world.", 
      color: "text-pink-500", 
      bg: "bg-pink-50" 
    },
    { 
      icon: ShieldCheck, 
      title: "Bank-Level Secure Booking", 
      desc: "Your transactions are shielded with industry-standard security integration.", 
      color: "text-teal-500", 
      bg: "bg-teal-50" 
    },
    { 
      icon: Map, 
      title: "Interactive Dynamic Maps", 
      desc: "Find events near your exact location easily with integrated dynamic mapping elements.", 
      color: "text-purple-500", 
      bg: "bg-purple-50" 
    },
    {
      icon: Ticket,
      title: "Host Your Own Events",
      desc: "Join our network of hosts and start organizing experiences that inspire. It's free to list your first event!",
      color: "text-amber-500",
      bg: "bg-amber-50"
    }
  ];

  // Auto slide features every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [features.length]);

  return (
    <div className="h-[calc(100vh-80px)] w-full flex items-center justify-center p-4 md:p-8 relative overflow-hidden bg-slate-50/50">
      {/* Animated Background Ambience */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-5xl w-full h-full max-h-[600px] flex flex-col relative rounded-[2rem] overflow-hidden glass shadow-2xl shadow-blue-900/10 border border-white/60 z-10 p-8 md:p-16">
        
        <div className="text-center absolute top-10 left-1/2 -translate-x-1/2 w-full px-4">
          <h1 className="text-xl md:text-2xl font-bold text-slate-400 uppercase tracking-widest mb-2">EventFlow Platform</h1>
          <p className="text-sm text-slate-500">Log in securely via the navbar to access these features</p>
        </div>

        <div className="flex-1 relative flex items-center justify-center mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.1, y: -30 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="flex flex-col items-center justify-center w-full max-w-2xl text-center"
            >
              {(() => {
                const CurrentIcon = features[currentFeature].icon;
                return (
                  <>
                    <div className={`w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] flex items-center justify-center mb-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] ${features[currentFeature].bg} border-4 border-white rotate-3 hover:rotate-0 transition-transform duration-500`}>
                      <CurrentIcon size={72} className={features[currentFeature].color} />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-black text-slate-800 mb-6 tracking-tight leading-tight">{features[currentFeature].title}</h2>
                    <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-xl">{features[currentFeature].desc}</p>
                  </>
                );
              })()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slideshow Pagination Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20 bg-white/50 px-6 py-3 rounded-full backdrop-blur-md shadow-sm border border-white">
          {features.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentFeature(i)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                currentFeature === i ? 'w-12 bg-primary shadow-lg shadow-primary/40' : 'bg-slate-300 hover:bg-slate-400 hover:scale-125'
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Home;
