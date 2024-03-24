<template>
  <div class="demo">
	<div class="menu-icon">
		<input class="menu-icon__cheeckbox" type="checkbox" />
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
/* .demo class styles */
.demo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%);
}

/* Define the variable for menu bar background color */
:root {
  --bar-bg: #212529;
}

/* .menu-icon class styles */
.menu-icon {
  position: relative;
  width: 50px;
  height: 50px;
  cursor: pointer;
}

/* Hide the checkbox element visually */
.menu-icon__cheeckbox {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  z-index: 2;
  -webkit-touch-callout: none; /* Prevent iOS callout on touch */
  position: absolute;
  opacity: 0;
}

/* Style the menu icon bars */
.menu-icon div {
  margin: auto;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 22px;
  height: 12px;
}

.menu-icon span {
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--bar-bg); /* Use the defined variable */
  border-radius: 1px;
  transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);
}

/* Style the top and bottom bars of the icon */
.menu-icon span:first-of-type {
  top: 0;
}

.menu-icon span:last-of-type {
  bottom: 0;
}

/* Animate the bars when the menu is active or checkbox is checked */
.menu-icon.active,
.menu-icon__cheeckbox:checked + .menu-icon div {
  span {
    &:first-of-type {
      transform: rotate(45deg);
      top: 5px;
    }
    &:last-of-type {
      transform: rotate(-45deg);
      bottom: 5px;
    }
  }
}



</style>