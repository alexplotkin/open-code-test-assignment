import { FilterIcon } from '@/app/icons/filter';
import { MagnifierIcon } from '@/app/icons/magnifier';

const filters = [
  'Design',
  'Developement',
  'Marketing',
  'Branding'
];

export const Search = () => {
  return (
    <section className="pt-10">
      <div className="container">
        <div className="relative">
          <div className="absolute inset-y-0 flex items-center left-4">
            <MagnifierIcon />
          </div>
          <input
            type="text"
            placeholder="Search for resources and tutorials"
            className="border-2 border-light-300 rounded-2xl w-full pl-12 pr-4 py-5"
          />
        </div>

        <div className="flex items-center justify-between mt-8 mb-16">
          <div className="flex items-center space-x-4">
            {['All Resources', ...filters].map((item, index) => {
              return (
                <div className={`relative ${index > 0 ? 'hidden lg:block' : ''}`} key={index}>
                  <input type="checkbox" className="peer absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div
                    className="peer-checked:bg-light-200 rounded-lg border border-light-300 text-dark-200 px-4 py-2.5">
                    {item}
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <button
              className="flex items-center space-x-2.5 border border-light-300 px-4 py-2.5 text-base text-dark-200 rounded-lg">
              <FilterIcon />
              <div>Filters</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
