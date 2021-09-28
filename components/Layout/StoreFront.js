import { isPlainObject } from 'lodash'
import MainSlider from '../Slider/MainSlider'
import Category from '../Navigation/Category'
import AllProduct from "../Product/AllProduct";
export default function StoreFront() {
    return (
        <div>
          <div className="">

              {/* slider div */}
              <div className="mt-[60px]">
                <MainSlider />
                <Category />
                <AllProduct/>
                
              </div>

          </div>
        </div>
    )
}
