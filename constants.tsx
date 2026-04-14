import React from 'react';
import { Theme, ThemeOption } from './types';
import { 
  FantasyIcon, 
  RomcomIcon, 
  AdventureIcon, 
  SciFiIcon, 
  MysteryIcon, 
  FutureIcon, 
  MagicIcon, 
  FlirtyIcon, 
  DreamyIcon,
  CozyIcon,
  CoffeeIcon,
  MoonIcon
} from './components/Icons';

export const THEME_OPTIONS: ThemeOption[] = [
  { name: Theme.Fantasy, icon: <FantasyIcon /> },
  { name: Theme.Romcom, icon: <RomcomIcon /> },
  { name: Theme.Adventure, icon: <AdventureIcon /> },
  { name: Theme.SciFi, icon: <SciFiIcon /> },
  { name: Theme.Mystery, icon: <MysteryIcon /> },
  { name: Theme.FutureTogether, icon: <FutureIcon /> },
  { name: Theme.EverydayMagic, icon: <MagicIcon /> },
  { name: Theme.Flirty, icon: <FlirtyIcon /> },
  { name: Theme.Dreamy, icon: <DreamyIcon /> },
  { name: Theme.CozyAfternoon, icon: <CozyIcon /> },
  { name: Theme.CoffeeDate, icon: <CoffeeIcon /> },
  { name: Theme.MidnightStroll, icon: <MoonIcon /> },
];