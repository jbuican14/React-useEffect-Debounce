import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';


const options = [
    {
        label: 'Afrikaans',
        value: 'af',
    },
    {
        label: 'Arabic',
        value: 'ar',
    },
    {
        label: 'Hindi',
        value: 'hi',
    },
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="fiel">
                    <label>Enter Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>

            <Dropdown
                options={options}
                label="Select a Language"
                onSelectedChange={setLanguage}
                selected={language}

            />
            <hr />
            <h3 className="ui header"> Output</h3>
            <Convert 
                lang={language}
                txt = {text}
            />

        </div>
    );
};

export default Translate;
