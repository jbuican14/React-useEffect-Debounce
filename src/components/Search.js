import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('halloween');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect( ()=> {
        const timerId = setTimeout( () => {
          setDebouncedTerm(term);  
        }, 1000);

        return () => {
            clearTimeout(timerId); 
        }
    }, [term])

    useEffect( ()=> {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                },
            });
            setResults(data.query.search);
        };
        if(debouncedTerm)
        search();
        console.log('debouncedTerm ');
    }, [debouncedTerm])

    // useEffect(() => {
    //     // 1. 
    //     // const search = async ()=> { 
    //     //     await axios.get('/wiki.com');
    //     // }
    //     // search();

    //     //2. 
    //     // (async()=> {
    //     //     await axios.get('/wiki.com');
    //     // })();

    //     //3. 
    //     // axios.get('/wiki.com')
    //     // .then((res)=>{
    //     //     console.log(res.data)
    //     // });

    //     //most used is 1. 
    //     const search = async () => {
    //         const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
    //             params: {
    //                 action: 'query',
    //                 list: 'search',
    //                 origin: '*',
    //                 format: 'json',
    //                 srsearch: term
    //             },
    //         });
    //         setResults(data.query.search);
    //     }

    //     if(term && !results.length) search()
    //     else {
    //         const timeoutSearch = setTimeout( ()=> {
    //             if(term) search(); //prevent empty search 
    //         }, 1000);
    
    //         return ()=> {
    //             clearTimeout(timeoutSearch);
    //         }

    //     }
    // }, [term]);

    const removedHTMLTag = (htmlTag) => {
        return htmlTag.replace(/<\/?[^>]+(>|$)/g, '')
    }

    const renderedResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a className="ui button"
                    href={`https://en.wikipedis.org?curid=${result.pageid}`}
                    target="_blank"
                    rel="noreferrer"
                    >Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <div className="description">
                        <span>{removedHTMLTag(result.snippet)}</span>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label> Enter Search Term</label>
                    <input
                        className="input"
                        value={term}
                        onChange={(e) => { setTerm(e.target.value) }}
                    />
                </div>
            </div>
            <div className="ui divided items">
                {renderedResults}
            </div>

        </div>
    )
};

export default Search; 