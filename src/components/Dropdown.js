import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, onSelectedChange, selected }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (e) => {
            if(ref.current && ref.current.contains(e.target)) {
                return;
            }
            setOpen(false);
        };

        document.body.addEventListener('click',onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        }
    }, []);

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {return null;}

        return (
            <div
                key={option.value}
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        );

    });

    return (
        <div className="ui form" ref={ref}>
            <div className="field">
                <label className="label">{label}</label>
                <div
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
                <br/>
                {/* <div style={{'backgroundColor': '#ccc'}}>This text is <span style={{'color': `${selected.value}`}}>{selected.value}</span></div> */}
            </div>
        </div>
    );
}

export default Dropdown;