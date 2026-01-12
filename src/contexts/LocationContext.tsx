import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LocationContextType {
  location: string;
  setLocation: (location: string) => void;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

const LOCATION_STORAGE_KEY = 'app-selected-location';
const DEFAULT_LOCATION = 'India';

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocationState] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(LOCATION_STORAGE_KEY);
      return stored || DEFAULT_LOCATION;
    }
    return DEFAULT_LOCATION;
  });

  useEffect(() => {
    localStorage.setItem(LOCATION_STORAGE_KEY, location);
  }, [location]);

  const setLocation = (newLocation: string) => {
    setLocationState(newLocation);
  };

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};
