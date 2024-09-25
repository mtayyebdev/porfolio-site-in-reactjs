import React from 'react'

function PortfolioCard({
    showCard,
    category,
    image,
    name,
    link,
  }) {
  return (
    <>
    <div
      className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
        showCard === "all" || showCard === category.toLowerCase()
          ? "block"
          : "hidden"
      }`}
    >
      <div className="relative mb-12">
        <div className="overflow-hidden rounded-[10px]">
          <img src={image} alt={name} className="w-full" />
        </div>
        <div className="relative z-10 mx-7 -mt-10 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-md">
          <span className="text-blue-600 mb-2 block text-sm font-medium">
            {category}
          </span>
          <h3 className="text-dark dark:text-white mb-5 text-xl font-bold">{name}</h3>
          <a
            href={link}
            className="text-body-color dark:text-dark-6 hover:border-blue-600 hover:bg-blue-600 inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
          >
            Visit Project
          </a>
        </div>
      </div>
    </div>
  </>
  )
}

export default PortfolioCard