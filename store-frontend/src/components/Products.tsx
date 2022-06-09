import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
interface IFilters {
  color?: string;
  type?: string;
}

interface ProductsProps {
  filters: IFilters;
  sort: string;
}

interface IProduct {
  _id: string;
  title: string;
  description: string;
  img: string;
  categories: string[];
  type: string;
  color: string;
  price: number;
  inStock: boolean;
  createdAt: Date;
}

const Products: React.FC<ProductsProps> = ({ filters, sort }) => {
  const [products, setProducts] = React.useState<IProduct[]>([]);

  useEffect(() => {
    const searchParams = new URLSearchParams();
    searchParams.append("sort", sort);
    if (filters.color) {
      searchParams.append("color", filters.color);
    }
    if (filters.type) {
      searchParams.append("type", filters.type);
    }

    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          `/products?${searchParams.toString()}`
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [filters, sort]);

  return (
    <Container>
      {filters.type
        ? products.map((item) => (
            <Product id={item._id} img={item.img} key={item._id} />
          ))
        : products
            .slice(0, 8)
            .map((item) => (
              <Product id={item._id} img={item.img} key={item._id} />
            ))}
    </Container>
  );
};

export default Products;
