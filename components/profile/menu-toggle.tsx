import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

export const MenuToggle = ({ toggle, show }: any) => (
  <motion.button
    className="toggle"
    onClick={toggle}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    {show ? <AiOutlineClose /> : <MenuOpenIcon />}
  </motion.button>
);
