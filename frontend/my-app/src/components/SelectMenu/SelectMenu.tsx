import React, { useEffect, useState } from 'react';
import { SelectMenuProps } from './SelectMenu.types';



export function SelectMenu({ options, setSelectedValue,labelTitle }: SelectMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [optionsList, setOptionsList] = React.useState(options);
  useEffect(() => {


    return () => {
      setOptionsList(options);
    }
  }, [options]);

  return (
    <div>
      {/*
      //work on custom select menu is in progress
      <div className="select-menu" onClick={toggling}>
        <div className="select-menu__selected">
          {selectedOption}
          </div>
        <div className="select-menu__options">
          {optionsList.map((option, index) => {console.log(option);return(
            <div key={index} className="select-menu__option" onClick={()=>setSelectedOption(option)}>
              <p>{option}</p>
            </div>
          )})}
          </div>
        </div> */}
      <section className="container">
      <label>{labelTitle}</label>
        <div className="dropdown">
       
          <select className="dropdown-select" onChange={(e) => {
            setSelectedValue(e.target.value);
          }}>
            {optionsList.map((option, index) => {
              return (
                <option key={index} value={option}>{option}</option>
              )
            })}
          </select>
        </div>
      </section>
    </div>
  );
}
