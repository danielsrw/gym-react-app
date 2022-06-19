import React, { useContext } from 'react';
import { ExerciseCard, BodyPart } from './';
import { Box, Typography } from '@mui/material';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()} className="right-arrow">
            <img src={LeftArrowIcon} alt="right-arrow" />
        </Typography>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} className="left-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    );
};

const HorizontalScrollbar = () => (
    <>
        I'm HorizontalScrollbar
    </>
);

export default HorizontalScrollbar;
