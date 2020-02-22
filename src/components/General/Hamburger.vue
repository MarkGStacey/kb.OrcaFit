<template>
  <div class="Hamburger" :class="{ 'Hamburger--open': open }" @click="$emit('click', $event)">
    <div class="Hamburger__wrapper">
      <span class="Hamburger__line"></span>
      <span class="Hamburger__line"></span>
      <span class="Hamburger__line"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuHamburger',

  props: {
    open: Boolean
  }
}
</script>

<style>
.Hamburger {
	width: 24px;
	height: 24px;
	cursor: pointer;
}

.Hamburger__wrapper {
	width: 30px;
	position: relative;
	left: 50%;
	top: 12px;
	margin-left: -15px;
	transform: rotate(90deg);
	transition: 0.5s ease-in-out;
}

.Hamburger__line {
	display: block;
	position: absolute;
	height: 4px;
	width: 100%;
	background-color: green;
	border-radius: 50px;
	opacity: 1;
	left: 0;
	transform: rotate(0deg);
	transition: 0.25s ease-in-out;
}

.Hamburger__line:nth-child(1) {
	top: 0px;
}

.Hamburger__line:nth-child(2) {
	top: 8px;
	width: 60%;
}

.Hamburger__line:nth-child(3) {
	top: 16px;
	width: 80%;
}

.Hamburger--open .Hamburger__line:nth-child(1) {
	top: 8px;
	transform: rotate(135deg);
}

.Hamburger--open .Hamburger__line:nth-child(2) {
	opacity: 0;
	position: fixed;
	left: 700px;
	width: 100%;
}

.Hamburger--open .Hamburger__line:nth-child(3) {
	top: 8px;
	transform: rotate(-135deg);
	width: 100%;
}
</style>