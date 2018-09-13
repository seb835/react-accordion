import React from 'react';

function List(props) {
    let current = props.currentIndex === props.index;

    return (
        <ul className="holder">
            <li className="question" onClick={()=>props.handleChange(props.index)}>{props.question}</li>
            <li className={current ? "answer open" : "answer"}>
                {current && <p>{props.answer}</p>}
            </li>
        </ul>
    );
}

export default List;