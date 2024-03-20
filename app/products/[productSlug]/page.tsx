
import ItemList from "@/app/components/ItemList";
import PageTitle from "@/app/components/PageTitle";
import { findProductBySlug } from "@/app/utils/productUtils";
import Head from "next/head";

const ProductPage = ({ params }: { params: { productSlug: string } }) => {
 
  const product = findProductBySlug(params.productSlug as string)
  
  return (
    <>
      <Head>
        <title>{product?.title}</title>
        <meta name="description" content={product?.subtitle} />
      </Head>
      <PageTitle title={product?.title} subtitle={product?.subtitle} descriptions={product?.descriptions || []}></PageTitle>
      <ItemList products={product?.subProducts || []}></ItemList>
    </>
  );
};

export default ProductPage;