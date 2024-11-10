import React from 'react'
import './ContentTwo.css';
export const ContentTwo = () => {
  return (
    <>
    <section class="bg-white dark:bg-gray-900" style={{ backgroundColor: '#c7fff3' }}>
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-6xl xl:text-5xl dark:text-white text-gradients">
                How it works
            </h1>
            <br></br>
            <h3 class="max-w-2xl mb-4 text-2xl font-medium text-gray-700 tracking-tight leading-none md:text-3xl xl:text-2xl dark:text-gray-200">
                Aura uses advanced AI and data to provide real-time insights:
            </h3>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                • <strong class="text-gray-900 dark:text-white">Smart Data Storage:</strong> Secure and fast retrieval
                <br/>
                • <strong class="text-gray-900 dark:text-white">Dual-Source Intelligence:</strong> Searches stored and real-time data
                <br/>
                • <strong class="text-gray-900 dark:text-white">Advanced Processing:</strong> Synthesizes information efficiently
                <br/>
                • <strong class="text-gray-900 dark:text-white">Natural Interactions:</strong> Accurate and relevant responses
                <br/><br/>
                Aura supports your research and exploration with a blend of stored and real-time insights.
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