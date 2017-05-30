<template>

    <div>

        <md-toolbar class="md-dense">
      <h1 class="md-title" style="flex: 1">Homestead</h1>
     <md-switch md-theme="green" v-model="checked5" class="md-primary"></md-switch>
  </md-toolbar>
  <md-tabs style="flex: 6">
    <md-tab md-label="Websites">

    <md-input-container>
    <md-icon>search</md-icon>
    <label>Search</label>
    <md-input type="text"></md-input>
  </md-input-container>

     <md-list class="custom-list md-double-line">

        <md-list-item>
          <div class="md-list-text-container">
            <span><a href="http://example.com">http://example.com</a></span>
            <span>~/workspace/laravel-latest/public/</span>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-warn">delete_forever</md-icon>
          </md-button>
        </md-list-item>
       <md-list-item>
          <div class="md-list-text-container">
            <span><a href="http://example.com">http://example.com</a></span>
            <span>~/workspace/laravel-latest/public/</span>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-warn">delete_forever</md-icon>
          </md-button>
        </md-list-item>
     </md-list>
      </md-tab>

      <md-tab md-label="Console">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
      </md-tab>
  </md-tabs>

    </div>



</template>

<script>
  import CurrentPage from './LandingPageView/CurrentPage';
  import Links from './LandingPageView/Links';
  import Versions from './LandingPageView/Versions';
  import OnOffSwitch from './OnOffSwitch/OnOffSwitch.vue';
  export default {
    components: {
      CurrentPage,
      Links,
      Versions,
      OnOffSwitch,
    },
    name: 'landing-page',
  };
</script>

<style scoped>

.complete-example {

  display: flex;
  flex-flow: column;
  position: relative;
  overflow: hidden;
  z-index: 1;

  .md-fab {
    margin: 0;
    position: absolute;
    bottom: -20px;
    left: 16px;
  }

  .md-title {
    color: #fff;
  }

  .md-list {
    overflow: auto;
  }

  .md-list-action .md-icon {
    color: rgba(#000, .26);
  }

  .md-avatar-icon .md-icon {
    color: #fff !important;
  }

  .md-sidenav .md-list-text-container > :nth-child(2) {
    color: rgba(#fff, .54);
  }

  .md-account-header {
    .md-list-item:hover .md-button:hover {
      background-color: inherit;
    }

    .md-avatar-list .md-list-item-container:hover {
      background: none !important;
    }
  }
}

</style>
