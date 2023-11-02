import React from 'react';
import mySkills from '../mySkills';
import nextSkills from '../nextSkills';
import { Wrapper, Title, SkillsList, Skill } from './styled';
import dot from '../images/dot.svg';

const Skills = ({ skillsTitle, skills }) => {

    let skillsData;

    if (skills === 'my skills') {
        skillsData = mySkills
    } else if (skills === 'next skills') {
        skillsData = nextSkills
    }
    return (
        <Wrapper>
            <Title>{skillsTitle}</Title>
            <SkillsList>
                {skillsData.map(skill => (
                    <Skill key={skill.id}>
                        <img src={dot} />
                        {skill.skill}
                    </Skill>
                ))}
            </SkillsList>
        </Wrapper>
    )
}

export default Skills;