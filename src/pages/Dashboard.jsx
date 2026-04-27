import { motion } from 'framer-motion';
import { Calendar, Ticket, Heart, Settings, LogOut, Search, Clock, ArrowRight } from 'lucide-react';
import { DUMMY_EVENTS } from '../data/events';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const myEvents = DUMMY_EVENTS.slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <aside className="lg:w-72 space-y-8">
          <div className="glass-card p-6 text-center">
            <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center p-1 border-2 border-primary/20">
              <img src="https://i.pravatar.cc/150?u=jdoe" alt="Avatar" className="rounded-full w-full h-full object-cover" />
            </div>
            <h2 className="text-xl font-display font-bold text-slate-900">John Doe</h2>
            <p className="text-sm text-slate-500 mb-6 font-medium">Event Enthusiast Since 2024</p>
            <div className="flex justify-center gap-2">
              <div className="px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-teal-100">Gold Member</div>
            </div>
          </div>

          <nav className="space-y-2">
            {[
              { icon: Calendar, label: 'My Bookings', active: true },
              { icon: Heart, label: 'Wishlist' },
              { icon: Ticket, label: 'Coupons' },
              { icon: Settings, label: 'Settings' },
            ].map((item, i) => (
              <button 
                key={i} 
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${
                  item.active 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'bg-white text-slate-500 hover:bg-slate-50 hover:px-8'
                }`}
              >
                <item.icon size={20} />
                {item.label}
              </button>
            ))}
            <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-red-500 hover:bg-red-50 transition-all mt-8">
              <LogOut size={20} />
              Logout
            </button>
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-grow space-y-10">
          <header className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-display font-bold text-slate-900">User Dashboard</h1>
              <p className="text-slate-500">Welcome back! You have 2 events coming up this month.</p>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input type="text" placeholder="Search my events..." className="input-field pl-12" />
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Total Events', value: '12', color: 'bg-blue-500' },
              { label: 'Wishlist', value: '05', color: 'bg-purple-500' },
              { label: 'Reviews', value: '08', color: 'bg-teal-500' }
            ].map((stat, i) => (
              <div key={i} className="glass-card p-6 flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl ${stat.color} flex items-center justify-center text-white shadow-lg shadow-black/5`}>
                  <Calendar size={28} />
                </div>
                <div>
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
                  <p className="text-3xl font-black text-slate-800 tracking-tight">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          <section>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-display font-bold text-slate-900 flex items-center gap-3">
                Upcoming <span className="text-primary">Bookings</span>
              </h3>
              <Link to="/events" className="text-sm font-bold text-primary hover:underline">Explore More</Link>
            </div>

            <div className="space-y-6">
              {myEvents.map((event) => (
                <motion.div 
                  key={event.id}
                  whileHover={{ x: 10 }}
                  className="glass-card p-6 flex flex-col md:flex-row items-center gap-8"
                >
                  <img src={event.image} alt={event.title} className="w-full md:w-40 h-32 object-cover rounded-2xl shadow-md" />
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase mb-2">
                      <Clock size={14} /> Tomorrow at {event.time}
                    </div>
                    <h4 className="text-xl font-display font-bold text-slate-900 mb-2">{event.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1.5"><MapPin size={14} /> {event.location}</div>
                      <div className="flex items-center gap-1.5 font-bold text-slate-800 leading-none">Booking ID: #EF-{event.id}420</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                     <button className="px-6 py-2 border border-slate-200 rounded-full text-sm font-bold hover:bg-slate-50 transition-all">Cancel</button>
                     <Link to={`/events/${event.id}`} className="px-6 py-2 bg-primary text-white rounded-full text-sm font-bold hover:bg-primary-dark transition-all shadow-md shadow-primary/20 flex items-center gap-2">
                        Details <ArrowRight size={14} />
                     </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
