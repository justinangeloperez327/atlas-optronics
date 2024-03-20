import ItemCard from "./ItemCard";
import RevealOnScroll from "./RevealOnScroll";

interface Props {
  products: Array<any>;
}


const ItemList = ({ products }: Props) => {
	return(
    <>
      {products.map((product, index) => (
            <ItemCard
              key={index}
              title={product.title}
              subtitle={product.subtitle}
              imageSrc={product.image}
              descriptions={product.descriptions || []}
              portfolioList={product.portfolioList || []}
              equipments={product.equipments || []}
            />
        ))}
		</>
	)
}

export default ItemList;