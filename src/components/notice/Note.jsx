import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Popup from "reactjs-popup";
import styled from 'styled-components';
 

const Note=(props) => {
  return (
    <div>
      <div className="note">
        <div className="box">
          <h1>{props.title}</h1>
        </div>
        <Popup
          trigger={
            <button className="button fa fas fa-expand-arrows-alt">
            </button>
          }
          modal
          >
            <div className="modal">
              <button className="close">&times;
              </button>
              <div className="content">
                {" "}
                <div className="box">{props.content}</div>
              </div>
            </div>
        </Popup>
      </div>
    </div>
    
  );
}

export default Note;
