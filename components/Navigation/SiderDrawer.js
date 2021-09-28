import React from 'react'
import { Categories as menu } from '../../NavigationMenu'
import Product from '../Card/Product'

function SiderDrawer(props) {
    let sideDrawClasses = 'sidebar'
    if (props.show) {
        sideDrawClasses = 'sidebar open'
    }

   
    return (

        <div className={sideDrawClasses}>
            <div className="h-[50px] w-full bg-red-300">
            </div>
            <div className="">
            <ul className="space-y-2 ml-10  items-center mt-4 overflow-y-scroll">
                {menu.map((prod) => {
                   
                    return (
                        <>
                            <h3 className="text-base font-thin">{prod.title}</h3>
                            <li className="ml-4 text-xs h-[20px]">{prod.cat}</li>
                        </>
                    )

                })}


            </ul>
            </div>
        </div>

    )
}

export default SiderDrawer
