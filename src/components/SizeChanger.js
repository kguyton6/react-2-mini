import React from 'react';

export default function SizeChanger() {
  return (
    <select className="dropDownContainer" onChange={(e) => props.update(parsInt (e.target.value))} disabled={props.allowEdit === 'false'}>
      <option value="12"> 12 </option>
      <option value="13"> 13 </option>
      <option value="14"> 14 </option>
    </select>
  )
}