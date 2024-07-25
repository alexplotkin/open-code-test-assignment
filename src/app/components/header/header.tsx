import Link from 'next/link';
import { LogoIcon } from '@/app/components/logo';
import { BurgerMenuIcon } from '@/app/icons/burger-menu';

export const Header = () => {
  return (
    <header className="flex items-center justify-center bg-header-top bg-center bg-cover h-[130px] lg:h-[155px]">
      <div className="flex items-center fixed z-10 top-12.5 border rounded-full divide-x bg-[#FCFCFD]">
        <Link href="/" className="py-3 lg:py-6 pl-7 pr-5.5">
          <div className="w-10 h-10 flex items-center justify-center">
            <LogoIcon />
          </div>
        </Link>
        <button className="py-3 lg:py-6 pr-7 pl-5.5">
          <div className="w-10 h-10 flex items-center justify-center">
            <BurgerMenuIcon />
          </div>
        </button>
      </div>
    </header>
  );
};
