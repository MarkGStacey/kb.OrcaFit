<template>
  <footer class="footer">
    <div style="width:100%" class="footer-box1">
      <svg class="footer-box__shape" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1366 161">
        <path d="M-11.925-4809v-154.746c40.454,19.75,273.683,130.936,420.544,142.612,161.25,12.821,339.978-42.709,521.543-86.3,169.82-40.769,395.43,29.2,423.912,38.429v60Z" transform="translate(11.926 4970)"/>
      </svg>
    </div>
    <div style="width:100%" class="footer-box2">
      <svg class="footer-box__shape" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1366 246">
        <path d="M-1505.5-4725.5v-238.1c8.149-3.133,18.138-5.059,29.672-5.9h30.954c201.21,11.667,696.6,224.535,855.572,236.458,205.129,15.385,287.179-164.1,432.047-175.625a42.381,42.381,0,0,1,16.756,1.857V-4725.5Z" transform="translate(1506 4971)"/>
      </svg>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',

    components: {
    },

    computed: {
    }
  }
</script>

<style >
.footer {
  position: relative;
  overflow: hidden;
}
.footer-box__shape {
  position: absolute;
  bottom: 0;
  left: 0;
}
.footer-box1 {
  height: 175px;
  top: 4px;
}
.footer-box1 .footer-box__shape {
  fill: rgb(53, 73, 94);
}
.footer-box2 {
  height: 250px;
  background-color: rgb(53, 73, 94);
  bottom: -2px;
}
.footer-box2 .footer-box__shape {
  fill: rgb(38, 54, 71);
}
.footer-box3 {
  position: relative;
  background-color: rgb(38, 54, 71);
  padding: 50px 0;
}
.footer-box1,
.footer-box2 {
  position: relative;
}
.footer-copy {
  color: #fff;
  font-size: 11px;
  text-align: right;
  padding-top: 50px;
  padding-right: 4vw !important;
}
.footer-copy a:hover {
  color: #3eaf7c;
}
@media (max-width: '400px') {
  .footer-box2 {
    height: 110px;
  }
  .footer-card {
    order: 2;
    margin: 40px 0;
  }
  .footer-copy {
    order: 3;
    text-align: center;
    padding-top: 10px;
  }
  .footer-nav {
    order: 1;
  }
  .footer-nav__box--1.column {
    text-align: left;
    padding-left: 5vw !important;
  }
  .footer-nav__box--2.column {
    padding-right: 5vw !important;
  }
  .footer-nav1__item a {
    float: left;
  }
  .footer-social__list {
    position: relative;
    left: 50%;
    margin-top: 5%;
    transform: translateX(-50%);
  }
  .footer-newsletter {
    display: none;
  }
}
@media (max-width: 800px) {
  .footer-newsletter {
    width: 50%;
    margin-right: 8%;
  }
}
@media (min-width: 1000px) {
  .footer-box1 {
    height: 249px;
  }
}


</style>