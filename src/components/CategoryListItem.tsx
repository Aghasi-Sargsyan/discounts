import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import { FC, ReactNode, useEffect, useState } from 'react';
import { ListItem } from '@mui/material';

type Props = {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
  areCategoriesCollapsed: boolean;
};

const CategoryListItem: FC<Props> = ({ icon, title, children, areCategoriesCollapsed }) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(!areCategoriesCollapsed);
  }, [areCategoriesCollapsed]);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick} sx={{ pl: 0 }}>
        {icon && <ListItemIcon sx={{ mr: 0.5, minWidth: 'auto' }}>{icon}</ListItemIcon>}
        <ListItemText
          primary={title}
          sx={{
            flexGrow: 0,
            mr: 1,
          }}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem sx={{ pl: 2 }}>{children}</ListItem>
        </List>
      </Collapse>
    </>
  );
};

export default CategoryListItem;
