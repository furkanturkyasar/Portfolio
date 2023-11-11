import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import {useRef} from 'react';


const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas corrupti dolorum minus eaque, harum molestias voluptatem, consequuntur ad obcaecati neque repellendus incidunt culpa dignissimos voluptas debitis ipsa odit consequatur dolores!" 
    },
    {
        id: 2,
        title: "Music App",
        img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas corrupti dolorum minus eaque, harum molestias voluptatem, consequuntur ad obcaecati neque repellendus incidunt culpa dignissimos voluptas debitis ipsa odit consequatur dolores!" 

    }
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        //offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <motion.img src={item.img} alt="project_img" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2 >{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
};

const Portfolio = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div className="progressBar" style={{ scaleX: scaleX }} ></motion.div>
        </div>
        {items.map(item => 
            <Single item={item} key={item.id} />
        )}
    </div>
  )
}

export default Portfolio