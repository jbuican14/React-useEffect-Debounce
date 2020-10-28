import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search'; 
import Translate from './components/Translate';

const items = [
    {
        title: 'What is Halloween?',
        content: 'Halloween is the evening before the Christian holy days of All Hallows Day (also known as All Saints\' or Hallowmas) on 1 November and All Souls\' Day on 2 November, thus giving the holiday on 31 October the full name of All Hallows\' Eve (meaning the evening before All Hallows\' Day). ',

    },
    {
        title: 'Is Halloween a bad thing?',
        content: 'Halloween is associated with elaborate costumes, haunted houses and, of course, candy, but it\'s also linked to a number of risks, including pedestrian fatalities and theft or vandalism. Oct. 31 may be one of the most dangerous days of the year for your children, home, car and health.',

    },
    {
        title: 'What does Halloween mean in the Bible?',
        content: 'Many Christians believe that participating in Halloween is a form of involvement in the worthless deeds of evil and darkness, which is forbidden in Scripture: Ephesians 5:7-15. Don\'t participate in the things these people do',

    },
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Yellow',
        value: 'yellow'
    }
];

const showAccordion = () => {
    if(window.location.pathname === '/') {
        return <Accordion items={items} />;
    }
};

const showList = () => {
    if(window.location.pathname === '/list') {
        return <Search />
    }
};

const showDropdown = () => {
    if(window.location.pathname === '/dropdown') {
        return <Dropdown />
    }
};

const showTranslate = () => {
    if(window.location.pathname === '/translate') {
        return <Translate />
    }
}

export default () => {
    return (
        <div className="ui segment">
            {showAccordion()}
            {showList()}
            {showDropdown()}
            {showTranslate()}
        </div>
    );
}
