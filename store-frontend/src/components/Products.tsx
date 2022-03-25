import axios, { AxiosResponse } from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
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
  cat: string;
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

const Products: React.FC<ProductsProps> = ({ cat, filters, sort }) => {
  const [products, setProducts] = React.useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = React.useState<IProduct[]>(
    []
  );

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get<IProduct[]>(
          cat
            ? `http://localhost:5002/api/products?category=${cat}`
            : "http://localhost:5002/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    setFilteredProducts(
      products.filter((item) => {
        if (filters.color !== undefined && filters.type !== undefined) {
          return item.color === filters.color && item.type === filters.type;
        }
        if (filters.color !== undefined && filters.type === undefined) {
          return item.color === filters.color;
        }
        if (filters.color === undefined && filters.type !== undefined) {
          return item.type === filters.type;
        }
        return item;
      })
    );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "type") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort === "desc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => (
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
