import React from "react"
import DynamicComponent from "./DynamicComponent"
import SbEditable from 'storyblok-react'
import "@fontsource/karla";


const Page = ({ blok }) => {
  const content =
    blok.body &&
    blok.body.map(childBlok => <DynamicComponent blok={childBlok} key={childBlok._uid}/>)
  const hasTitle = blok.title && blok.title.length ? (<h1 className="font-karla text-5xl font-bold font-karla text-primary tracking-wide text-center py-8">{ blok.title }</h1>) : null
  return (
    <SbEditable content={blok} key={blok._uid}>
        { hasTitle }
        { content }
    </SbEditable>
  )
}

export default Page
