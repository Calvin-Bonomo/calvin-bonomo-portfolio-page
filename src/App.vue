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
          <v-divider
            vertical
            v-if="item.title != 'Featured Projects'"
          ></v-divider>
          <!-- Add a divider in front of every button except the first one -->
          <v-hover v-slot="{ hover }">
            <v-btn tile text>
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
    <!-- End of toolbar -->
    <span class="bg">
      <v-main>
        <v-div class="mainContainer">
          <!-- Main page container -->
          <v-row align="center" justify="center" class="titleCard">
            <!-- Landing page -->
            <v-col class="text-center" cols="12">
              <h1 class="secondary--text titleText">Calvin Bonomo</h1>
            </v-col>
          </v-row>
          <!-- End of landing page -->
          <v-layout class="blurEffect" justify="left"> <!-- Featured projects carousel -->
            <v-carousel class="featuresCarousel">
              <v-carousel-item
              v-for="project in featuredProjects"
              :key="project.id"
              :src="project.image">
              <div class="carouselInfo" justify="center">
                <div>{{ project.title }}</div>
                <div>{{ project.description }}</div>
              </div>
              </v-carousel-item>
            </v-carousel>
          </v-layout>
        </v-div>
        <!-- End of main page container -->
      </v-main>
    </span>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { icon: "mdi-star-four-points-outline", title: "Featured Projects", goto: "" },
        { icon: "mdi-information-outline", title: "About", goto: "" },
        { icon: "mdi-at", title: "Contact", goto: "" },
      ],
      featuredProjects: [
        { image: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png", id: "sdadw", title: "Test", description: "This is a test." }
      ]
    };
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

.mainContainer {
  height: 100vh;
}

.titleCard {
  height: 100vh;
}

.titleText {
  font-size: 5vh;
}

.blurEffect {
  color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2px);
  height:100vh;
}

.featuresCarousel {
  margin-top: 30vh;
  margin-bottom: 30vh;
  height: 40vh;
}

.carouselInfo {
      position: absolute;
      bottom: 10%;
      background-color: rgba(0, 0, 0, 0.3);
      padding: 15px;
}
</style>
