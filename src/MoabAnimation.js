import React from 'react'
import './moab.css'

const MoabAnimation = () => {
  React.useEffect(() => {
    setTextAnimation(0.1,2.4,2,'ease-in-out','#000',false);
  },[])
  function setTextAnimation(delay,duration,strokeWidth,timingFunction,strokeColor,repeat) {
    let paths = document.getElementsByClassName("thePath");
    let mode = repeat ? 'infinite' : 'forwards'
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      const length = path.getTotalLength();
      path.style["stroke-dashoffset"] = `${length}px`;
      path.style["stroke-dasharray"] = `${length}px`;
      path.style["stroke-width"] = `${strokeWidth}px`;
      path.style["stroke"] = `${strokeColor}`;
      path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
      path.style["animation-delay"] = `${i * delay}s`;
    }
  }
  return (
    <div>
      <svg width="1045.561" height="77.637" viewBox="0 0 1045.561 77.637">
        <g id="svgGroup"  fontSize="9pt" stroke="#000" strokeWidth="0.25mm" fill="none">
          <path d="M 0.491 77.637 L 0.003 77.637 L 0.003 19.043 A 24.602 24.602 0 0 1 0.85 12.28 Q 3.022 4.696 10.764 2.682 A 25.178 25.178 0 0 1 17.092 1.953 L 32.229 1.953 Q 37.28 1.953 40.558 3.501 A 9.955 9.955 0 0 1 44.436 6.641 Q 48.342 1.953 56.643 1.953 L 71.78 1.953 A 24.602 24.602 0 0 1 78.543 2.8 Q 86.127 4.973 88.141 12.714 A 25.178 25.178 0 0 1 88.87 19.043 L 88.87 73.242 L 79.592 77.637 L 79.104 77.637 L 79.104 19.043 A 13.694 13.694 0 0 0 78.778 15.91 Q 77.775 11.659 73.686 10.905 A 10.521 10.521 0 0 0 71.78 10.742 L 56.643 10.742 A 9.234 9.234 0 0 0 53.612 11.198 Q 49.319 12.688 49.319 19.043 L 49.319 73.242 L 40.042 77.637 L 39.553 77.637 L 39.553 19.043 A 13.694 13.694 0 0 0 39.227 15.91 Q 38.225 11.659 34.135 10.905 A 10.521 10.521 0 0 0 32.229 10.742 L 17.092 10.742 A 9.234 9.234 0 0 0 14.061 11.198 Q 9.768 12.688 9.768 19.043 L 9.768 73.242 L 0.491 77.637 Z" className="thePath" vectorEffect="non-scaling-stroke" />
          <path d="M 140.628 75.684 L 125.491 75.684 A 24.602 24.602 0 0 1 118.728 74.836 Q 111.144 72.664 109.13 64.923 A 25.178 25.178 0 0 1 108.401 58.594 L 108.401 19.043 A 24.602 24.602 0 0 1 109.248 12.28 Q 111.42 4.696 119.162 2.682 A 25.178 25.178 0 0 1 125.491 1.953 L 140.628 1.953 A 24.602 24.602 0 0 1 147.391 2.8 Q 154.974 4.973 156.989 12.714 A 25.178 25.178 0 0 1 157.717 19.043 L 157.717 58.594 A 24.602 24.602 0 0 1 156.87 65.357 Q 154.698 72.941 146.956 74.955 A 25.178 25.178 0 0 1 140.628 75.684 Z M 125.491 66.895 L 140.628 66.895 A 9.234 9.234 0 0 0 143.658 66.439 Q 147.952 64.949 147.952 58.594 L 147.952 19.043 A 13.694 13.694 0 0 0 147.626 15.91 Q 146.623 11.659 142.534 10.905 A 10.521 10.521 0 0 0 140.628 10.742 L 125.491 10.742 A 9.234 9.234 0 0 0 122.46 11.198 Q 118.167 12.688 118.167 19.043 L 118.167 58.594 A 13.694 13.694 0 0 0 118.492 61.726 Q 119.495 65.978 123.585 66.732 A 10.521 10.521 0 0 0 125.491 66.895 Z" className="thePath" vectorEffect="non-scaling-stroke" />
          <path d="M 177.737 77.637 L 177.249 77.637 L 177.249 19.043 A 24.602 24.602 0 0 1 178.096 12.28 Q 180.268 4.696 188.01 2.682 A 25.178 25.178 0 0 1 194.338 1.953 L 209.475 1.953 A 24.602 24.602 0 0 1 216.238 2.8 Q 223.822 4.973 225.836 12.714 A 25.178 25.178 0 0 1 226.565 19.043 L 226.565 73.242 L 217.288 77.637 L 216.799 77.637 L 216.799 43.262 L 187.014 43.262 L 187.014 73.242 L 177.737 77.637 Z M 187.014 19.043 L 187.014 34.375 L 216.799 34.375 L 216.799 19.043 A 13.694 13.694 0 0 0 216.474 15.91 Q 215.471 11.659 211.381 10.905 A 10.521 10.521 0 0 0 209.475 10.742 L 194.338 10.742 A 9.234 9.234 0 0 0 191.308 11.198 Q 187.014 12.688 187.014 19.043 Z" className="thePath" vectorEffect="non-scaling-stroke" />
          <path d="M 277.346 75.684 L 246.096 75.684 L 246.096 4.395 L 251.272 1.953 L 275.393 1.953 Q 290.042 1.953 290.042 16.602 L 290.042 24.609 A 16.487 16.487 0 0 1 289.676 28.186 Q 289.024 31.121 287.21 33.154 A 13.622 13.622 0 0 1 293.926 42.523 A 23.268 23.268 0 0 1 294.436 47.559 L 294.436 58.594 A 24.602 24.602 0 0 1 293.589 65.357 Q 291.417 72.941 283.675 74.955 A 25.178 25.178 0 0 1 277.346 75.684 Z M 255.862 39.258 L 255.862 66.895 L 277.346 66.895 A 9.234 9.234 0 0 0 280.377 66.439 Q 284.67 64.949 284.67 58.594 L 284.67 47.559 A 13.694 13.694 0 0 0 284.345 44.426 Q 283.342 40.174 279.252 39.42 A 10.521 10.521 0 0 0 277.346 39.258 L 255.862 39.258 Z M 255.862 10.742 L 255.862 30.469 L 275.393 30.469 A 5.757 5.757 0 0 0 277.501 30.114 Q 280.01 29.131 280.251 25.424 A 12.612 12.612 0 0 0 280.276 24.609 L 280.276 16.602 A 10.274 10.274 0 0 0 280.067 14.427 Q 279.384 11.287 276.471 10.823 A 6.851 6.851 0 0 0 275.393 10.742 L 255.862 10.742 Z" className="thePath" vectorEffect="non-scaling-stroke" />
          <path d="M 384.28 75.684 L 369.143 75.684 A 24.602 24.602 0 0 1 362.38 74.836 Q 354.796 72.664 352.782 64.923 A 25.178 25.178 0 0 1 352.053 58.594 L 352.053 4.395 L 361.331 0 L 361.819 0 L 361.819 58.594 A 13.694 13.694 0 0 0 362.145 61.726 Q 363.148 65.978 367.237 66.732 A 10.521 10.521 0 0 0 369.143 66.895 L 384.28 66.895 A 9.234 9.234 0 0 0 387.311 66.439 Q 391.604 64.949 391.604 58.594 L 391.604 4.395 L 400.881 0 L 401.37 0 L 401.37 58.594 A 24.602 24.602 0 0 1 400.522 65.357 Q 398.35 72.941 390.609 74.955 A 25.178 25.178 0 0 1 384.28 75.684 Z" className="thePath" vectorEffect="non-scaling-stroke" />
          <path d="M 427.883 77.637 L 427.395 77.637 L 427.395 10.84 L 406.497 10.84 L 406.497 10.352 L 410.452 1.953 L 458.059 1.953 L 458.059 2.441 L 454.104 10.84 L 437.161 10.84 L 437.161 73.242 L 427.883 77.637 Z" className="thePath" vectorEffect="non-scaling-stroke" />
          <path d="M 485.403 77.637 L 484.915 77.637 L 460.012 4.004 L 468.46 0 L 468.948 0 L 489.163 61.328 L 508.254 0 L 508.743 0 L 517.19 4.004 L 493.85 73.633 L 485.403 77.637 Z" className="thePath" vectorEffect="non-scaling-stroke" />
          <path d="M 597.512 75.684 L 566.262 75.684 L 566.262 4.395 L 571.438 1.953 L 597.512 1.953 A 24.602 24.602 0 0 1 604.275 2.8 Q 611.859 4.973 613.874 12.714 A 25.178 25.178 0 0 1 614.602 19.043 L 614.602 58.594 A 24.602 24.602 0 0 1 613.755 65.357 Q 611.583 72.941 603.841 74.955 A 25.178 25.178 0 0 1 597.512 75.684 Z M 576.028 10.742 L 576.028 66.895 L 597.512 66.895 A 9.234 9.234 0 0 0 600.543 66.439 Q 604.837 64.949 604.837 58.594 L 604.837 19.043 A 13.694 13.694 0 0 0 604.511 15.91 Q 603.508 11.659 599.418 10.905 A 10.521 10.521 0 0 0 597.512 10.742 L 576.028 10.742 Z" className="thePath" vectorEffect="non-scaling-stroke" />
          <path d="M 674.465 75.684 L 634.133 75.684 L 634.133 4.395 L 639.309 1.953 L 670.266 1.953 L 670.266 2.441 L 666.311 10.84 L 643.899 10.84 L 643.899 34.375 L 670.266 34.375 L 670.266 34.863 L 666.311 43.262 L 643.899 43.262 L 643.899 66.797 L 678.42 66.797 L 678.42 67.285 L 674.465 75.684 Z" className="thePath" vectorEffect="non-scaling-stroke" />
          <path d="M 697.61 77.637 L 697.122 77.637 L 697.122 10.84 L 676.223 10.84 L 676.223 10.352 L 680.178 1.953 L 727.786 1.953 L 727.786 2.441 L 723.831 10.84 L 706.887 10.84 L 706.887 73.242 L 697.61 77.637 Z" className="thePath" vectorEffect="non-scaling-stroke" />
          <path d="M 773.245 75.684 L 732.913 75.684 L 732.913 4.395 L 738.088 1.953 L 769.045 1.953 L 769.045 2.441 L 765.09 10.84 L 742.678 10.84 L 742.678 34.375 L 769.045 34.375 L 769.045 34.863 L 765.09 43.262 L 742.678 43.262 L 742.678 66.797 L 777.2 66.797 L 777.2 67.285 L 773.245 75.684 Z" className="thePath" vectorEffect="non-scaling-stroke" />
          <path d="M 821.633 75.684 L 806.497 75.684 A 24.602 24.602 0 0 1 799.734 74.836 Q 792.15 72.664 790.135 64.923 A 25.178 25.178 0 0 1 789.407 58.594 L 789.407 19.043 A 24.602 24.602 0 0 1 790.254 12.28 Q 792.426 4.696 800.168 2.682 A 25.178 25.178 0 0 1 806.497 1.953 L 821.633 1.953 A 24.602 24.602 0 0 1 828.396 2.8 Q 835.98 4.973 837.995 12.714 A 25.178 25.178 0 0 1 838.723 19.043 L 838.723 24.414 L 829.446 28.809 L 828.958 28.809 L 828.958 19.043 A 13.694 13.694 0 0 0 828.632 15.91 Q 827.629 11.659 823.539 10.905 A 10.521 10.521 0 0 0 821.633 10.742 L 806.497 10.742 A 9.234 9.234 0 0 0 803.466 11.198 Q 799.172 12.688 799.172 19.043 L 799.172 58.594 A 13.694 13.694 0 0 0 799.498 61.726 Q 800.501 65.978 804.591 66.732 A 10.521 10.521 0 0 0 806.497 66.895 L 821.633 66.895 A 9.234 9.234 0 0 0 824.664 66.439 Q 828.958 64.949 828.958 58.594 L 828.958 53.223 L 838.235 48.828 L 838.723 48.828 L 838.723 58.594 A 24.602 24.602 0 0 1 837.876 65.357 Q 835.704 72.941 827.962 74.955 A 25.178 25.178 0 0 1 821.633 75.684 Z" className="thePath" vectorEffect="non-scaling-stroke" />
          <path d="M 862.795 77.637 L 862.307 77.637 L 862.307 10.84 L 841.409 10.84 L 841.409 10.352 L 845.364 1.953 L 892.971 1.953 L 892.971 2.441 L 889.016 10.84 L 872.073 10.84 L 872.073 73.242 L 862.795 77.637 Z" className="thePath" vectorEffect="non-scaling-stroke" />
          <path d="M 898.587 77.637 L 898.098 77.637 L 898.098 4.395 L 907.376 0 L 907.864 0 L 907.864 73.242 L 898.587 77.637 Z" className="thePath" vectorEffect="non-scaling-stroke" />
          <path d="M 959.622 75.684 L 944.485 75.684 A 24.602 24.602 0 0 1 937.722 74.836 Q 930.138 72.664 928.124 64.923 A 25.178 25.178 0 0 1 927.395 58.594 L 927.395 19.043 A 24.602 24.602 0 0 1 928.242 12.28 Q 930.415 4.696 938.156 2.682 A 25.178 25.178 0 0 1 944.485 1.953 L 959.622 1.953 A 24.602 24.602 0 0 1 966.385 2.8 Q 973.968 4.973 975.983 12.714 A 25.178 25.178 0 0 1 976.712 19.043 L 976.712 58.594 A 24.602 24.602 0 0 1 975.864 65.357 Q 973.692 72.941 965.951 74.955 A 25.178 25.178 0 0 1 959.622 75.684 Z M 944.485 66.895 L 959.622 66.895 A 9.234 9.234 0 0 0 962.653 66.439 Q 966.946 64.949 966.946 58.594 L 966.946 19.043 A 13.694 13.694 0 0 0 966.62 15.91 Q 965.617 11.659 961.528 10.905 A 10.521 10.521 0 0 0 959.622 10.742 L 944.485 10.742 A 9.234 9.234 0 0 0 941.454 11.198 Q 937.161 12.688 937.161 19.043 L 937.161 58.594 A 13.694 13.694 0 0 0 937.487 61.726 Q 938.49 65.978 942.579 66.732 A 10.521 10.521 0 0 0 944.485 66.895 Z" className="thePath" vectorEffect="non-scaling-stroke" />
          <path d="M 996.731 77.637 L 996.243 77.637 L 996.243 19.043 A 24.602 24.602 0 0 1 997.09 12.28 Q 999.262 4.696 1007.004 2.682 A 25.178 25.178 0 0 1 1013.333 1.953 L 1028.469 1.953 A 24.602 24.602 0 0 1 1035.232 2.8 Q 1042.816 4.973 1044.831 12.714 A 25.178 25.178 0 0 1 1045.559 19.043 L 1045.559 73.242 L 1036.282 77.637 L 1035.794 77.637 L 1035.794 19.043 A 13.694 13.694 0 0 0 1035.468 15.91 Q 1034.465 11.659 1030.375 10.905 A 10.521 10.521 0 0 0 1028.469 10.742 L 1013.333 10.742 A 9.234 9.234 0 0 0 1010.302 11.198 Q 1006.008 12.688 1006.008 19.043 L 1006.008 73.242 L 996.731 77.637 Z" className="thePath" vectorEffect="non-scaling-stroke" />
        </g>
      </svg>
    </div>
  )
}

export default MoabAnimation