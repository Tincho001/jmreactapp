import React, { createContext, useState, useEffect, useRef } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleLinkClick = () => {
    handleClose();
  };

  return (
    <MenuContext.Provider
      value={{
        isMenuOpen: isOpen,
        toggleMenu: handleOpen,
        closeMenu: handleClose,
        handleLinkClick: handleLinkClick,
      }}
    >
      <div ref={menuRef}>
        {children}
      </div>
    </MenuContext.Provider>
  );
};
