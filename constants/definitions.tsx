export type Product = {
    id: number;
    title: string;
    slug: string;
    subtitle: string;
    image: string;
    subProducts: subProduct[];
};

export type subProduct = {
    id: number;
    title: string;
    slug: string;
    subtitle: string;
    image: string;
    description: string[]
    portfolioList: string[]
}
