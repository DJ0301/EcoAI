import React from 'react'

export const ContentTwo = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Embrace Sustainable Innovation with EcoAura
          </h2>
          <p class="mb-4 text-gray-700 dark:text-gray-300">
            EcoAura is your gateway to a sustainable future. Our AI-driven platform analyzes your preferences to recommend eco-friendly products that minimize environmental impact and support ethical sourcing. Transform your purchasing decisions with insights into product lifecycle analysis and make informed choices that benefit both your business and the planet.
          </p>
          <p class="text-gray-700 dark:text-gray-300">
            Join us in revolutionizing consumer behavior by choosing products that are not only efficient but also environmentally responsible. Embrace the future of sustainable living with EcoAura today!
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
          <img class="w-full rounded-lg" src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVjbyUyMGZyaWVuZGx5JTIwcHJvZHVjdHxlbnwwfHwwfHx8Mg%3D%3D" alt="eco-friendly product 1"/>
          <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://images.unsplash.com/photo-1564419320408-38e24e038739?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGVjbyUyMGZyaWVuZGx5JTIwcHJvZHVjdHxlbnwwfHwwfHx8Mg%3D%3D" alt="eco-friendly product 2"/>
        </div>
      </div>
    </section>
  )
}
