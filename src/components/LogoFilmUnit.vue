<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 810.96 435.62">
    <defs>
      <clipPath id="clip-path">
        <ellipse
          cx="407.34"
          cy="172.42"
          rx="165.24"
          ry="398.3"
          transform="matrix(0.02, -1, 1, 0.02, 227.24, 576.43)"
          style="fill:none;"/>
      </clipPath>
    </defs>
    <g style="isolation:isolate;">
      <path
        :style="{ fill: mainColor }"
        d="M7.33,255,9,164.7A74.36,74.36,0,0,0,16,196.85C56.63,287.18,264.83,349.48,481,336c190.21-11.87,323.2-78.47,324.67-155.85l-1.71,90.29c-1.47,77.38-134.46,144-324.67,155.85-216.15,13.49-424.35-48.81-465-139.14A74.32,74.32,0,0,1,7.33,255Z"/>
      <ellipse
        :style="{ fill: mainColor }"
        cx="405.63"
        cy="262.72"
        rx="165.24"
        ry="398.3"
        transform="translate(135.29 663.3) rotate(-88.92)"/>
      <ellipse
        :style="{ fill: mainColor }"
        cx="407.34"
        cy="172.42"
        rx="165.24"
        ry="398.3"
        transform="matrix(0.02, -1, 1, 0.02, 227.24, 576.43)"/>
      <g style="isolation:isolate;">
        <g style="clip-path:url(#clip-path);">
          <path
            :style="{ fill: subColor }"
            d="M355.92,176c5.27,11.71,32.25,19.79,60.26,18s46.45-12.66,41.18-24.37-32.25-19.78-60.27-18S350.65,164.32,355.92,176"/>
          <path
            :style="{ fill: subColor }"
            d="M87.84,192.36c10.68,23.71,65.31,40,122,36.51s94.05-25.62,83.38-49.33-65.3-40-122-36.51-94,25.62-83.38,49.33"/>
          <path
            :style="{ fill: subColor }"
            d="M268.44,74.46c9.58,21.29,58.64,36,109.56,32.79s84.45-23,74.87-44.29S394.23,27,343.3,30.17s-84.44,23-74.86,44.29"/>
          <path
            :style="{ fill: subColor }"
            d="M349.74,279c10.67,23.7,65.3,40.05,122,36.51s94.05-25.63,83.38-49.33-65.3-40.06-122-36.52S339.07,255.31,349.74,279"/>
          <path
            :style="{ fill: subColor }"
            d="M546.36,163.75c10.08,22.38,61.66,37.82,115.22,34.48s88.81-24.2,78.73-46.59-61.66-37.81-115.23-34.47-88.8,24.19-78.72,46.58"/>
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  nme: 'LogoFilmUnit',
  props: {
    mainColor: {
      type: String,
      default: '#000'
    },
    sideColor: {
      type: String,
      default: '#000'
    },
    subColor: {
      type: String,
      default: '#fff'
    }
  }
}
</script>
