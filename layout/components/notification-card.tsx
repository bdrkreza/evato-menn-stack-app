import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import * as React from "react";
import { AiOutlineBell } from "react-icons/ai";

export default function NotificationCard() {
  const router = useRouter();

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
    <div>
      <Stack direction="row" spacing={2} sx={{ position: "relative" }}>
        <Box
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <a className="nav-link" href="#">
            {open ? null : <span>{ntItem.length}</span>}
            <AiOutlineBell />
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
          {({ TransitionProps }) => (
            <Grow {...TransitionProps}>
              <Paper
                sx={{
                  position: "absolute",
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 3,
                  width: 400,
                  marginLeft: -44,
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
                    <CardContent
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography className="notification">
                        <strong>notification</strong>
                        <span>{ntItem.length}</span>
                      </Typography>
                    </CardContent>

                    <Divider />
                    {ntItem.map(({ title, image, description }, index) => (
                      <CardActionArea key={index}>
                        <Box
                          sx={{
                            display: "flex",
                            padding: "10px 5px",
                            height: "60%",
                            gap: 2,
                            img: {
                              width: "30%",
                            },
                            h1: {
                              fontSize: "14px",
                              fontWeight: 600,
                            },
                            h2: {
                              fontSize: "12px",
                              fontWeight: 500,
                              lineHeight: 1.5,
                              whiteSpace: "20px",
                            },
                          }}
                        >
                          <CardMedia
                            component="img"
                            image={image}
                            alt="Paella dish"
                          />
                          <Typography>
                            <Typography component={"h1"}>{title}</Typography>
                            <Typography component={"h2"}>
                              {description}
                            </Typography>
                          </Typography>
                        </Box>
                      </CardActionArea>
                    ))}
                  </Card>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Stack>
    </div>
  );
}

const ntItem = [
  {
    image:
      "https://www.startech.com.bd/image/cache/catalog/offer-page/huawei-matebook-offer-page-600x600.jpg",
    title: "Huawei Matebook Offer",
    description:
      "Huawei MateBook D সিরিজের যেকোন ল্যাপটপ কিনলেই নিশ্চিত উপহার হিসেবে পাচ্ছেন Huawei BackPack, Huawei Mouse এবং Huawei Band 4!!",
  },
  {
    image:
      "https://www.startech.com.bd/image/cache/catalog/offer-page/monsoon/monsoon-offer-page-600x600.jpg",
    title: "Desktop PC Monsoon Offer",
    description:
      "স্টার টেক অনলাইন শপ অথবা যেকোন শাখা থেকে Dell Inspiron সিরিজের ল্যাপটপ কিনলেই নিশ্চিত উপহার হিসেবে পাচ্ছেন Defender C-915 Wireless Keyboard and Mouse Combo একদম ফ্রি!",
  },
  {
    image:
      "https://www.startech.com.bd/image/cache/catalog/offer-page/dell-web-site-600x600.jpg",
    title: "Dell Inspiron laptop offer",
    description:
      " Wireless কি-বোর্ড মাউস কম্বো, ২০০০ টাকা গিফট ভাউচার সহ আকর্ষনীয় নিশ্চিত উপহার!!",
  },
];
