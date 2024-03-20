import { subtitle, products } from "@/constants/products";
import Image from "next/image";
import GridContainer from "./GridContainer";


const ProductComponent = (product: any) => {

  return (
    <div className="">
			<div className="container mx-auto p-6 mb-5 relative z-20">
				<div className="mb-2 md:mb-10 ml-2 lg:ml-32">
					<h1 className="text-4xl lg:text-6xl mb-2 md:mb-10">{product.title}</h1>
					<p className="text-xl pr-2 md:pr-32 lg:pr-40 xl:pr-96">{subtitle}</p>
				</div>
			</div>
			<GridContainer></GridContainer>
		</div>
  );
}

export default ProductComponent;