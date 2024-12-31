import React, { useState, useRef } from 'react';

const RandomNamePicker = () => {
  const [nameList, setNameList] = useState([]);
  const [pickedNames, setPickedNames] = useState([]);
  const [currentName, setCurrentName] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const pickedNameRef = useRef('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && currentName.trim() !== '') {
      setNameList([...nameList, currentName]);
      setCurrentName('');
    }
  };

  const pickName = () => {
    if (nameList.length > 0) {
      const index = Math.floor(Math.random() * nameList.length);
      const name = nameList[index];
      pickedNameRef.current = name; // Store the picked name in a ref to access it later
      setPickedNames([...pickedNames, name]);
      setNameList(nameList.filter((_, i) => i !== index));
      setShowDialog(true); // Open the dialog
    }
  };

  return (
    <div>
      <input
        id="nameInput"
        type="text"
        value={currentName}
        onChange={(e) => setCurrentName(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <div id="nameList">
        {nameList.map((name, index) => (
          <span key={index} className="name">{name}</span>
        ))}
      </div>
      <button id="pick" onClick={pickName}>Pick a Name</button>
      <div id="pickedList">
        {pickedNames.map((name, index) => (
          <span key={index} className="name">{name}</span>
        ))}
      </div>
      <dialog open={showDialog} id="nameDialog">
        <p>{pickedNameRef.current}</p>
        <button onClick={() => setShowDialog(false)}>Close</button>
      </dialog>
    </div>
  );
};

export default RandomNamePicker;