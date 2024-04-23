import * as React from 'react';
import { FC } from 'react';
import List from '@mui/material/List';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import CompanyCard from './CompanyCard/CompanyCard';
import data from '../data';
import CategoryListItem from './CategoryListItem';
import { Category } from '../types';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import SpaIcon from '@mui/icons-material/Spa';
import DiningOutlinedIcon from '@mui/icons-material/DiningOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import TextureOutlinedIcon from '@mui/icons-material/TextureOutlined';

type Props = {
  chosenCategory: string;
  areDescCollapsed: boolean;
  areCategoriesCollapsed: boolean;
};

const Icons = {
  [Category.All]: <AppsOutlinedIcon />,
  [Category.Hotels]: <BedOutlinedIcon />,
  [Category.Clinics]: <SpaIcon />,
  [Category.Cafes]: <DiningOutlinedIcon />,
  [Category.Stores]: <ShoppingBasketOutlinedIcon />,
  [Category.Gym]: <FitnessCenterOutlinedIcon />,
  [Category.Other]: <TextureOutlinedIcon />,
};

const CategoryList: FC<Props> = ({ chosenCategory, areDescCollapsed, areCategoriesCollapsed }) => {
  const filteredData = data.filter((item) => {
    if (chosenCategory === 'All') {
      return true;
    }
    return item.category === chosenCategory;
  });

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }} component="nav">
      {filteredData.map((item, index) => {
        return (
          <CategoryListItem
            title={item.category}
            key={index}
            icon={Icons[item.category as Category]}
            areCategoriesCollapsed={areCategoriesCollapsed}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Box
                display="grid"
                gridTemplateColumns="repeat(auto-fill, minmax(400px, 1fr))" // "repeat(auto-fill, minmax(250px, 1
                gap={2}
              >
                {item.items.map((company, index) => (
                  <CompanyCard company={company} key={index} areDescCollapsed={areDescCollapsed} />
                ))}
              </Box>
            </Box>
          </CategoryListItem>
        );
      })}
    </List>
  );
};

export default CategoryList;
