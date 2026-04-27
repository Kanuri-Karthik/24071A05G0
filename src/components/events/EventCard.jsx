import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="glass-card overflow-hidden group h-full flex flex-col"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
          {event.category}
        </div>
        {event.price === 0 && (
          <div className="absolute top-4 right-4 bg-teal-500 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm">
            Free
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-3">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} className="text-primary" />
            <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="text-primary" />
            <span className="truncate max-w-[120px]">{event.location}</span>
          </div>
        </div>

        <h3 className="text-lg font-display font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors line-clamp-1">
          {event.title}
        </h3>
        
        <p className="text-slate-500 text-sm line-clamp-2 mb-6">
          {event.description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4">
          <span className="text-xl font-bold text-slate-900">
            {event.price > 0 ? `$${event.price}` : 'Free'}
          </span>
          <Link 
            to={`/events/${event.id}`} 
            className="flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-2 transition-all"
          >
            Book Now <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
