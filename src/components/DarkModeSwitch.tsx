import { useState, useEffect } from 'react';

const mm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

export const DarkModeSwitch = () => {
  const [enable, setEnable] = useState(mm ? mm.matches : false);

  useEffect(() => {
    if (!mm) {
      return undefined;
    }
    const fn = (e: MediaQueryListEvent) => setEnable(e.matches);
    mm.addEventListener('change', fn);
    return () => mm.removeEventListener('change', fn);
  }, []);

  useEffect(() => {
    document.getElementsByTagName('html')[0].classList.toggle('dark', enable);
  }, [enable]);

  return (
    <label className="select-none">
      Темная тема: <input type="checkbox" checked={enable} onChange={(e) => setEnable(e.target.checked)} />
    </label>
  );
};
