import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';

function FavoriteMenu({ title, items, multiSelect = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setIsOpen(!isOpen);
  FavoriteMenu.handleClickOutside = () => setIsOpen(false);

  function handleOnClick(item) {
    if (!selection.some(current => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        current => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  }

  function isItemInSelection(item) {
    if (selection.some(current => current.id === item.id)) {
      return true;
    }
    return false;
  }

  return (
    <div className="dd-wrapper">
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!isOpen)}
        onClick={() => toggle(!isOpen)}
      >
        <div className="dd-header__title">
          <p className="dd-header__title--bold">{title}</p>
        </div>
        <div className="dd-header__action">
          <p>{isOpen ? 'Close' : 'Open'}</p>
        </div>
      </div>


      {/* Percorre o array de livros favoritados */}
      {isOpen && (
        <ul className="dd-list">
          {items.map(item => (
            <li className="dd-list-item" key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                <span>{item.value}</span>
                <span>{isItemInSelection(item) && 'Selected'}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => FavoriteMenu.handleClickOutside,
};

export default onClickOutside(FavoriteMenu, clickOutsideConfig);