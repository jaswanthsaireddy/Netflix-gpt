import React from 'react'
import SearchGpt from './SearchGpt'
import GptSuggestions from './GptSuggestions'
import { BG_PAGE } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
    <div className='fixed -z-10'>
                <img src= {BG_PAGE}
                    alt='youtube-bg'
                    className='h-screen w-screen object-cover'/>
        </div>
    <div>
        <SearchGpt/>
        <GptSuggestions/>
    </div>
    </div>
  )
}

export default GptSearch