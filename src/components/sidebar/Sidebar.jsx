import { useState } from "react";
import { motion } from 'framer-motion';
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const Sidebar = () => {

    const [open, setOpen] = useState(false);

    const variants = {
        open: {
            clipPath: "circle(75rem at 3rem 3rem)",
            transition: {
                type: "spring",
                stiffness: 20,
            }
        },
        closed: {
            clipPath: "circle(2rem at 3rem 3rem)",
            transition: {
                delay: 0.2,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

  return (
    <motion.div className="sidebar"  animate={open ? "open" : "closed"}>
        <motion.div className="bg" variants={variants}>
            <Links />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
    </motion.div>
  )
}

export default Sidebar