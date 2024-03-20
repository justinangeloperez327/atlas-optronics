import ItemCard from "./ItemCard";


interface Props {
  products: Array<any>;
}

const ItemList = ({ products }: Props) => {
	return(
    <>
      <div className="relative">
        {products.map((product, index) => (
          <ItemCard
            key={index}
            title={product.title}
            subtitle={product.subtitle}
            imageSrc={product.image}
            descriptions={product.descriptions}
            portfolioList={product.portfolioList || []}
          />
      ))}
		</div>
		</>
	)
}

export default ItemList;