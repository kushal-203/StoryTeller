import React from 'react';
import { THEME_OPTIONS } from '../constants';
import { Theme } from '../types';

interface ThemeSelectorProps {
  onSelectTheme: (theme: Theme) => void;
  isLoading: boolean;
  selectedTheme: Theme | null;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ onSelectTheme, isLoading, selectedTheme }) => {
  return (
    <div className="w-full max-w-4xl">
      <h2 className="text-center text-xl text-rose-800/80 mb-8 font-sans font-medium tracking-wide">How should our story unfold today?</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {THEME_OPTIONS.map((themeOption) => (
          <button
            key={themeOption.name}
            onClick={() => onSelectTheme(themeOption.name)}
            disabled={isLoading}
            className={`
              relative group overflow-hidden p-4 rounded-2xl shadow-md cursor-pointer 
              transition-all duration-500 ease-out flex flex-col items-center justify-center aspect-square
              disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-md
              border border-white/60 hover:border-pink-300
              ${selectedTheme === themeOption.name && !isLoading ? 'ring-4 ring-pink-400 bg-white shadow-xl scale-105' : 'bg-white/40 hover:bg-white/80 backdrop-blur-md hover:shadow-xl hover:-translate-y-2'}
            `}
          >
            <div className={`transition-transform duration-500 ${selectedTheme === themeOption.name ? 'scale-110' : 'group-hover:scale-125 group-hover:-rotate-[-5deg]'}`}>
              {themeOption.icon}
            </div>
            <span className={`font-sans font-bold text-center text-sm transition-colors duration-300 ${selectedTheme === themeOption.name ? 'text-pink-600' : 'text-gray-600 group-hover:text-pink-500'}`}>
              {themeOption.name}
            </span>
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-200/0 via-pink-200/0 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;