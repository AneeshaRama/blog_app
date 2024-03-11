import React from 'react'
import {useEditor, EditorContent} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './Toolbar'

const TipTap = ({content, onChange}: {content:string, onChange: (richText: string) => void}) => {
    const editor = useEditor({
        extensions: [StarterKit.configure()],
        content,
        editorProps:{
            attributes:{
                class: "rounded-md border-none min-h-[300px] focus-visible:outline-none w-[35rem] p-2 bg-white"
            }
        },
        onUpdate({editor}){
            onChange(editor.getHTML())
            console.log(editor.getHTML())
        }
    })
  return (
    <div className='flex flex-col gap-y-3 items-start justify-center w-[35rem]'>
        <Toolbar editor={editor}/>
        <div className='border border-input bg-white rounded-md w-full'>
            <EditorContent editor={editor}/>
        </div>
    </div>
  )
}

export default TipTap