import React from 'react'

export const ContentTwo = () => {
  return (
    <>
    <section class="bg-white dark:bg-gray-900" style={{ backgroundColor: '#c7fff3' }}>
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-6xl xl:text-5xl dark:text-white">
                How it works
            </h1>
            <br></br>
            <h3 class="max-w-2xl mb-4 text-2xl font-medium text-gray-700 tracking-tight leading-none md:text-3xl xl:text-2xl dark:text-gray-200">
                Aura combines the power of advanced AI with comprehensive data sources to deliver accurate, real-time insights. 
                Our sophisticated system works seamlessly behind the scenes:
            </h3>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                
                
                • <strong class="text-gray-900 dark:text-white">Smart Data Storage:</strong> Your valuable information is securely stored and vectorized for lightning-fast retrieval
                <br/>
                • <strong class="text-gray-900 dark:text-white">Dual-Source Intelligence:</strong> Aura searches both your stored knowledge and real-time data through Tavily AI
                <br/>
                • <strong class="text-gray-900 dark:text-white">Advanced Processing:</strong> Powered by state-of-the-art LLaMA architecture, Aura synthesizes information from multiple sources
                <br/>
                • <strong class="text-gray-900 dark:text-white">Natural Interactions:</strong> Experience fluid conversations with responses that are both accurate and contextually relevant
                <br/><br/>
                Whether you're researching, analyzing, or exploring new ideas, Aura brings together the best of stored knowledge and real-time insights to support your needs.
            </p>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="workflow1.png" alt="mockup"/>
        </div>                
    </div>
</section>
    </>
  )
}