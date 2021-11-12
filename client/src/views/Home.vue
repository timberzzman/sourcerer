<template>
  <div>
    <div class="bg-gray-100 w-full py-3">
      <Header class="mx-auto" style="max-width: 768px" />
    </div>
    <div class="mx-auto hidden" style="max-width: 768px">
      <h1>Overview</h1>
      <OverviewGraph />
    </div>
    <div class="mx-auto hidden" style="max-width: 768px">
      <h1>Languages</h1>
      <LanguagesList />
    </div>
    <div class="mx-auto hidden" style="max-width: 768px">
      <h1>Technologies</h1>
      <TechnologiesList />
    </div>
    <div class="mx-auto hidden" style="max-width: 768px">
      <h1>Fun facts</h1>
    </div>
    <div class="mx-auto hidden" style="max-width: 768px">
      <h1>Repositories</h1>
      <RepositoriesList />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// @ is an alias to /src
import Header from '@/components/dashboard/Header.vue';
import RepositoriesList from '@/components/dashboard/RepositoriesList.vue';
import TechnologiesList from '@/components/dashboard/TechnologiesList.vue';
import LanguagesList from '@/components/dashboard/LanguagesList.vue';
import OverviewGraph from '@/components/dashboard/OverviewGraph.vue';

export default {
  name: 'Home',
  components: {
    OverviewGraph,
    LanguagesList,
    TechnologiesList,
    RepositoriesList,
    Header,
  },
  computed: {
    ...mapGetters(['UserData']),
  },
  created() {
    this.$store.dispatch('getUserData');
  },
  data() {
    return {
      user: {},
      username: '',
    };
  },
  methods: {
  },
};
</script>
