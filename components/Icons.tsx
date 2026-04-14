import React from 'react';

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="w-12 h-12 text-rose-500 mb-2">{children}</div>
);

export const FantasyIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c2.316 0 4.29-1.03 5.5-2.625 1.21-1.595 1.875-3.697 1.875-5.625 0-4.436-3.267-8.05-7.375-8.05-4.108 0-7.375 3.614-7.375 8.05 0 1.928.665 4.03 1.875 5.625 1.21 1.595 3.184 2.625 5.5 2.625zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
        </svg>
    </IconWrapper>
);

export const RomcomIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
    </IconWrapper>
);

export const AdventureIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 20.25h9.75l-4.25-3.75-4.25 3.75-1.25-9.75L3.75 3.75 9 8.25l1.5-3.75L12 2.25l1.5 2.25L15 8.25l5.25-4.5-5.25 6.75-1.25 9.75z" />
             <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5c0-2.485-2.015-4.5-4.5-4.5s-4.5 2.015-4.5 4.5c0 2.485 2.015 4.5 4.5 4.5s4.5-2.015 4.5-4.5z" />
        </svg>
    </IconWrapper>
);

export const SciFiIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9.75c0 2.071-1.679 3.75-3.75 3.75s-3.75-1.679-3.75-3.75 1.679-3.75 3.75-3.75 3.75 1.679 3.75 3.75z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c-3.13 0-6-1.682-6-3.75s2.87-3.75 6-3.75 6 1.682 6 3.75-2.87 3.75-6 3.75zM12 2.25c3.13 0 6 1.682 6 3.75s-2.87 3.75-6 3.75-6-1.682-6-3.75S8.87 2.25 12 2.25z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75z" />
            <path d="M12.75 12a.75.75 0 00-1.5 0v.01a.75.75 0 001.5 0V12z" />
             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0z" />
        </svg>
    </IconWrapper>
);

export const MysteryIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v.01" />
        </svg>
    </IconWrapper>
);

export const FutureIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M8.25 21H3.75V8.25M3.75 8.25h4.5v12.75" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
    </IconWrapper>
);

export const MagicIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a3.375 3.375 0 00-2.662-2.662L11.25 18l1.938-.648a3.375 3.375 0 002.662-2.662L16.25 13.5l.648 1.938a3.375 3.375 0 002.662 2.662L21 18.75l-1.938.648a3.375 3.375 0 00-2.662 2.662z" />
        </svg>
    </IconWrapper>
);

export const FlirtyIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9 9.75h.008v.008H9V9.75zm6 0h.008v.008H15V9.75z" />
        </svg>
    </IconWrapper>
);

export const DreamyIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M2.25 12l8.954 8.955c.44.439 1.152-.439 1.591 0L21.75 12" />
        </svg>
    </IconWrapper>
);

// FIX: Added SendIcon for the chat input.
export const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
);

export const CozyIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
    </IconWrapper>
);

export const CoffeeIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path d="M5.25 10.5v1.5c0 3.314 2.686 6 6 6h1.5c3.314 0 6-2.686 6-6v-1.5h-13.5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 10.5h1.5a3 3 0 013 3v1.5a3 3 0 01-3 3h-1.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v4.5m3-4.5v4.5m3-4.5v4.5" />
        </svg>
    </IconWrapper>
);

export const MoonIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
    </IconWrapper>
);
