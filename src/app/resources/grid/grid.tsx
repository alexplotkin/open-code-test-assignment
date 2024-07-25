import Image from "next/image";
import { FileIcon } from '@/app/icons/file';
import { CodeIcon } from '@/app/icons/code';
import { AttachmentIcon } from '@/app/icons/attachment';

const items = [
  {
    img: 'item1.png',
    title: 'Case Study Template: FlipX, an Investment Attraction Startup',
    tags: ['Design file']
  },
  {
    img: 'item2.png',
    title: 'Designing Impression: The Power of First Impressions',
    tags: ['Github Resource']
  },
  {
    img: 'item3.png',
    title: 'Fluid Card Animation in After Effects',
    tags: ['Design', 'UI UX', 'Branding']
  },
  {
    img: 'item4.png',
    title: 'Designing Impression: The Power of First Impressions',
    tags: ['Design', 'UI UX', 'Branding']
  },
  {
    img: 'item5.png',
    title: 'Designing Impression: The Power of First Impressions',
    tags: ['Design']
  },
  {
    img: 'item6.png',
    title: 'OpenCore Customer Acquisition Strategy',
    tags: ['Markeing PDF']
  },
];

export const Grid = () => {
  return (
    <div className="container mb-31.5">
      <div className="grid lg:grid-cols-3 lg:gap-x-5 gap-y-20">
        {items.map((item, index) => (
          <div className={`mx-auto ${index > 2 ? 'hidden lg:block' : ''}`} key={index}>
            <Image
              className="mb-4"
              src={`/grid-images/${item.img}`}
              alt={index.toString()}
              width={403}
              height={247}
              priority
            />
            <div className="text-2xl font-medium text-dark-400 max-w-[355px]">
              {item.title}
            </div>
            {!!item.tags.length && (
              <div className="mt-5 flex space-x-2">
                {item.tags.map((tag, index) => (
                  <div key={index} className="flex items-center space-x-[5px] p-2 rounded bg-[#F9FAFB]">
                    {tag.includes('file') && <AttachmentIcon />}
                    {tag.includes('Github') && <CodeIcon />}
                    {tag.includes('PDF') && <FileIcon />}
                    <div className="text-sm text-dark-200">
                      {tag}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
