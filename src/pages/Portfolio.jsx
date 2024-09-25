import React, { useState } from 'react'
import portfolioData from '../json_datas/portfolio-data.json'
import PortfolioCard from '../components/PortfolioCard';

function Portfolio() {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <section className="py-16 lg:py-24 px-5">
        <div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <h2 className="mb-3 text-2xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  My All Projects
                </h2>
                <p className="text-body-color text-base">
                  Here is my All Portfolio Projects.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "all"
                      ? "activeClasses bg-blue-600 text-white"
                      : "inactiveClasses text-body-color hover:bg-blue-600 hover:text-white"
                      }`}
                  >
                    All Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("portfolio")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "portfolio"
                      ? "activeClasses bg-blue-600 text-white"
                      : "inactiveClasses text-body-color hover:bg-blue-600 hover:text-white"
                      }`}
                  >
                    Portfolio
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("blogging")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "blogging"
                      ? "activeClasses bg-blue-600 text-white"
                      : "inactiveClasses text-body-color hover:bg-blue-600 hover:text-white"
                      }`}
                  >
                    Blogging
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("ecommerce")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "ecommerce"
                      ? "activeClasses bg-blue-600 text-white"
                      : "inactiveClasses text-body-color hover:bg-blue-600 hover:text-white"
                      }`}
                  >
                    E Commerce
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {portfolioData.map((data) => {
              return (
                <PortfolioCard
                  key={data.id}
                  image={data.image}
                  category={data.category}
                  name={data.name}
                  link={data.link}
                  showCard={showCard}
                />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio