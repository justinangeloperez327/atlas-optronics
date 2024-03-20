import Image from 'next/image';

interface Props {
  title: string;
  subtitle: string;
  imageSrc: string;
  descriptions: Array<string>;
  portfolioList: Array<string>;
  equipments?: Array<any>;
}

const EquipmentCard = ({ imageSrc, title, subtitle, descriptions, portfolioList }: Props) => {
  return (
    <div className="relative container mx-auto lg:ml-50 mt-20">
      <div className="relative max-w">
        <div className="lg:flex">
          <div className="w-full lg:w-3/5 lg:pl-0 h-100 z-10">
            <Image className="object-fill object-center h-full w-auto" src={imageSrc} alt={title} width={1200} height={800} />
          </div>
          <div className="w-full lg:w-2/5 lg:-ml-10 lg:-mt-10">
            <div className='bg-gray-200 p-10'>
              <div className='ml-5'>
                <div className="tracking-wide text-4xl text-slate-700 mb-2">{title}</div>
                <div className="tracking-wide text-xl text-slate-600 mb-4">{subtitle}</div>
                {descriptions.map((description, index) => (
                  <p key={index} className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: description }}></p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex ml-12 md:ml-20 lg:ml-96 -mt-10">
          <div className="w-4/5 lg:w-3/5 py-6 text-slate-200 shadow-lg z-10">
            <h4 className="text-4xl ml-10">Portfolio</h4>
            <ul className="list-disc mt-5 mx-10">
              {portfolioList.map((description, index) => (
                <li key={index}>
                  <p className="text-slate-200">{description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="relative mt-4">
        <div className="container bg-gray-200 mx-auto">
          <div className="flex p-5">
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentCard;
