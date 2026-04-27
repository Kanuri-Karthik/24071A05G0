import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Account created successfully!', {
      icon: '🎉',
    });
    
    setTimeout(() => {
      navigate('/dashboard');
    }, 800);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="min-h-[90vh] flex flex-col items-center justify-center px-4 py-20"
    >
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden glass-card">
        {/* Left Side: Info */}
        <div className="hidden lg:flex flex-col justify-center p-12 bg-primary text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-4xl font-display font-bold mb-8">Join the best event community.</h2>
            <ul className="space-y-6">
              {[
                "Personalized event recommendations",
                "Early bird ticket access",
                "Exclusive invites to private gatherings",
                "Manage all your bookings in one place"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-lg opacity-90">
                  <CheckCircle2 size={24} className="text-blue-200" />
                  {text}
                </li>
              ))}
            </ul>

            <div className="mt-16 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10">
              <p className="italic mb-4">"EventFlow has completely changed how I discover things to do. I've met so many amazing people!"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-400"></div>
                <div>
                  <span className="font-bold block text-sm">Sarah Jenkins</span>
                  <span className="text-xs opacity-70">Tech Enthusiast</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-8 md:p-12 bg-white">
          <div className="mb-8">
            <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Create Account</h1>
            <p className="text-slate-500 text-sm italic border-l-4 border-primary/20 pl-3">No dark shadows here—only bright futures!</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input type="text" required placeholder="John Doe" className="input-field pl-12" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input type="email" required placeholder="john@example.com" className="input-field pl-12" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input type="password" required placeholder="Create a strong password" className="input-field pl-12" />
              </div>
            </div>

            <div className="flex items-start gap-3 py-2">
              <input type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary/20" id="terms" required />
              <label htmlFor="terms" className="text-sm text-slate-500">
                I agree to the <a href="#" className="text-primary font-bold hover:underline">Terms of Service</a> and <a href="#" className="text-primary font-bold hover:underline">Privacy Policy</a>
              </label>
            </div>

            <button type="submit" className="btn-primary w-full py-4 text-lg shadow-xl shadow-primary/20">
              Get Started <ArrowRight size={20} />
            </button>
          </form>

          <p className="mt-8 text-center text-slate-500 text-sm">
            Already have an account? {' '}
            <Link to="/login" className="font-bold text-primary hover:underline transition-colors">Log in instead</Link>
          </p>
        </div>
      </div>
      
      {/* Normal document flow copyright visibility */}
      <div className="w-full text-center mt-8">
        <p className="text-slate-500 text-xs font-bold tracking-wide">
          &copy; 24071A05G0.All Rights Reserved.
        </p>
      </div>
    </motion.div>
  );
};

export default Register;
