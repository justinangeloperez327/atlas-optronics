import ItemList from "@/app/components/ItemList";
import PageTitle from "@/app/components/PageTitle";


export const metadata = {
	title: product.title ,
	description: product.subtitle,
};


const ProductPage = () => {
	return (
		<>
		<PageTitle title={product?.title} subtitle={product.subtitle} descriptions={product.descriptions || []}></PageTitle>
		<ItemList products={product.subProducts || []}></ItemList>
		</>
	);
};

export default ProductPage;