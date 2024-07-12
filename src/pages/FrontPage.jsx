import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import a from "../assets/a.png";

const FrontPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="flex bg-gray-200">
      <section className="flex-1 flex items-center justify-center relative">
        <div className="overflow-hidden py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-2 lg:px-2">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-1">
              <div className="lg:pt-12">
                <div className="lg:max-w-xl">
                  <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-left">
                    Welcome to My Website{' '}
                    <span className="block text-blue-700 lg:inline">
                      Happy Shopping
                    </span>
                  </h1>
                  <p className="mt-6 text-center text-lg leading-8 text-gray-900 lg:text-left">
                    Welcome to Your Ultimate Shopping Destination Explore unbeatable deals and a wide range of products tailored to your needs. Shop now and enjoy fast, reliable delivery right to your doorstep!!
                  </p>
                  <div className="mt-10 flex flex-wrap items-center justify-center gap-y-4 gap-x-6 sm:flex-nowrap sm:gap-y-4 lg:justify-start">
                    <button
                      className="rounded-md bg-blue-600 px-5 py-2 text-base font-semibold text-xl leading-7 text-white shadow-sm transition-all hover:bg-blue-700 sm:w-fit"
                      onClick={() => loginWithRedirect()}
                    >
                      Login 
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex-1 flex items-center justify-center relative">
        <img src={a} className="h-600 w-600 mr-20 px-1" alt="shopping" />
      </div>
    </div>
  );
};

export default FrontPage;

