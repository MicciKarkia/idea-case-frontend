import React, { Component } from 'react';
import CategoryAdd from '../../components/categoryComponents/CategoryAdd';
import CategoryList from '../../components/categoryComponents/CategoryList';
import CategoryRandomized from '../../components/categoryComponents/CategoryRandomized';
import CategoriesIntellingentSearch from '../../components/categoryComponents/CategoriesIntellingentSearch';

export default class Categories extends Component {

  render() {
    return (
      <div>
        <h2>My Categories</h2>
        <CategoriesIntellingentSearch />
        <CategoryRandomized />
        <CategoryAdd />
        <CategoryList />
      </div>
    );
  }
}
