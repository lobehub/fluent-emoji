import { useEffect, useState } from 'react';

export const useScrollParent = () => {
  const [parent, setParent] = useState<HTMLDivElement>();

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const scrollParent = document.querySelector(`#root`);
    if (scrollParent) {
      setParent(scrollParent as any);
    }
  }, []);

  return parent;
};
