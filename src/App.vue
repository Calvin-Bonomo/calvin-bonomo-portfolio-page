<template>
  <v-app>
    <v-card>
      <!-- Main toolbar for splash page -->
      <v-app-bar dark flat tile class="primary" fixed>
        <v-app-bar-title>A Placeholder Title</v-app-bar-title>
        <!-- Make into a link to the homepage -->
        <v-spacer></v-spacer>
        <v-toolbar-items v-for="item in menuItems" :key="item.title">
          <!-- Iterate through items in the toolbar -->
          <v-divider vertical v-if="item.title != 'Featured Projects'">
          </v-divider>
          <!-- Add a divider in front of every button except the first one -->
          <v-hover v-slot="{ hover }">
            <v-btn tile text @click="$vuetify.goTo(item.goto)">
              <v-icon tile class="accent--text">{{ item.icon }}</v-icon>
              <v-expand-x-transition>
                <v-list-item-title
                  v-if="hover"
                  class="transition-fast-in-fast-out secondary--text"
                  >{{ item.title }}</v-list-item-title
                >
                <!-- Expand the button if the user is hovering over it -->
              </v-expand-x-transition>
            </v-btn>
          </v-hover>
        </v-toolbar-items>
      </v-app-bar>
    </v-card>
    <v-btn
      icon
      large
      v-scroll="onTop"
      v-show="scrollToTopVis"
      class="goToTopButton float-right"
      @click="$vuetify.goTo('#top')"
    >
      <v-icon>mdi-chevron-up-circle-outline</v-icon>
    </v-btn>
    <!-- End of toolbar -->
    <span class="bg">
      <v-main id="main">
        <div id="top">
          <!-- Main page container -->
          <v-row align="center" justify="center" class="titleCard">
            <!-- Landing page -->
            <v-col class="text-center" cols="12">
              <h1 class="secondary--text titleText">Calvin Bonomo</h1>
            </v-col>
          </v-row>
          <!-- End of landing page -->
          <v-layout class="blurEffect" justify="left" id="projects">
            <!-- Featured projects carousel -->
            <div>
              <div class="featuresCarousel">
                <v-carousel hide-delimiters>
                  <v-carousel-item
                    v-for="project in featuredProjects"
                    :key="project.title"
                    :src="project.image"
                  >
                    <div class="carouselInfo" justify="center">
                      <div class="carouselProjectTitle">
                        {{ project.title }}
                      </div>
                      <div class="carouselProjectDesc">
                        {{ project.description }}
                      </div>
                    </div>
                  </v-carousel-item>
                </v-carousel>
              </div>
              <div class="aboutSection" id="about">
                <p class="aboutText accent--text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </v-layout>
          <!-- End of featured projects carousel -->
          <div>
            <v-card class="contactCard" id="contact">
              <v-row justify="center">
                <v-col align="right"
                  ><v-btn icon href="https://github.com/Calvin-Bonomo"
                    ><v-icon x-large>mdi-github</v-icon></v-btn
                  ></v-col
                >
                <v-col align="left"
                  ><v-btn icon href="https://www.linkedin.com/in/calvin-bonomo/"
                    ><v-icon x-large>mdi-linkedin</v-icon></v-btn
                  ></v-col
                >
              </v-row>
              <h5 class="text-center pt-3">cal.bonomo@gmail.com</h5>
            </v-card>
          </div>
        </div>
        <!-- End of main page container -->
      </v-main>
    </span>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      scrollToTopVis: false,
      menuItems: [
        {
          icon: "mdi-star-four-points-outline",
          title: "Featured Projects",
          goto: "#projects",
        },
        { icon: "mdi-information-outline", title: "About", goto: "#about" },
        { icon: "mdi-at", title: "Contact", goto: "#contact" },
      ],
      featuredProjects: [
        {
          image:
            "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
          title: "Test",
          description: "This is a test.",
        },
      ],
    };
  },
  methods: {
    onTop() {
      if (typeof window === "undefined") {
        return;
      }
      const top = window.pageYOffset;
      this.scrollToTopVis = top > 100;
    },
  },
};
</script>

<style scoped>
.bg {
  background-image: url("https://www.teahub.io/photos/full/288-2886307_sunset-gif.gif");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  position: scroll;
}

.goToTopButton {
  margin-top: 8vh;
  position: fixed;
  z-index: 950;
  right: 1vw;
}

.titleCard {
  height: 100vh;
}

.titleText {
  font-size: 5vh;
}

.blurEffect {
  backdrop-filter: blur(2px);
  z-index: 1000;
}

.featuresCarousel {
  margin-top: 30vh;
  margin-bottom: 30vh;
  margin-right: 15vw;
  margin-left: 15vw;
  height: 40vh;
}

.carouselInfo {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  bottom: 0;
  padding: 15px;
}

.carouselProjectTitle {
  font-size: 2vh;
}

.carouselProjectDesc {
  font-size: 90%;
}

.aboutSection {
  margin-right: 30vw;
  margin-left: 30vw;
  margin-bottom: 10vh;
  margin-top: 20vh;
  line-height: 30px;
  z-index: 900;
}

.aboutText {
  border-style: solid;
  padding: 5px;
  text-align: center;
  z-index: inherit;
  opacity: 1;
}

.contactCard {
  height: 10vh;
}
</style>
