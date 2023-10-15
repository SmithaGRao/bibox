import React, { useState } from "react";
import tree from '../assets/tree.jpg';
import flowerPot from '../assets/flowerPot.jpg';
import waterCan from '../assets/waterCan.jpg';
import LawnImage from '../assets/LawnImage.jpg';

export const UserContext = React.createContext();

const Context = ({ children }) => {
    const [selectedParts, setSelectedParts] = useState([]);
    const [assembledParts, setAssembledParts] = useState([]);

    const togglePartSelection = (partId) => {
        let partIds = partsData.map(part => part.id);
        if (partId === "all") {
            setSelectedParts(partIds);
        } else if (selectedParts.includes(partId)) {
            setSelectedParts(selectedParts.filter((id) => id !== partId));
        } else {
            setSelectedParts([...selectedParts, partId]);
        }
    };

    const partsData = [
        { id: 'tree', name: 'tree', image: tree },
        { id: 'flowerPot', name: 'flowerPot', image: flowerPot },
        { id: 'waterCan', name: 'waterCan', image: waterCan },
        { id: 'LawnImage', name: 'LawnImage', image: LawnImage },
    ];

    const selectedPartDetails = {};
    partsData.forEach(part => {
        selectedPartDetails[part.id] = {
            name: part.name,
            image: part.image
        };
    });

    const onDragEnd = (result) => {
        // ... (unchanged)
    };

    let value = {
        partsData,
        selectedParts,
        togglePartSelection,
        setSelectedParts,
        assembledParts,
        setAssembledParts,
        onDragEnd,
        selectedPartDetails
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export default Context;
