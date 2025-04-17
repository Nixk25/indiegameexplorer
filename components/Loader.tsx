import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <DotLottieReact
        src="https://lottie.host/702b8412-3b77-4d3f-9de3-18eff072278b/FfL7Fb9rJv.lottie"
        loop
        autoplay
        onError={(err) => console.error("Lottie error", err)}
        style={{ width: "240px", height: "240px" }}
      />
    </div>
  );
};

export default Loader;
