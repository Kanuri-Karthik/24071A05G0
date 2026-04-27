import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Users, Share2, Heart, ArrowLeft, ShieldCheck, CreditCard, CheckCircle, Info } from 'lucide-react';
import { useState, useEffect } from 'react';
import { DUMMY_EVENTS } from '../data/events';
import { toast } from 'react-hot-toast';

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [isBooking, setIsBooking] = useState(false);
  const [ticketCount, setTicketCount] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const foundEvent = DUMMY_EVENTS.find(e => e.id === id);
    if (!foundEvent) navigate('/events');
    else setEvent(foundEvent);
    window.scrollTo(0, 0);
  }, [id, navigate]);

  const handleBooking = (e) => {
    e.preventDefault();
    setIsBooking(true);
    // Simulate API call
    setTimeout(() => {
      setIsBooking(false);
      setIsSuccess(true);
      toast.success('Tickets booked successfully!');
    }, 2000);
  };

  if (!event) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 py-8 md:py-12"
    >
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8 font-medium"
      >
        <ArrowLeft size={18} /> Back to Events
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-10">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-100"
          >
            <img src={event.image} alt={event.title} className="w-full aspect-video object-cover" />
            <div className="absolute top-6 right-6 flex gap-3">
              <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-slate-600 hover:text-pink-500 transition-colors shadow-sm">
                <Heart size={20} />
              </button>
              <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-slate-600 hover:text-primary transition-colors shadow-sm">
                <Share2 size={20} />
              </button>
            </div>
          </motion.div>

          <div className="space-y-6">
            <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary w-fit rounded-full text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> {event.category} Event
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
              {event.title}
            </h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-y border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Calendar size={24} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Date & Time</span>
                  <p className="font-bold text-slate-800">{new Date(event.date).toLocaleDateString()} at {event.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Location</span>
                  <p className="font-bold text-slate-800 truncate max-w-[150px]">{event.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600">
                  <Users size={24} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Availability</span>
                  <p className="font-bold text-slate-800">{event.availableSeats} Seats Left</p>
                </div>
              </div>
            </div>

            <div className="prose prose-slate max-w-none">
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">About the Event</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {event.description}
                <br /><br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar: Booking Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 space-y-6">
            {!isSuccess ? (
              <motion.div 
                layoutId="booking-card"
                className="glass-card p-8 border-primary/20"
              >
                <div className="flex justify-between items-center mb-8">
                  <span className="text-slate-500 font-medium">Ticket Price</span>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-slate-900">{event.price > 0 ? `$${event.price}` : 'Free'}</span>
                    <span className="text-slate-400 text-sm block">per person</span>
                  </div>
                </div>

                <form onSubmit={handleBooking} className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-700 ml-1">Quantity</label>
                    <div className="flex items-center justify-between p-2 rounded-2xl bg-slate-50 border border-slate-100">
                      <button 
                        type="button"
                        onClick={() => ticketCount > 1 && setTicketCount(ticketCount - 1)}
                        className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all shadow-sm"
                      >
                        -
                      </button>
                      <span className="text-xl font-bold text-slate-900">{ticketCount}</span>
                      <button 
                        type="button"
                        onClick={() => setTicketCount(ticketCount + 1)}
                        className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all shadow-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 flex gap-3 text-sm text-slate-600">
                    <Info size={20} className="text-primary shrink-0" />
                    <p>Total amount includes all taxes and service fees.</p>
                  </div>

                  <div className="flex justify-between items-center pb-6 border-b border-dashed border-slate-200">
                    <span className="font-bold text-slate-900">Total Price</span>
                    <span className="text-2xl font-black text-primary">${event.price * ticketCount}</span>
                  </div>

                  <button 
                    disabled={isBooking}
                    className="btn-primary w-full py-4 text-lg relative overflow-hidden group"
                  >
                    {isBooking ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <>
                        <ShieldCheck size={20} /> Book Tickets Now
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-6 flex items-center justify-center gap-6 opacity-40">
                  <CreditCard size={24} />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Secure Payments</span>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="glass-card p-10 text-center bg-teal-50 border-teal-200"
              >
                <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-teal-200">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Booking Confirmed!</h3>
                <p className="text-slate-600 mb-8">We've sent your tickets to your registered email address.</p>
                <button 
                  onClick={() => navigate('/dashboard')}
                  className="btn-primary w-full bg-teal-600 hover:bg-teal-700"
                >
                  View My Tickets
                </button>
              </motion.div>
            )}

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-4">Hosted By</h4>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200" />
                <div>
                  <p className="font-bold text-slate-800">{event.organizer}</p>
                  <p className="text-xs text-slate-500">Verified Professional Organizer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default EventDetail;
