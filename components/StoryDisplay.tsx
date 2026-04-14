import React from 'react';

interface StoryDisplayProps {
  story: string;
  isLoading: boolean;
}

const LoadingIndicator: React.FC = () => (
    <div className="flex flex-col items-center justify-center text-center text-rose-500">
        <svg className="animate-pulse h-16 w-16 text-rose-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
        <p className="mt-4 font-sans text-lg">Writing our next chapter...</p>
    </div>
);

const InitialMessage: React.FC = () => (
    <div className="text-center text-rose-500/80">
        <p className="font-serif text-2xl">Every story of ours is my favorite.</p>
        <p className="mt-2 font-sans">Choose a theme above to create a new one, my love.</p>
    </div>
);


const StoryDisplay: React.FC<StoryDisplayProps> = ({ story, isLoading }) => {
  return (
    <div className="w-full max-w-3xl bg-rose-50/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl min-h-[350px] flex items-center justify-center transition-all duration-500 mt-8 border border-white/30">
      {isLoading ? (
        <LoadingIndicator />
      ) : story ? (
        <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-wrap animate-fade-in font-sans">{story}</p>
      ) : (
        <InitialMessage />
      )}
    </div>
  );
};

export default StoryDisplay;