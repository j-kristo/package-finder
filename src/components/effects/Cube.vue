<template>
  <div class="wrapper">
    <div class="welcome-message">
      <h3 class="demo"></h3>
    </div>
    <div class="welcome">
      <h1>{{ this.welcomeMessage }}</h1>
    </div>
    <div id="cube">
      <div class="top"></div>
      <div class="left"></div>
      <div class="right"></div>
      <div class="front"></div>
      <div class="back"></div>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cube",

  data() {
    return {
      welcomeMessage: 'Find your package!'
    };
  },

  mounted() {
    let explanation = () => (document.querySelector(".demo").innerHTML = " ↑ click the input to start searching ↑");
    let killExplanation = () =>
        setTimeout(() => {
          document.querySelector(".demo").innerHTML = "";
        }, 2000);

    document.querySelector(".welcome").addEventListener("click", () => {
      explanation();
      killExplanation();
    });
  }
}
</script>

<style lang="scss" scoped>

.welcome-message {
  color: #fff;

  position: absolute;
  top: 25%;
  left: 50%;
  z-index: 150;
  transform: translate(-50%, -50%);
}

.welcome {
  color: #fff;

  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 150;
  cursor: pointer;
  transform: translate(-50%, -50%);
  text-shadow: 9px 11px 6px #0000007d;
  transition: .3s ease-out;

  &:hover {
    color: #ff1e5c;
    text-shadow: 4px 4px 6px #000000b0;
  }
}

%quadrant {
  width: 50%;
  height: 50%;
  margin: 3rem 0;
  padding: 1.5rem 10rem 5rem;
  float: left;
  position: relative;
  z-index: 50;
}

$positions: (
    top: left right,
    bottom: left right
);

@each $y, $x in $positions {
  @each $pos in $x {
    .quadrant-#{$y}-#{$pos} {
      @extend %quadrant;
      margin-top: 0;
      margin-bottom: 0;
      @if $y == top {
        padding-top: 1.5rem;
        padding-bottom: 5rem;
      } @else if $y == bottom {
        padding-top: 5rem;
        padding-bottom: 1.5rem;
      }
      @if $pos == right {
        text-align: right;
      }
    }
  }
}

$cube-transforms: (
    top:
    (
        transform: rotateX(-90deg) translateY(-50px),
        transform-origin: top center
    ),
    left:
    (
        transform: rotateY(270deg) translateX(-50px),
        transform-origin: center left
    ),
    right:
    (
        transform: rotateY(-270deg) translateX(50px),
        transform-origin: top right
    ),
    front: (transform: translateZ(50px)),
    back: (transform: translateZ(-50px) rotateY(180deg)),
    bottom:
    (
        transform: rotateX(90deg) translateY(50px),
        transform-origin: bottom center
    )
);

#cube {
  width: 100px;
  height: 100px;
  position: absolute;
  z-index: 100;
  top: 50%;
  transform: translate(-50%, -50%) rotate3d(1, -1, 0, 60deg);
  left: 50%;
  transform-style: preserve-3d;
  animation: cube-rotate 20000ms infinite alternate;

  > div {
    position: absolute;
    width: 100px;
    height: 100px;
    background: #0e4f8a;
    border: 1px solid #fb5d91;
    opacity: 0.85;
    box-shadow: 0px 3px 16px rgba(210, 33, 42, 0.4);
  }

  @each $selector, $transforms in $cube-transforms {
    .#{$selector} {
      @each $prop, $transform in $transforms {
        #{$prop}: #{$transform};
      }
    }
  }
}

@keyframes cube-rotate {
  0% {
    transform: translate(-50%, -50%) rotate3d(1, -1, 0, 60deg);
  }

  25% {
    transform: translate(-50%, -50%) rotate3d(1, -1, 0, -120deg);
  }

  50% {
    transform: translate(-50%, -50%) rotate3d(1, -2, 1, 200deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate3d(1, -1, 0, 420deg);
  }
}

</style>
