import ItemCard from "./ItemCard";
import RevealOnScroll from "./RevealOnScroll";

interface Props {
  products: Array<any>;
}


const ProductTypes = ({ products }: Props) => {
	return(
    <>
      <div className="relative">
        {products.map((product, index) => (
          <RevealOnScroll key={index}>
            <ItemCard
              title={product.title}
              subtitle={product.subtitle}
              imageSrc={product.image}
              descriptions={product.descriptions}
              portfolioList={product.portfolioList || []}
              equipments={product.equipments || []}
            />
          </RevealOnScroll>
        ))}
      </div>
		</>
	)
}

export default ProductTypes;