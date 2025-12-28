<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const isSticky = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleScroll = () => {
  isSticky.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header id="header" :class="{ scroll: isSticky }">
    <div class="header_inner">
      <a class="head_logo" href="#">
        <img class="retina" src="@/assets/images/logo.png" alt="Logo">
      </a>
      <a 
        id="btn_menu" 
        href="javascript:;" 
        :class="{ active: isMenuOpen }"
        @click="toggleMenu"
      >
        <span></span>
      </a>
      <nav class="head_nav" :style="{ display: isMenuOpen ? 'block' : '' }">
        <ul>
          <li><a class="current" href="#about" @click="isMenuOpen = false">關於我</a></li>
          <li><a href="#works" @click="isMenuOpen = false">作品</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as *;

#header {
  position: sticky; // Changed for better mobile support and flow
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  padding: 0.8em 1em;
  box-sizing: border-box;
  background-color: $primary; // Restored original default color
  transition: all 0.3s ease;

  &.scroll {
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  }

  .header_inner {
    max-width: 1280px;
    margin: 0 auto;
    
    // Clearfix
    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }

  .head_logo {
    display: block;
    height: 40px;
    float: left;
    img {
      height: 100%;
    }
  }
}

#btn_menu {
  position: relative;
  display: block;
  width: 40px;
  height: 40px;
  float: right;
  cursor: pointer;
  z-index: 100; // Ensure on top

  &::after, &::before, span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: #fff;
    opacity: 1;
    left: 0;
    transition: all 0.2s ease-in-out;
  }

  &::before {
    content: "";
    top: 5px;
    transform-origin: left center;
  }
  
  span {
    top: 50%;
    margin-top: -2px;
    transform-origin: left center;
  }
  
  &::after {
    content: "";
    bottom: 5px;
    transform-origin: left center;
  }

  &.active {
    &::before {
      transform: rotate(45deg);
      top: 4px;
      left: 6px;
    }
    span {
      width: 0;
      opacity: 0;
    }
    &::after {
      transform: rotate(-45deg);
      bottom: 4px;
      left: 6px;
    }
  }
}

.head_nav {
  position: absolute;
  top: 100%;
  left: 0;
  display: none; // Hidded by default on mobile
  width: 100%;
  padding: 0.8em 1em;
  box-sizing: border-box;
  background-color: $secondary;

  ul {
    list-style: none;
    width: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 0;

    li {
      display: inline-block;
      margin: 0 0.5em;
      font-size: 1rem;
      text-align: center;

      a {
        position: relative;
        display: block;
        padding: 0 0.5em;
        color: #fff;
        font-size: 1.125em;
        font-weight: 500;
        cursor: pointer;

        &::after {
          content: "";
          position: absolute;
          bottom: -0.8rem;
          left: 0;
          display: block;
          width: 0;
          height: 10px;
          background-color: $primary;
          transition: width 0.2s ease-in-out;
        }

        &.current::after, &:hover::after {
          width: 100%;
        }
      }
    }
  }
}

// Tablet and Desktop
@media (min-width: 768px) {
  #btn_menu {
     display: none; // Hide burger menu
  }

  #header {
    background-color: $primary; // Always primary color on desktop or handle sticky differently
    
    .head_logo {
      height: 60px;
    }
  }

  .head_nav {
    display: block !important; // Always show on desktop
    position: relative;
    top: auto;
    left: auto;
    width: auto;
    padding: 0;
    float: right;
    margin-right: 2em;
    background-color: transparent;
    line-height: 60px;

    ul {
      height: 60px;
      
      li a {
        font-size: 1.25em;
        
        &::after {
          background-color: $secondary; 
        }
      }
    }
  }
}
</style>
