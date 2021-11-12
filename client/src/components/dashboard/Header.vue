<template>
<div class="">
  <div class="mb-5">
    <p>Share your profile on:</p>
    <div>
      <a class="pr-2">Linkedin</a>
      <a class="pr-2">Twitter</a>
      <a class="pr-2">Facebook</a>
      <a>Get HTML</a>
    </div>
  </div>
  <div class="grid grid-cols-2">
    <div>
      <h1>{{getUserData.name}}</h1>
    </div>
    <div>
      <p>{{getUserData.bio}}</p>
      <p>{{getUserData.location}}</p>
    </div>
  </div>
  <p>{{getUserData.login}}</p>
  <div class="grid grid-cols-7 flex items-center mt-10">
    <div>
      <img class="rounded-full" :src="getUserData.avatarUrl" />
    </div>
    <div class="bg-gray-200 mx-1 p-1">
      <p>Commits</p>
      <p>{{getUserData.contributionsCollection.totalCommitContributions}}</p>
    </div>
    <div class="bg-gray-200 mx-1 p-1">
      <p>Repos</p>
      <p>{{getUserData.repositories.totalCount}}</p>
    </div>
    <div class="bg-gray-200 mx-1 p-1">
      <p>Stars</p>
      <p>{{getUserData.starredRepositories.totalCount}}</p>
    </div>
    <div class="bg-gray-200 mx-1 p-1">
      <p>Followers</p>
      <p>{{getUserData.followers.totalCount}}</p>
    </div>
    <div class="bg-gray-200 mx-1 p-1">
      <p>Following</p>
      <p>{{getUserData.following.totalCount}}</p>
    </div>
    <div class="bg-gray-200 mx-1 p-1">
      <p>Refresh</p>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapGetters(['getUserData']),
  },
};
</script>

<style scoped>

</style>
