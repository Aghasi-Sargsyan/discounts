import './App.css';
import CustomSelect from './components/CustomSelect';
import { useState } from 'react';
import CategoryList from './components/CategoryList';
import { Box, Button } from '@mui/material';
import ExpandIcon from '@mui/icons-material/UnfoldMore';
import ResetIcon from '@mui/icons-material/Replay';
import CollapseIcon from '@mui/icons-material/UnfoldLess';

const App = () => {
  const [chosenCategory, setChosenCategory] = useState('All');
  const [areDescCollapsed, setAreDescCollapsed] = useState(true);
  const [areCategoriesCollapsed, setAreCategoriesCollapsed] = useState(false);

  return (
    <Box className="App" sx={{ p: 2 }}>
      <Box sx={{ mb: 2 }} display="flex" gap={2}>
        <CustomSelect value={chosenCategory} setValue={setChosenCategory} />
        <CustomSelect value={chosenCategory} setValue={setChosenCategory} />
        <CustomSelect value={chosenCategory} setValue={setChosenCategory} />
      </Box>
      <Box sx={{ mb: 2 }} display="flex" gap={2}>
        <Button variant="contained" endIcon={<ResetIcon />}>
          Reset Filters
        </Button>
        <Button
          variant="contained"
          endIcon={areCategoriesCollapsed ? <ExpandIcon /> : <CollapseIcon />}
          onClick={() => setAreCategoriesCollapsed(!areCategoriesCollapsed)}
        >
          {areCategoriesCollapsed ? 'Expand Categories' : 'Collapse Categories'}
        </Button>
        <Button
          variant="contained"
          endIcon={areDescCollapsed ? <ExpandIcon /> : <CollapseIcon />}
          onClick={() => setAreDescCollapsed(!areDescCollapsed)}
        >
          {areDescCollapsed ? 'Expand Descriptions' : 'Collapse Descriptions'}
        </Button>
      </Box>
      <CategoryList
        chosenCategory={chosenCategory}
        areDescCollapsed={areDescCollapsed}
        areCategoriesCollapsed={areCategoriesCollapsed}
      />
    </Box>
  );
};

export default App;
