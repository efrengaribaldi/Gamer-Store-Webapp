import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { mobails, tablet } from "../responsive";

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
  ${tablet} {
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
  ${tablet} {
    width: 0 30px;
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
  ${tablet} {
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
  const { state } = useLocation();
  const [filters, setFilters] = React.useState<IFilters>({
    color: "rgb",
    type: state as string,
  });
  const [sort, setSort] = React.useState("type");

  const handleFilters = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
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
      <Announcement />
      <Title>{filters.type}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option value="rgb">rgb</Option>
            <Option value="neutrals">neutrals</Option>
            <Option value="pastel-colours">pastel colours</Option>
          </Select>
          <Select name="type" onChange={handleFilters} value={filters.type}>
            <Option disabled>Type</Option>
            <Option value="pc-parts">pc-parts</Option>
            <Option value="pc-cases">pc-cases</Option>
            <Option value="pc-add-ons">pc-add-ons</Option>
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

      <Products filters={filters} sort={sort} />
      <Footer />
    </Container>
  );
};

export default ProductListView;
