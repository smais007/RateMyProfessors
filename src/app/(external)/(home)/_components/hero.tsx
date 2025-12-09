import React from "react";

import AnimatedBorder from "./animated-border";

export default function Hero() {
  return (
    <div className="border-left border-right mx-auto h-dvh max-w-7xl">
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="">
        <h1>Hello</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, voluptatibus voluptatum cum voluptatem aliquid
          cupiditate blanditiis cumque. Quam odio, amet, nisi saepe nulla velit libero asperiores aspernatur voluptatem
          nostrum eligendi possimus omnis, sit est esse quo nemo mollitia consectetur cumque neque. In id architecto
          sint sunt nemo dolorem veritatis quasi sit et perspiciatis, totam a facere velit! Voluptatum provident
          consequuntur accusamus magnam error facere blanditiis fuga ab rem impedit incidunt deleniti, consequatur esse
          ea doloremque autem, natus numquam nulla. Harum perferendis libero ratione consectetur sed quidem quia et
          ducimus odio possimus ipsum expedita, aut fuga atque laboriosam quam cumque corrupti doloremque quas delectus
          id facere. Expedita alias id a beatae fuga porro officiis tempora fugiat animi in? Ad aut dolore totam ratione
          fuga molestias quas quia incidunt ab voluptate odio nulla, praesentium laborum quidem natus aliquam eaque
          voluptas necessitatibus tenetur doloribus. Blanditiis, reprehenderit tempore error sed consequatur temporibus
          ab tempora adipisci unde odit sint vero optio harum? Eaque iste harum repellat dignissimos tempora sunt ad
          consequuntur quasi eum cupiditate vitae obcaecati temporibus pariatur earum, voluptatum ex sit nihil, odio b
        </p>
        <AnimatedBorder glowColor="rgb(59, 130, 246)" duration={1.5}></AnimatedBorder>
      </div>
    </div>
  );
}
