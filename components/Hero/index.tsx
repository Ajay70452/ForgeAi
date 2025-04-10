"use client";


const Hero = () => {
 

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        {/* Use max-width container and center it */}
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* Removed the flex layout that created two columns */}
          {/* Center the content within this container */}
          <div className="text-center"> {/* Added text-center here */}
            {/*
             * Removed md:w-1/2 class as we want this block
             * to conceptually take the full width for centering purposes.
             * Removed pr-16 from h1 as it's no longer needed without the image.
             */}
            <h1 className="mb-6 text-4xl font-bold text-black dark:text-white md:text-6xl xl:text-7xl"> {/* Increased text size (e.g., text-5xl, md:text-6xl, xl:text-7xl) */}
              Step into the future with Technology and AI-Powered Innovation
            </h1>
            {/* Increased paragraph text size and added max-width for readability */}
            <p className="mx-auto mb-9 max-w-3xl text-lg md:text-xl"> {/* Added text-lg/xl, mx-auto and max-w-3xl */}
              Harness the future of technology with our comprehensive AI tools that blend creative content generation, intelligent chatbots, and industry-specific innovations to propel your business forward.
            </p>

            {/* Wrap button in a div and center it using flex */}
            <div className="mt-10 flex justify-center"> {/* Added flex justify-center */}
            <a
    href="#support" // Link to the ID of your contact section
    aria-label="Scroll to contact section" // Updated aria-label slightly for accessibility
    className="flex rounded-full bg-black px-9 py-3 text-base font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho md:px-10 md:py-3.5" // Kept all the styling classes
  >
    Book a meeting
  </a>
            </div>
          </div>

          {/*
           * The entire div block containing the images has been removed.
           * <div className="animate_right hidden md:w-1/2 lg:block"> ... </div>
           */}
        </div>
      </section>
    </>
  );
};

export default Hero;