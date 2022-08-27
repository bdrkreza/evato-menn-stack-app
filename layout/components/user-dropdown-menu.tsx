import { Logout, Settings } from "@mui/icons-material";
import { Avatar, Box, Card, Divider, ListItemIcon } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { TUser } from "../../types/user.type";
type Props = {
  user: TUser | null;
};

export default function UserDropMenu({ user }: Props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2} sx={{ position: "relative" }}>
      <Box
        className="nav-ite"
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <a className="nav-link  d-block">
          <Avatar sx={{ width: 25, height: 25 }}>{user?.name}</Avatar>
        </a>
      </Box>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
        sx={{ zIndex: 9, width: "100%" }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper
              sx={{
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 3,
                marginLeft: -15,
                "& .MuiAvatar-root": {
                  width: 30,
                  height: 30,
                  ml: -0.5,
                  mr: 2,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 20,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <Card>
                  <Link href="/profile">
                    <MenuItem onClick={handleClose}>
                      <Avatar /> {user?.name}
                    </MenuItem>
                  </Link>

                  <Divider />
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      dispatch(logout()), setOpen(false);
                      router.push("/");
                    }}
                  >
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Card>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Stack>
  );
}
