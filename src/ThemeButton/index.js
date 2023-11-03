import React, { useEffect, useState } from 'react';
import { Wrapper, Text, Button } from './styled';
import Sun from '../images/sunIcon.svg';
import Moon from '../images/moonIcon.svg';

const ThemeButton = ({ setTheme }) => {

    const [isChecked, setIsChecked] = useState(true);

    useEffect(() => {
        const savedState = localStorage.getItem('checkboxState');
        if (savedState !== null) {
            setIsChecked(JSON.parse(savedState));
        }
    }, []);

    const handleCheckboxChange = () => {
        const updatedState = !isChecked;
        setIsChecked(updatedState);
        setTheme();
    };
    return (
        <Wrapper>
            <Text>
                {isChecked ? "Dark mode off" : "Dark mode on"}
            </Text>
            <Button>
                <input
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    type="checkbox"
                    id="toggleTheme"

                />
                <label for="toggleTheme">
                    <img src={Sun} className='sun' />
                    <img src={Moon} className='moon' />
                </label>

            </Button>
        </Wrapper>
    )
}

export default ThemeButton;