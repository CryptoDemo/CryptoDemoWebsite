<template>
  <article class="card">
  <h3>Border Animation</h3>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nostrum quam
    mollitia sit aliquam omnis nisi neque nulla, ipsa obcaecati eveniet
    incidunt doloribus quaerat at totam nemo exercitationem, officiis
    quisquam! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Necessitatibus, quisquam perferendis
  </p>
  <span class="top-grad border-span"></span>
  <span class="right border-span"></span>
  <span class="bottom"></span>
  <span class="left"></span>
</article>
</template>


<style scoped>
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #111111;
} */

.card{
  position: relative;
  width: 300px;
  height: 300px;
  color: #fff;
  background: transparent;
  overflow: hidden;
  border: 1px solid rgba(66, 56, 56, 0.5);
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1em;
}

p {
  font-size: 0.95rem;
  text-align: center;
}

.border-span {
  position: absolute;
  border-radius: 100vmax;
}

.top-grad{
  top: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 50%,
    rgba(40, 115, 255, 1),
    rgba(40, 115, 255, 0)
  );
}

.bottom{
  right: 0;
  bottom: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(40, 115, 255, 1),
    rgba(40, 115, 255, 0),
    transparent 50%
  );
}

.right{
  top: 0;
  right: 0;
  width: 2px;
  height: 0;
  background: linear-gradient(
    180deg,
    transparent 30%,
    rgba(40, 115, 255, 1),
    rgba(40, 115, 255, 0)
  );
}

.left{
  left: 0;
  bottom: 0;
  width: 2px;
  height: 0;
  background: linear-gradient(
    180deg,
    rgba(40, 115, 255, 1),
    rgba(40, 115, 255, 0),
    transparent 70%
  );
}

.top{
  animation: animateTop 5s ease-in-out infinite;
}

.bottom{
  animation: animateBottom 5s ease-in-out infinite;
}

.right{
  animation: animateRight 5s ease-in-out infinite;
}

.left {
  animation: animateLeft 5s ease-in-out infinite;
}

@keyframes animateTop {
  25% {
    width: 100%;
    opacity: 1;
  }

  30%,
  100% {
    opacity: 0;
  }
}

@keyframes animateBottom {
  0%,
  50% {
    opacity: 0;
    width: 0;
  }

  75% {
    opacity: 1;
    width: 100%;
  }

  76%,
  100% {
    opacity: 0;
  }
}

@keyframes animateRight {
  0%,
  25% {
    opacity: 0;
    height: 0;
  }

  50% {
    opacity: 1;
    height: 100%;
  }

  55%,
  100% {
    height: 100%;
    opacity: 0;
  }
}

@keyframes animateLeft {
  0%,
  75% {
    opacity: 0;
    bottom: 0;
    height: 0;
  }

  100% {
    opacity: 1;
    height: 100%;
  }
}

</style>