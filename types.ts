export enum Theme {
  Fantasy = 'Fantasy',
  Romcom = 'Romcom',
  Adventure = 'Adventure',
  SciFi = 'Sci-fi',
  Mystery = 'Mystery',
  FutureTogether = 'Future-together',
  EverydayMagic = 'Everyday Magic',
  Flirty = 'Flirty',
  Dreamy = 'Dreamy',
  CozyAfternoon = 'Cozy Afternoon',
  CoffeeDate = 'Coffee Date',
  MidnightStroll = 'Midnight Stroll',
}

export interface ThemeOption {
  name: Theme;
  icon: React.ReactNode;
}