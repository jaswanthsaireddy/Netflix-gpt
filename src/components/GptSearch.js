import React from 'react'
import SearchGpt from './SearchGpt'
import GptSuggestions from './GptSuggestions'
import { BG_PAGE } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
                <img src= {BG_PAGE}
                    alt='youtube-bg'
                    className='w-full h-full object-cover'/>
        </div>
        <SearchGpt/>
        <GptSuggestions/>
    </div>
  )
}

export default GptSearch