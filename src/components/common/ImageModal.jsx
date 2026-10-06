import React, { useEffect } from 'react';
import { X, Tag, Info } from 'lucide-react';

const ImageModal = ({ imageItem, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (imageItem) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [imageItem, onClose]);

  if (!imageItem) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 rounded-full bg-slate-950/80 hover:bg-amber-500 hover:text-slate-950 text-slate-300 border border-slate-700 transition-colors cursor-pointer"
          aria-label="Close image preview"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Modal Image */}
        <div className="relative max-h-[60vh] sm:max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
          <img 
            src={imageItem.image} 
            alt={imageItem.title} 
            className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] object-contain"
          />
        </div>

        {/* Modal Metadata */}
        <div className="p-4 sm:p-6 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                <Tag className="w-3 h-3" />
                {imageItem.category}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                {imageItem.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              {imageItem.caption || imageItem.description}
            </p>
          </div>

          <button
            onClick={onClose}
            className="shrink-0 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium px-4 py-2 rounded-lg border border-slate-700 transition-colors cursor-pointer"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
