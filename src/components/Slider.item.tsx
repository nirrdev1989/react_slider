import React, { useState } from 'react'
import { Gallery } from '../data'
import FadeContainer from './Fade.container'

interface SliderItemProps {
    item: Gallery
}

export default function SliderItem({ item }: SliderItemProps) {
    const [mouseOver, setMouseOver] = useState<boolean>(false)
    return (
        <React.Fragment>
            <FadeContainer>
                <div className={` shadow-sm`}>
                    {/* {mouseOver && <span>{item.id}</span>} */}
                    {<img
                        // onMouseOver={() => setMouseOver(!mouseOver)}
                        // onMouseLeave={() => setMouseOver(!mouseOver)}
                        width="300"
                        height="300"
                        src={item.image}
                    />}
                    <span>{item.id}</span>
                </div>
            </FadeContainer>
        </React.Fragment>
    )
}
