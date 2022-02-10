import React from 'react';
import './style.css';
function Filter({filter,setFilter}) {
  return (
    <div>
        <ul className="filters">
            <li>
                <a className={filter === "All" ? "selected" : " "} onClick={()=> setFilter("All")}>All</a>
            </li>
            <li>
                <a className={filter === "Active" ? "selected" : " "} onClick = {()=> setFilter("Active")}>Active</a>
            </li>
            <li>
                <a className={filter === "Completed" ? "selected": " "} onClick={()=>setFilter("Completed")}>Completed</a>
            </li>
		</ul>
    </div>
  )
}

export default Filter