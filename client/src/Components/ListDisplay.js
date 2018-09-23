import React from 'react'; 
import { connect } from 'react-redux'; 

const ListDisplay = (props) => {
    return (
        <div className = "list-display">
            {props.notes.map(note => {
                return <div className = "note">
                            <h3>{note.title}</h3>
                            <p>{note.content}</p>
                      </div>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(ListDisplay); 

