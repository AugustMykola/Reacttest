import React from 'react';
import './AddCustomDish.scss';
import { Link } from "react-router-dom";


const AddCustomDish = ({ show, handleClose, handleDish }) => {

  const showHideClassName = show ? "backdrop-display-block" : "backdrop-display-none";

  const titleRref = React.createRef();
  const descriptionRref = React.createRef();



  const createDish = () => {
   
    const dish = {
      strMealThumb: "",
      strMeal: titleRref.current.value,
      strInstructions: descriptionRref.current.value
    }
    handleDish(dish);
    titleRref.current.value = '';
    descriptionRref.current.value = ''
  }

  return (
    <div className={showHideClassName} onClick={handleClose}>
      <div className="modal__container" onClick={e => e.stopPropagation()}>
        <h2 className=" modal_header">Add custom dish</h2>

        <hr />

        <form className="modal__body">
          <input
            className="modal__body-header"
            ref={titleRref}
            name="title"
            type="text"
            placeholder="Dish Title" />

          <textarea
            className="modal__body-text"
            ref={descriptionRref}
            name="description"
            placeholder="Dish Description..." />
            
          <button type="button" className="modal__body-btn" onClick={createDish}> Add custom dish</button>
        </form>
      </div>
    </div>
  );

}

export default AddCustomDish;