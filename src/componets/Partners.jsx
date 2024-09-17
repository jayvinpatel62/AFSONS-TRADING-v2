import React from 'react'
import partner1 from '../image/partners/sponsors_1.png'
import partner2 from '../image/partners/sponsors_2.png'
import partner3 from '../image/partners/sponsors_3.png'
import partner4 from '../image/partners/sponsors_4.png'
import partner5 from '../image/partners/sponsors_5.png'
import { Container } from '@mui/material'

const Partners = () => {
  return (
    <div className='py-[100px] border-t border-gray-200'>
        <Container>
        <div className='flex flex-wrap gap-5 items-center justify-between'>
            <div>
                <img src={partner1} alt="" className='opacity-70 hover:opacity-100'/>
            </div>
            <div>
                <img src={partner2} alt="" className='opacity-70 hover:opacity-100'/>
            </div>
            <div>
                <img src={partner3} alt="" className='opacity-70 hover:opacity-100'/>
            </div>
            <div>
                <img src={partner4} alt="" className='opacity-70 hover:opacity-100'/>
            </div>
            <div>
                <img src={partner5} alt="" className='opacity-70 hover:opacity-100'/>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Partners
