import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Globe, Monitor } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Successfully logged in!', {
      style: {
        borderRadius: '16px',
        background: '#fff',
        color: '#0EA5E9',
      },
    });
    
    setTimeout(() => {
      navigate('/dashboard');
    }, 800);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-20"
    >
      <div className="w-full max-w-md">
        <div className="glass-card p-8 md:p-10">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Welcome Back</h1>
            <p className="text-slate-500">Enter your credentials to access your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="email" 
                  required
                  placeholder="name@example.com"
                  className="input-field pl-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-semibold text-slate-700">Password</label>
                <a href="#" className="text-xs font-bold text-primary hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="password" 
                  required
                  placeholder="••••••••"
                  className="input-field pl-12"
                />
              </div>
            </div>

            <button type="submit" className="btn-primary w-full py-4 text-lg">
              Sign In <ArrowRight size={20} />
            </button>
          </form>

          <div className="mt-10">
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-4 text-slate-400 font-medium">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 px-4 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-medium text-slate-700">
                <Globe size={18} /> Google
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-medium text-slate-700">
                <Monitor size={18} /> Github
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-slate-500 text-sm">
            Don't have an account? {' '}
            <Link to="/register" className="font-bold text-primary hover:underline">Create an account</Link>
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

export default Login;
