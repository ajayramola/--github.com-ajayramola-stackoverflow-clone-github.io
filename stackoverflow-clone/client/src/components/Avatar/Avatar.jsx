import React  from 'react'
const Avatar =({children,backgroundColor, py,px,color,borderRadius,FontSize,cursor}) => {
    const style ={
        backgroundColor,
        padding :`${py} ${px}`,
        color: color || 'black',
        borderRadius,
        FontSize,
        textAlign:"center",
        cursor: cursor || null,
        textDecoration:'None',


    }


  return (
    <div style ={style}>
        { children }
      
    </div>
  )
}

export default Avatar