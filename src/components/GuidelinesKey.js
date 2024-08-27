import React from 'react';
import CognitiveIcon from './CognitiveIcon';
import SensoryIcon from './SensoryIcon';
import PhysicalIcon from './PhysicalIcon';

const GuidelinesKey = () => {
    return(
        <>
            <div className='guidelines-key'>
                Sections on this page are categorized by Cognitive <CognitiveIcon />, Sensory <SensoryIcon />, and Physical <PhysicalIcon /> indicators to help you understand the focus of the content.
            </div>
        </>
    )
}

export default GuidelinesKey;