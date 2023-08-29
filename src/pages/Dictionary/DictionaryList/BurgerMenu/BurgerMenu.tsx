import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWordsStore } from "../../../../stores/Words";
import { IconButton, Paper, Menu, MenuItem, ListItemIcon, ListItemText, Icon } from "tlp-ui-kit";

type BurgerMenuProps = {
  id: string;
};

function BurgerMenu({ id }: BurgerMenuProps) {
  const navigate = useNavigate();
  const remove = useWordsStore((state) => state.remove);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <Icon name="MenuIcon" />
      </IconButton>
      <Paper width= "fit-content">
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem
            onClick={() => {
              navigate(`edit/${id}`);
            }}
          >
            <ListItemIcon>
              <Icon name="EditIcon" color="primary" />
            </ListItemIcon>
            <ListItemText>Редактировать</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={() => {
              remove(id);
            }}
          >
            <ListItemIcon>
              <Icon name="DeleteOutlineIcon" color="primary" />
            </ListItemIcon>
            <ListItemText>Удалить</ListItemText>
          </MenuItem>
        </Menu>
      </Paper>
    </>
  );
}

export default BurgerMenu;
