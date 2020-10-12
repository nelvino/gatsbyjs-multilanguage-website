import React from "react"
import SbEditable from "storyblok-react"

const Footer = () => {
  return (
    <footer className="text-center flex flex-col items-center py-20 container mx-auto">
      <p>GatsbyJS Demo Website created with Storyblok</p>
      <div className="flex items-center my-8">
        <img
          src="https://a.storyblok.com/f/51376/3856x824/fea44d52a9/colored-full.png"
          alt="Storyblok Logo"
          className="w-48 m-4"
        />
        <img
          src="data:image/png;base64,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"
          alt="Gatbsy Logo"
          className="w-48 m-4 blend-multiply"
        />
      </div>
      <p className="underline">
        <a href="https://www.storyblok.com/tp/gatsby-multilanguage-website-tutorial">View tutorial on Storyblok</a>
      </p>
    </footer>
  )
}

export default Footer
