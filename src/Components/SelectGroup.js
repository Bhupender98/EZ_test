import React from 'react'

function SelectGroup() {
  return (
    <select
      className="form-select"
      aria-label="Default select example"
      defaultValue={"DEFAULT"}
    >
      <option value="DEFAULT">Open this select menu</option>
      <option value="Jan 2021" defaultValue>
        Jan 2021
      </option>
      <option value="Feb 2021">Feb 2021</option>
      <option value="Mar 2021">Mar 2021</option>
      <option value="April 2021">April 2021</option>
      <option value="May 2021">May 2021</option>
      <option value="June 2021">June 2021</option>
      <option value="July 2021">July 2021</option>
      <option value="Aug 2021">Aug 2021</option>
      <option value="Sept 2021">Sept 2021</option>
      <option value="Oct 2021">Oct 2021</option>
      <option value="Nov 2021">Nov 2021</option>
      <option value="Dec 2021">Dec 2021</option>
    </select>
  );
}

export default SelectGroup
