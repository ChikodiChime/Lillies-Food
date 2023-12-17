import React from 'react'
import { NotifyWrapper } from './Style'

const Notify = () => {
  return (
    <NotifyWrapper>
        <div className='space-between'>
            <div className="NotifyLeft">
                <h1>Get Notified When We Update!</h1>
                <p>Get notified when we add new items to our specials menu, 
                    update our price list or have promos!</p>
            </div>
            <div className="NotifyRight">

                <input type="text" placeholder='chikkychime@gmail.com' />
                <input type="button" value="Get Notified" />
            </div>
        </div>
    </NotifyWrapper>
  )
}

export default Notify