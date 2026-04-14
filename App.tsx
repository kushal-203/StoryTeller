import React, { useState, useCallback, useMemo } from 'react';
import { Theme } from './types';
import { generateStory } from './services/geminiService';
import ThemeSelector from './components/ThemeSelector';
import StoryDisplay from './components/StoryDisplay';

const App: React.FC = () => {
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  const [story, setStory] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleThemeSelect = useCallback(async (theme: Theme) => {
    setSelectedTheme(theme);
    setIsLoading(true);
    setStory('');
    setError(null);

    try {
      const generatedStory = await generateStory(theme);
      setStory(generatedStory);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(errorMessage);
      setStory(`Oops! Our storyteller is a bit shy today. Please try another theme. Error: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleGoBack = useCallback(() => {
    setIsStarted(false);
    setSelectedTheme(null);
    setStory('');
    setIsLoading(false);
    setError(null);
  }, []);
  
  const particles = useMemo(() => Array.from({ length: 25 }).map((_, i) => {
    const size = Math.floor(Math.random() * 20) + 10;
    const style = {
      width: `${size}px`,
      height: `${size}px`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 20}s`,
      animationDuration: `${Math.floor(Math.random() * 15) + 15}s`,
    };
    return (
      <svg key={i} className="particle drop-shadow-md text-pink-400" style={style} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>
    );
  }), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 text-gray-800 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden animated-gradient">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {particles}
      </div>
      <style>{`
        body {
          font-family: 'Nunito Sans', sans-serif;
          background-color: #fdf2f8; /* pink-50 fallback */
        }
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        .font-sans {
          font-family: 'Nunito Sans', sans-serif;
        }

        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(15px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes gradient-animation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animated-gradient {
          background-size: 300% 150%;
          animation: gradient-animation 15s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0) scale(0.8) rotate(0deg); opacity: 0; }
          10% { opacity: 0.6; }
          50% { transform: translateY(-50vh) scale(1.2) rotate(15deg); opacity: 0.8; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-110vh) scale(1) rotate(-15deg); opacity: 0; }
        }
        .particle {
          position: absolute;
          bottom: -50px;
          animation: float infinite ease-in-out;
          opacity: 0;
        }
      `}</style>
      
      <main className="container mx-auto flex flex-col items-center text-center z-10 w-full">
        {!isStarted ? (
          <div className="animate-fade-in flex flex-col items-center">
            <div className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-xl text-center border border-white/30">
              <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-fuchsia-500 tracking-tight font-serif">
                For My Dearest Manya
              </h1>
              <p className="mt-4 text-lg text-rose-800/90 font-sans max-w-md">
                Across all the miles, I'm always thinking of you and the stories we're yet to live. Here are a few I imagined for us.
              </p>
              <button
                onClick={() => setIsStarted(true)}
                className="mt-8 bg-rose-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-rose-600 transform hover:scale-105 transition-all duration-300 ease-in-out font-sans"
              >
                Open Our Storybook
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col items-center animate-fade-in">
            <div className="w-full relative flex justify-center items-center mb-8">
                <button
                    onClick={handleGoBack}
                    className="absolute left-0 text-rose-600 hover:text-fuchsia-500 font-sans transition-colors duration-300 text-sm"
                    aria-label="Back to cover page"
                >
                    &larr; Back to Cover
                </button>
                <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-fuchsia-500 tracking-tight font-serif">
                 Our Storybook
                </h1>
            </div>

            <>
                <p className="text-lg text-rose-800/90 font-sans mb-6 -mt-4">A New Chapter</p>
                <ThemeSelector 
                onSelectTheme={handleThemeSelect} 
                isLoading={isLoading}
                selectedTheme={selectedTheme}
                />
                {error && <p className="text-red-500 mt-4 bg-white/50 p-2 rounded">Error: {error}</p>}
                <StoryDisplay story={story} isLoading={isLoading} />
            </>
            
            <footer className="mt-8 text-sm text-rose-700/80 font-sans">
              <p>Crafted with love for you, by Kushal.</p>
            </footer>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
