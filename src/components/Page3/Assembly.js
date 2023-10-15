import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/Context';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './styles3.css';
import nextIcon from '../../assets/next.png';
import restart from '../../assets/refresh.png';
import { motion } from 'framer-motion';

const Assembly = () => {
  const { selectedParts, assembledParts, onDragEnd, selectedPartDetails } = useContext(UserContext);

  return (
    <motion.div
      className="assembly-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="header">
        <p className="heading">Assembly Zone</p>
        <div className="final-view-button">
          <Link to="/loading">
    
          </Link>
          <Link to="/select-parts">
            
          </Link>
        </div>
      </div>

      <div className="assemble-zone">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="selectedParts">
            {(provided, snapshot) => (
              <div ref={provided.innerRef} {...provided.droppableProps} className={`parts-list ${snapshot.isDraggingOver ? 'dragactive' : ''}`}>
                <h2>Selected materials</h2>
                {selectedParts.map((partId, index) => (
                  <Draggable key={partId} draggableId={partId} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`part-card ${snapshot.isDragging ? 'drag' : ''}`}
                      >
                        {selectedPartDetails[partId] && (
                          <>
                            <img src={selectedPartDetails[partId].image} alt={selectedPartDetails[partId].name} />
                            <p>{selectedPartDetails[partId].name}</p>
                          </>
                        )}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="assembledParts">
            {(provided, snapshot) => (
              <div ref={provided.innerRef} {...provided.droppableProps} className={`assembly-stage ${snapshot.isDraggingOver ? 'dragcomplete' : ''}`}>
                {assembledParts.map((partId, index) => (
                  <Draggable key={partId} draggableId={partId} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`assembled-part-card ${snapshot.isDragging ? 'drag' : ''}`}
                      >
                        {selectedPartDetails[partId] && (
                          <img src={selectedPartDetails[partId].image} alt={selectedPartDetails[partId].name} className={partId} />
                        )}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </motion.div>
  );
};

export default Assembly;
