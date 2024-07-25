export const Banner = () => {
  const topBgImage = 'before:bg-banner-top before:bg-cover before:absolute before:top-0 before:inset-x-0 before:w-full before:h-[90px] before:rounded-t-3xl';
  const bottomBgImage = 'after:bg-banner-bottom after:bg-cover after:absolute after:bottom-0 after:inset-x-0 after:w-full after:h-[100px] after:rounded-b-3xl';
  return (
    <section>
      <div className="container">
        <div
          className={`relative flex-wrap bg-gradient-to-b from-[#2F5478] to-[#22405C] rounded-3xl py-15 px-6 lg:py-31 lg:pl-22.5 lg:pr-31 flex items-center justify-between ${topBgImage} ${bottomBgImage}`}>
          <div className="max-w-[555px] mb-16 xl:mb-0">
            <div className="text-[40px] lg:text-[64px] leading-[48px] lg:leading-[77px] font-normal text-white">
              Transforming your <span className="font-semibold">Ideas into reality</span>
            </div>
            <div className="mt-5 text-light-300 text-xl">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Let's build something extraordinary together to captivate your audience.
            </div>
          </div>

          <div className="flex justify-center xl:justify-end w-full xl:w-auto">
            <div
              className="w-[250px] h-[250px] border-2 border-white flex items-center justify-center text-2xl text-white rounded-full px-15 text-center">
              Let’s Work Together!
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
