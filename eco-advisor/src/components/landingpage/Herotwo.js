import React from 'react'

export const Herotwo = () => {
  return (
    <>
      <section 
        className="bg-cover bg-center min-h-screen flex items-end py-16 px-4"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWluaW1hbHxlbnwwfHwwfHx8Mg%3D%3D")' }}
      >
        <div className="mx-auto max-w-screen-xl text-center lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Your partner in sustainable living 
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-900 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Embrace the power of Generative AI & transform your environmental impact with Aura
          </p>
        </div>
      </section>
    </>
  )
}