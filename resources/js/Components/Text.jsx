import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser'

const Text = ({ text }) => {
    return <div className={'prose'}>{parse(text)}</div>
}

export default Text
