
import Image from 'next/image';
import RemoveColorOnScroll from './RemoveColorOnScroll';
import RevealOnScroll from './RevealOnScroll';

interface Props {
  title: string;
  subtitle: string;
  imageSrc: string;
  descriptions?: Array<string>;
  portfolioList?: Array<string>;
  equipments?: Array<any>;
}

const ItemCard = ({ imageSrc, title, subtitle, descriptions, portfolioList }: Props) => {
  return (
    <>
      <div className="relative h-screen container  mx-auto">
        <div className="relative h-1/2">
          <div className="flex">
            <div className="relative w-3/5">
              <Image className="object-contain h-full w-auto min-h-80" src={imageSrc} alt={title} width={1200} height={800} />
            </div>
            <div className='relative w-2/5 bg-gray-200 p-5 mx-2'>
                {title && <p className="tracking-wide text-4xl mb-2">{title}</p>}
                {subtitle && <p className="text-2xl mb-4">{subtitle}</p>}

                {descriptions && descriptions.length > 0 && descriptions.map((description, index) => (
                  <p key={index} className="mb-4" dangerouslySetInnerHTML={{ __html: description }}></p>
                ))}
            </div>
          </div>
        </div>
        <div className="relative h-1/2 ">
          <div className="flex">
            <div className="relative w-1/3 bg-gray-200 p-5">
                {portfolioList && portfolioList.length > 0 &&
                <div>
                  <h4 className="text-4xl ml-10">Portfolio</h4>
                    <ul className="list-disc mt-5 mx-10">
                      {portfolioList.map((description, index) => (
                        <li key={index}>
                          <p  className="mb-4" dangerouslySetInnerHTML={{ __html: description }}></p>
                        </li>
                      ))}
                    </ul>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
