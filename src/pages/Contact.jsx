import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, Camera, Briefcase } from 'lucide-react';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent! We will get back to you soon.');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 py-20"
    >
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Let's <span className="text-primary">Connect</span></h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto italic">Have questions about an event or want to host your own? Our team is here to help you every step of the way.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <motion.div 
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="glass-card p-10"
        >
          <div className="mb-8">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Send us a Message</h2>
            <p className="text-slate-500">We usually respond within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Your Name</label>
                <input type="text" required placeholder="John Doe" className="input-field" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                <input type="email" required placeholder="john@example.com" className="input-field" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
              <select className="input-field px-4 appearance-none cursor-pointer">
                <option>General Inquiry</option>
                <option>Booking Support</option>
                <option>Event Hosting</option>
                <option>Feedback</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
              <textarea 
                required 
                rows={5} 
                placeholder="How can we help you?" 
                className="input-field resize-none"
              />
            </div>

            <button type="submit" className="btn-primary w-full py-4 text-lg">
              Send Message <Send size={20} />
            </button>
          </form>
        </motion.div>

        {/* Contact Info & Map */}
        <motion.div 
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="space-y-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Mail, label: 'Email Us', value: 'hello@eventflow.com', color: 'bg-blue-50 text-blue-600' },
              { icon: Phone, label: 'Call Us', value: '+1 (555) 000-0000', color: 'bg-teal-50 text-teal-600' },
              { icon: MessageSquare, label: 'Live Chat', value: 'Available 9am - 5pm', color: 'bg-purple-50 text-purple-600' },
              { icon: MapPin, label: 'Visit Us', value: '123 Event St, Metro City', color: 'bg-pink-50 text-pink-600' }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-4">
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center`}>
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</h4>
                  <p className="font-bold text-slate-800">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-duration-500" />
            <div className="relative h-64 w-full bg-slate-100 rounded-[2rem] border-4 border-white shadow-xl overflow-hidden">
               {/* Map placeholder pattern */}
               <div className="w-full h-full bg-slate-200 flex items-center justify-center relative">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white animate-bounce shadow-lg shadow-primary/30">
                      <MapPin size={24} />
                    </div>
                    <span className="mt-4 font-bold text-slate-400">Metro City, CA</span>
                  </div>
               </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
             {[Globe, Camera, Briefcase].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-400 hover:text-primary hover:shadow-md transition-all border border-slate-50">
                  <Icon size={24} />
                </a>
              ))}
          </div>
        </motion.div>
      </div>
      
      {/* Explicit copyright visibility under content */}
      <div className="w-full text-center mt-16 pb-4">
        <p className="text-slate-400 text-xs font-bold tracking-wide">
          &copy; 24071A05G0.All Rights Reserved.
        </p>
      </div>
    </motion.div>
  );
};

export default Contact;
