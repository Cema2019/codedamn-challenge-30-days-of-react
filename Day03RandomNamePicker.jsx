/*In this lab, you'll create a simple yet interactive Random Name Picker (Raffle Draw) application using React. This app allows users to enter names into a list and then randomly pick one of those names. Follow these steps to build your app:

Name Input Field:

Create a text input field for users to enter names.
Assign the ID #nameInput to this input field.
Ensure that pressing the 'Enter' key after typing a name adds it to a list for future selection.
Displaying Entered Names:

Set up a div element to display the names that have been entered.
This div should have the ID #nameList.
Each entered name should be displayed as a span element within this div, with each span having the class .name.
Random Name Selection:

Include a button for selecting a random name from the entered names.
The button should have the text "Pick a Name" and the ID #pick.
On clicking this button, randomly pick a name from the list and display it in a HTML dialog modal.
The dialog modal for showing the picked name should have the ID #nameDialog.
Picked Names List:

Create a div to display the names that have been picked.
This div should have the ID #pickedList.
Every time a name is picked, it should be moved from the #nameList to the #pickedList, displayed as a span element with the class .name.*/

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
