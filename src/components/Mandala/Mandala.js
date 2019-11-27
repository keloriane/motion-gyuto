import React,{useState, useEffect} from 'react';
import mandala from './assets/images/mandala.svg';
import {TweenMax} from 'gsap';
import {videos} from './data';
import {symbole,turnRight,newAnim} from './functions'
import Element from './Element'
import "./_mandala.scss"
const Mandala = (props) => {

    const [hover, setHover] = useState(false);
    const [rotate, setRotate] = useState(false);

    const hoverMandala = () => {

        setHover(!hover)
        console.log(hover)
    }
    
    const coordClick = () => {
        
    }
    
    useEffect(()=> {
        function hoverable(){
           const svgModel = document.querySelector('.mandala')
           svgModel.addEventListener('mouseover', hoverMandala())

        }
        hoverable()
    },[])

    


    return (
        <div className="bgc">
            <Element  />
        </div>
    )
}
    export default Mandala