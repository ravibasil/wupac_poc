import React, { useState } from 'react';

export default function InputBox(props) {
  const [browserHistory, setBrowserHistory] = useState({});

  const onChangeHandler = event => {

    const file = event.target.files[0];

    const read = new FileReader();
    read.readAsBinaryString(file);
    read.onloadend = function () {
      if (validateJSON(read.result)) {
        setBrowserHistory(validateJSON(read.result));
      } else {
        alert('Invalid File');
      }
    }
  }

  const validateJSON = (body) => {
    try {
      var data = JSON.parse(body);
      // if came to here, then valid
      return data;
    } catch (e) {
      // failed to parse
      return null;
    }
  }

  const submitData = () => {
    props.uploadBrowserHistory(browserHistory);
  }

  return (
    <div className="Upload--Container">
      <input type="file" name="file" onChange={onChangeHandler} />
      <button className="button button2" onClick={submitData}>UPLOAD FILE</button>
    </div>

  )
}