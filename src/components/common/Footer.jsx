import { Link, useLocation } from 'react-router-dom';
import { Calendar, Camera, Globe, MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  if (location.pathname === '/') return null;

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <Calendar size={18} />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">Event<span className="text-primary">Flow</span></span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Making event management as simple as a click. Discover, book, and enjoy the best experiences around you.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/events" className="text-slate-500 hover:text-primary transition-colors text-sm">Browse Events</Link></li>
              <li><Link to="/login" className="text-slate-500 hover:text-primary transition-colors text-sm">Host an Event</Link></li>
              <li><Link to="/dashboard" className="text-slate-500 hover:text-primary transition-colors text-sm">User Dashboard</Link></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-primary transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-slate-900 mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors text-sm">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-slate-900 mb-6">Connect With Us</h4>
            <div className="flex gap-4 mb-6">
              {[Globe, Camera, MessageCircle].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Newsletter" 
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none text-sm focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <button className="absolute right-2 top-1.5 p-1.5 text-primary hover:text-primary-dark transition-colors">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-50 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs text-center md:text-left font-bold tracking-wide">
            &copy; 24071A05G0.All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] text-slate-300 font-medium tracking-widest uppercase italic">Light Mode Only</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
