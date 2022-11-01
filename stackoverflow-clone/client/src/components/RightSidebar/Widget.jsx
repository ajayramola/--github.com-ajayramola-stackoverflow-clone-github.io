import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/comment-alt-solid.svg'
import pen from  '../../assets/pen-solid.svg'
import blacklogo from '../../assets/blacklogo.svg'

const Widget =() =>{



  return (
    <div clasName='Widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
          <div className='right-sidebar-div-2'>
              <img src ={pen} alt="pen" width='18' />
              <p>Observability is key to the future of software (and your DevOps career)</p>
          </div>
          <div className='right-sidebar-div-2'>
                <img src ={pen} alt="pen" width='18' />
                    <p> Podcast 374:How valuable is your screen name?</p>

          </div>



   </div>
        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
          <div className='right-sidebar-div-2'>
              <img src ={comment} alt="pen" width='18' />
              <p>review quwuw workflows -Final release....</p>
          </div>
          <div className='right-sidebar-div-2'>
                <img src ={comment} alt="pen" width='18' />
                    <p> Please welcome valued Associates:#958-V2Blast #959 - spenceG</p>

          </div>
          <div className='right-sidebar-div-2'>
                <img src ={blacklogo} alt="pen" width='18' />
                    <p>Outdated Answers:accepted answer is </p>

        </div>
        </div>
        <h4>Hot  Meta posts</h4>
        <div className='right-sidebar-div-1'>
          <div className='right-sidebar-div-2'>
              <p>38</p>
              <p>why was this span flag declined, yet the question marked as span?</p>
         

          </div>
          </div>
          <div className='right-sidebar-div-2'>
               <p>20</p>
                    <p> what is the best course of action when a year has high enough rep to.. </p>
                    <div className='right-sidebar-div-2'>
                <p>14</p>
                    <p>Is a link to the "How to ask" help page a useful comment? </p>

          </div>

        </div>

      
    </div>
  )
}

export default Widget