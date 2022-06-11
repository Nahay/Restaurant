import { useState, useRef, useEffect } from "react";
import Image from 'next/image'

import Arrow from "../arrow/Arrow";
import content from './slider.json';


export default function Slider() {

    const [index, setIndex] = useState(0);
    const screen = useRef(null);
    const arrows = useRef(null);

    useEffect(() => {
        screen.current.children[0].children[0].classList.remove('bottom');
        screen.current.children[0].children[1].classList.remove('banner--hidden');

        arrows.current.children[1].classList.remove('arrow--hidden');

    }, []);

    const onArrowUpClick = () => {
        if (index !== 0) {
            screen.current.children[index].children[0].classList.add('bottom');
            screen.current.children[index-1].children[0].classList.remove('top');

            screen.current.children[index].children[1].classList.add('banner--hidden');
            screen.current.children[index-1].children[1].classList.remove('banner--hidden');

            arrows.current.children[1].classList.remove('arrow--hidden');

            index-1 === 0 ? arrows.current.children[0].classList.add('arrow--hidden')
                : arrows.current.children[0].classList.remove('arrow--hidden');

            setIndex(index - 1);
        }
    }

    const onArrowDownClick = () => {
        if (index !== content.length - 1) {
            screen.current.children[index].children[0].classList.add('top');
            screen.current.children[index+1].children[0].classList.remove('bottom');
            
            screen.current.children[index].children[1].classList.add('banner--hidden');
            screen.current.children[index+1].children[1].classList.remove('banner--hidden');

            arrows.current.children[0].classList.remove('arrow--hidden');

            index+1 === content.length - 1 ? arrows.current.children[1].classList.add('arrow--hidden')
                : arrows.current.children[1].classList.remove('arrow--hidden');

            setIndex(index + 1);
        }
    }

    return (
        <div className="slider">
            <div ref={arrows} className="arrow__container">
                <div className="arrow--hidden">
                    <Arrow direction="top" onClick={onArrowUpClick}/>
                </div>
                <div className="arrow--hidden">
                    <Arrow direction="bottom" onClick={onArrowDownClick}/>
                </div>
            </div>

            <div ref={screen}>
                {
                    content.map((screen, i) => {
                        return(
                            <div key={i}>   
                                <div className="text__container bottom">
                                    <p>{screen.subtitle}</p>
                                    <h1>{screen.title}</h1>
                                    <h3>{screen.description}</h3>
                                    <div className="action">
                                        <p>{screen.action}</p>
                                        <Arrow/>
                                    </div>
                                </div>
                                
                                <div className="banner banner--hidden">
                                    <Image src={screen.img} alt="banner" layout="fill" objectFit="cover" priority/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}