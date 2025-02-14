import React from 'react'

const TextDirectionHandeler = ({text} ) => {
    const regex = new RegExp('^[\u0621-\u064A ]+$');
    const isArabic = regex.test(text)
  return (
  <>
    {
        isArabic ? <p dir='rtl'>{text}</p> : <p dir='ltr'>{text}</p>
    }
  </>
  )
}

export default TextDirectionHandeler