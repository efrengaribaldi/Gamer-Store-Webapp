import { red } from "@mui/material/colors";
import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobails } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobails} {
    width: 80vw;
  }
`;
const Filter = styled.div`
  margin: 20px;
  ${mobails} {
    width: 0px 20px;
    display: flex;
    flex-direction: column;
  }
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobails} {
    margin-right: 0px;
  }
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobails} {
    margin-right: 10px 0px;
  }
`;
const Option = styled.option``;

interface IFilters {
  color?: string;
  type?: string;
}

const ProductListView: React.FC = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = React.useState<IFilters>({});
  const [sort, setSort] = React.useState("type");

  const handleFilters = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as string;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSort(value);
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>rgb</Option>
            <Option>neutrals</Option>
            <Option>pastel colours</Option>
          </Select>
          <Select name="type" onChange={handleFilters}>
            <Option disabled>Type</Option>
            <Option>pc-parts</Option>
            <Option>pc-cases</Option>
            <Option>pc-add-ons</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select onChange={handleSort}>
            <Option value="type">Type </Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductListView;
