import { createContext, useContext, useEffect, useState } from 'react';

export interface WindowSizeState {
  width: number
  height: number
}

const windowSizeContext = createContext<WindowSizeState>({
  width: window.innerWidth,
  height: window.innerHeight,
});

export const useWindowSize = (): WindowSizeState => {
  return useContext(windowSizeContext);
}
export const WindowSizeProvider = ({ children }: {children: any}) => {

  const [ windowSize, setWindowSize ] = useState<WindowSizeState>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <windowSizeContext.Provider value={windowSize}>
      {children}
    </windowSizeContext.Provider>
  )
};
