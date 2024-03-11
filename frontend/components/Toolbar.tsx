"use client"

import { type Editor } from '@tiptap/react'
import React from 'react'

type Props = {
    editor: Editor | null
}

const Toolbar = ({editor}: Props) => {
    if(!editor){
        return null
    }
  return (
    <div>Toolbar</div>
  )
}

export default Toolbar