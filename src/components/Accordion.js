import React, { useState } from 'react';

const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (idx) => {
        setActiveIndex(idx);
    };

    const renderedItems = items.map((item, idx) => {
        const active = idx === activeIndex? 'active': '';
        return <React.Fragment key={idx}>
            <div
                className={`title ${active}`}
                onClick={() => onTitleClick(idx)}
            >
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
    })
    return (
        <div className="ui styled accordion">  {renderedItems}
            {/* <h1>{activeIndex}</h1> */}
        </div>
    )
}

export default Accordion;