import React, { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import cn from "classnames";
function ScrollMouse() {
  const [sy, setSy] = useState(0);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setSy(y));
  return (
    <div class={cn({ "scroll-downs transition-all duration-700": true, "opacity-0": sy > 10 })}>
      <div class="mousey left-0 right-0 mx-auto bottom-4 scale-75  lg:scale-100  ">
        <div class="scroller"></div>
      </div>
    </div>
  );
}

export default ScrollMouse;
