import { Socials } from '@/app/components/footer/socials';
import { Nav } from '@/app/components/footer/nav/nav';
import { LogoText } from '@/app/components/logo';

export const Footer = () => {
  return (
    <footer className="bg-accent py-21.5">
      <div className="container">
        <div className="relative pt-19 px-6 md:px-20 bg-white rounded-4.5xl pb-[90px] md:pb-[150px]">
          <div className="">
            <div className="flex justify-between flex-wrap flex-col md:flex-row">
              <div>
                <div className="pb-8 text-center md:text-left">
                  <div className="text-xl text-dark-500 font-semibold mb-2 md:mb-0">
                    Say Hello!
                  </div>
                  <div className="text-xl text-dark-300">
                    <a className="block border md:border-0 border-light-300 py-2 md:py-0 rounded"
                       href="mailto:opencoregroup@gmail.com">
                      opencoregroup@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex justify-center md:justify-start pb-8 md:pb-0 border-b md:border-0 mb-8 md:mb-0">
                  <Socials />
                </div>
              </div>
              <div>
                <Nav />
              </div>
            </div>

            <div className="flex items-center justify-between mt-32 flex-col md:flex-row space-y-2 md:space-y-0">
              <div className="text-xl text-dark-200">
                Toronto, ON Canada
              </div>
              <div className="text-xl text-dark-200">
                OpenCore. All Rights Reserved
              </div>
            </div>
          </div>

          <div className="mt-22.5 md:mt-42">
            <div className="absolute -bottom-[50px] lg:-bottom-[30px] inset-x-0 flex justify-center">
              <LogoText />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
