import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ lang, txt }) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(txt);

    useEffect( ()=> {
        const timerId = setTimeout( ()=> {
            setDebouncedText(txt);
        }, 500);

        return () => {
            clearTimeout(timerId);
        }
    }, [txt])

    useEffect(() => {
        const doTranslation = async () => {

            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', 
            {}, {
                params: {
                    q: debouncedText,
                    target: lang.value,
                    key: 'API-KEY'
                }
            });
            setTranslated(data.data.translations[0].translatedText);
        }

        doTranslation();

    }, [lang, debouncedText]);

    return (
       <div className="ui segment">
           <h1 className="ui header">{translated}</h1>
       </div>
    )
}

export default Convert;