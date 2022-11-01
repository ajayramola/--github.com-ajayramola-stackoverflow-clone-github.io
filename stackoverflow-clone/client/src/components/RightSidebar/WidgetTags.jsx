import React from 'react'
import './RightSidebar.css'
const WidgetTags=() =>{


    const tags=["c",'css','express','firebase','html','javascript']



  return (
    <div className='widget-tags'>
        <h4>watched tags</h4>
        <div className='widget-tags-div'>
            {
              tags.map((tag) => (
                <p key={tag}>{tag}</p>
            
              ))
}
        </div>
      
    </div>
  )
}

export default WidgetTags