<template>
	<main class="main1">
		<svg display="none">
			<symbol id="dark" viewBox="0 0 24 24">
				<g stroke="currentColor" stroke-width="2" stroke-linecap="round">
					<line x1="12" y1="17" x2="12" y2="20" transform="rotate(0,12,12)" />
					<line x1="12" y1="17" x2="12" y2="20" transform="rotate(45,12,12)" />
					<line x1="12" y1="17" x2="12" y2="20" transform="rotate(90,12,12)" />
					<line x1="12" y1="17" x2="12" y2="20" transform="rotate(135,12,12)" />
					<line x1="12" y1="17" x2="12" y2="20" transform="rotate(180,12,12)" />
					<line x1="12" y1="17" x2="12" y2="20" transform="rotate(225,12,12)" />
					<line x1="12" y1="17" x2="12" y2="20" transform="rotate(270,12,12)" />
					<line x1="12" y1="17" x2="12" y2="20" transform="rotate(315,12,12)" />
				</g>
				<circle fill="currentColor" cx="12" cy="12" r="5" />
			</symbol>
			<symbol id="light" viewBox="0 0 24 24">
				<path fill="currentColor" d="M15.1,14.9c-3-0.5-5.5-3-6-6C8.8,7.1,9.1,5.4,9.9,4c0.4-0.8-0.4-1.7-1.2-1.4C4.6,4,1.8,7.9,2,12.5c0.2,5.1,4.4,9.3,9.5,9.5c4.5,0.2,8.5-2.6,9.9-6.6c0.3-0.8-0.6-1.7-1.4-1.2C18.6,14.9,16.9,15.2,15.1,14.9z" />
			</symbol>
		</svg>
		<label class="switch">
			<input class="switch__input" type="checkbox" @input="changeTheme" role="switch" name="dark" 
			:checked="currentTheme=='LightThemeConfig'" />
			<svg class="switch__icon" width="24px" height="24px" aria-hidden="true">
				<use href="#light" />
			</svg>
			<svg class="switch__icon" width="24px" height="24px" aria-hidden="true">
				<use href="#dark" />
			</svg>
			<span class="switch__inner"></span>
			<span class="switch__inner-icons">
				<svg class="switch__icon" width="24px" height="24px" aria-hidden="true">
					<use href="#light" />
				</svg>
				<svg class="switch__icon" width="24px" height="24px" aria-hidden="true">
					<use href="#dark" />
				</svg>
			</span>
			<span class="switch__sr">Dark Mode</span>
		</label>
	</main>
</template>

<script setup>
  import { useTheme } from 'vuetify';

  const theme = useTheme();
  const currentTheme = ref(theme.global.name);

  const changeTheme =(e) =>{
    theme.global.name.value = e.target.checked ? 'LightThemeConfig' : 'DarkThemeConfig';
    document.querySelectorAll(".switch__input").forEach((el)=>{
      el.checked = e.target.checked;
    });
    currentTheme.value = theme.global.name.value;

  }
</script>
<style>
* {
	border: 0;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	
}
.main1 {
	--hue: 223;
	--primary: hsl(var(--hue),90%,50%);
	--trans-dur: 0.6s;
	--trans-timing: cubic-bezier(0.65,0,0.35,1);
	font-size: calc(10px + (120 - 50) * (45vw - 150px) / (2560 - 320));
	overflow: hidden;
	border-radius: 83px !important;
	background: inherit;
}

.switch,
.switch__input {
	display: block;
	-webkit-tap-highlight-color: transparent;
}
.switch {
	margin: auto;
	position: relative;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
	width: fit-content;
	cursor: pointer;
}
.switch__icon {
	/* color: hsla(219, 100%, 58%, 1); */
	color: hsla(var(--hue),10%,80%);
	pointer-events: none;
	position: absolute;
	top: 0.375em;
	left: 0.375em;
	width: 0.75em;
	height: 0.75em;
	
	
	transition:
		color var(--trans-dur),
		transform var(--trans-dur) var(--trans-timing);
}
.switch__icon:nth-of-type(2) {
	right: 0.205em;
	left: auto;
}
.switch__inner,
.switch__inner-icons {
	border-radius: 0.5em;
	display: block;
	overflow: hidden;
	position: absolute;
	top: 0.2em;
	left: 0.18em;
	width: 2.25em;
	height: 1em;
}
.switch__inner:before,
.switch__inner-icons {
	transition: transform var(--trans-dur) var(--trans-timing);
	transform: translateX(-1.25em);
}
.switch__inner:before {
	background-color: var(--primary);
	border-radius: inherit;
	content: "";
	display: block;
	width: 100%;
	height: 100%;
}
.switch__inner-icons {
	pointer-events: none;
}
.switch__inner-icons .switch__icon {
	color: hsl(0,0%,100%);
	top: 0.125em;
	left: 0.125em;
	transform: translateX(1.25em);
}
.switch__inner-icons .switch__icon:nth-child(2) {
	right: 0.125em;
	left: auto;
}
.switch__input {
	background-color: hsl(221, 48%, 12%);
	border-radius: 83.04px;
	box-shadow:
		0 0 0 0.0625em hsla(var(--hue),90%,50%,0),
		0 0.125em 0.5em hsla(var(--hue),10%,10%,0.1);
	outline: transparent;
	width: 73.07px;
	height: 40px;
	padding: 3.32px;
	-webkit-appearance: none;
	appearance: none;
	transition:
		background-color var(--trans-dur),
		box-shadow var(--trans-dur);
}
.switch__input:checked {
	background-color: hsl(210, 40%, 98%)!important;
}
.switch__input:checked ~ .switch__icon {
	color: hsla(var(--hue),10%,40%);
}
.switch__input:checked ~ .switch__inner:before,
.switch__input:checked ~ .switch__inner-icons {
	transform: translateX(1.25em);
}
.switch__input:not(:checked) ~ .switch__icon:first-of-type,
.switch__input:checked ~ .switch__icon:nth-of-type(2) {
	transform: rotate(360deg);
}
.switch__input:checked ~ .switch__inner-icons .switch__icon:first-of-type {
	transform: translateX(-1.25em) rotate(-360deg);
}
.switch__input:checked ~ .switch__inner-icons .switch__icon:nth-of-type(2) {
	transform: translateX(-1.25em) rotate(360deg);
}
.switch__input:focus-visible {
	box-shadow:
		0 0 0 0.0625em hsla(var(--hue),90%,50%,1),
		0 0.125em 0.5em hsla(var(--hue),10%,10%,0.1);
}
.switch__sr {
	overflow: hidden;
	position: absolute;
	width: 1px;
	height: 1px;
}

@media  screen and (max-width: 1480px) {
	.switch__inner,
.switch__inner-icons {
	top: 0.25em;
	left: 0.25em;
}
}

@media  screen and (max-width: 1430px) {
	.switch__inner,
.switch__inner-icons {
	top: 0.30em;
	left: 0.35em;
	width: 2.25em;
	height: 1em;
}
}
</style>