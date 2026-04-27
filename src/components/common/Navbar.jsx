import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../../utils/cn';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Display Navbar everywhere as requested

  const navLinks = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3",
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <Calendar size={24} />
          </div>
          <span className="text-xl font-display font-bold tracking-tight">Event<span className="text-primary">Flow</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === link.path ? "text-primary" : "text-slate-600"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-4">
            <Link to="/login" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              Login
            </Link>
            <Link to="/register" className="btn-primary py-2 text-sm">
              Register
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 overflow-hidden"
      >
        <div className="px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-medium py-2",
                location.pathname === link.path ? "text-primary" : "text-slate-600"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
            <Link 
              to="/login" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-slate-600"
            >
              <User size={18} /> Login
            </Link>
            <Link 
              to="/register" 
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full"
            >
              Register Now
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
