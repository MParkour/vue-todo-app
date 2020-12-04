<template>
  <div>
    <router-link
      class="btn btn-success text-white mb-4"
      :to="{ path: '/users' }"
    >
      <i class="fa fa-arrow-left"></i>
      back to user list
    </router-link>
    <div v-if="userInfo">
      <b-card
        :title="userInfo.first_name + ' ' + userInfo.last_name"
        :img-src="userInfo.avatar"
        :img-alt="userInfo.first_name + ' ' + userInfo.last_name"
        img-top
        style="max-width: 15rem"
        class="mb-2"
      >
        <b-card-text>
          <p class="m-0">email</p>
          <p class="badge badge-info fs-14 fw-400 p-2">{{ userInfo.email }}</p>
        </b-card-text>
      </b-card>
    </div>
    <div v-else>loading...</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "User",
  data() {
    return {
      userId: 0,
      userInfo: null,
    };
  },
  mounted() {
    if (this.$route.params.id) {
      this.userId = this.$route.params.id;
      this.getUserData();
    }
  },
  methods: {
    getUserData() {
      const url = `https://reqres.in/api/users/${this.userId}`;

      axios.get(url).then((res) => {
        this.userInfo = res.data.data;
      });
    },
  },
};
</script>

<style scoped>
.card-title {
  border-bottom: 1px solid #dee2e6 !important;
  padding-bottom: 0.5rem !important;
}
</style>