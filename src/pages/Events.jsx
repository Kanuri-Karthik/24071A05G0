import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar as CalendarIcon, SlidersHorizontal } from 'lucide-react';
import EventCard from '../components/events/EventCard';
import { DUMMY_EVENTS, CATEGORIES } from '../data/events';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  const filteredEvents = DUMMY_EVENTS.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 py-12"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Discover Amazing <span className="text-primary">Events</span></h1>
        <p className="text-slate-500 max-w-2xl mx-auto italic">Explore, filter, and find your next unforgettable experience. All under the bright sky.</p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col lg:flex-row gap-6 mb-12">
        <div className="flex-grow relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search events, organizers, or locations..." 
            className="input-field pl-12 h-14 text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex flex-wrap gap-4">
          <div className="relative group">
            <select 
              className="appearance-none bg-white h-14 pl-12 pr-10 rounded-xl border border-slate-200 outline-none focus:ring-4 focus:ring-primary/10 transition-all cursor-pointer font-medium text-slate-700"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={20} />
          </div>

          <div className="relative group">
            <select 
              className="appearance-none bg-white h-14 pl-12 pr-10 rounded-xl border border-slate-200 outline-none focus:ring-4 focus:ring-primary/10 transition-all cursor-pointer font-medium text-slate-700"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={20} />
          </div>
        </div>
      </div>

      {/* Category Pills (Optional visual flair) */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {['All', ...CATEGORIES].map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
              selectedCategory === cat 
              ? 'bg-primary text-white shadow-lg shadow-primary/30' 
              : 'bg-white text-slate-500 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="text-slate-400" size={32} />
          </div>
          <h3 className="text-xl font-display font-bold text-slate-800 mb-2">No events found</h3>
          <p className="text-slate-500">Try adjusting your filters or search terms.</p>
          <button 
            onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
            className="mt-6 text-primary font-bold hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
      
      {/* Explicit copyright visibility under content */}
      <div className="w-full text-center mt-12 pb-4">
        <p className="text-slate-400 text-xs font-bold tracking-wide">
          &copy; 24071A05G0.All Rights Reserved.
        </p>
      </div>
    </motion.div>
  );
};

export default Events;
