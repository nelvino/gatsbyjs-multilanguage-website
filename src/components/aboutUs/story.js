import * as React from "react";

import image from '../../images/about/rebecca.svg'

const OurStory = ({ blok }) => (
    <div className="font-karla bg-white py-10">
        <section>
            <div className="container grid sm:grid-cols-2 sm:gap-10 items-center">
                <div className="mb-6 sm:mb-0">
                    <img className="w-full" src= {image} alt=""></img>
                </div>
                <div className="w-full pl-10 px-4">
                    <h2 className="text-black font-normal text-3xl leading-none mb-8">
                    Our story
                    </h2>
                    <p className="font-normal leading-snug text-black sm:w-10/12 sm:pr-10">
                    I'm baby pickled Polaroid godard, gochujang jianbing flannel master cleanse aesthetic squid beard hoodie biodiesel tousled bitters retro. Craft beer glossier humblebrag chicharrones food truck snackwave. 
                    </p>
                    <p className="font-normal leading-snug text-black sm:w-10/12 sm:pr-10">
                    Dreamcatcher fingerstache chia hashtag everyday carry direct trade. Farm-to-table godard organic brooklyn mixtape. Venmo chartreuse vegan, keffiyeh poutine 3 wolf moon subway tile. Pop-up beard photo booth locavore tumblr. Sustainable keytar freegan thundercats beard enamel pin.
                    </p>
                </div>
            </div>
	    </section>
    </div>
)

export default OurStory 