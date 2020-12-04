<template>
  <div class="row">
    <div class="col-12">
      <h2>User List</h2>
    </div>
    <div class="col-12">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>avatar</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>email</th>
            <th>commands</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in userList" :key="user.id">
            <td>
              {{ index + 1 }}
            </td>
            <td>
              <router-link
                title="more detail"
                class="btn btn-link"
                :to="{ path: '/users/' + user.id }"
              >
                <b-avatar variant="" :src="user.avatar" size="5rem"></b-avatar>
              </router-link>
            </td>
            <td>
              <router-link
                title="more detail"
                class="btn btn-link"
                :to="{ path: '/users/' + user.id }"
              >
                {{ user.first_name }}
              </router-link>
            </td>
            <td>{{ user.last_name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <router-link
                class="btn btn-info btn-sm"
                :to="{ path: 'users/' + user.id }"
              >
                <i class="fa fa-eye"></i>
              </router-link>
              <!-- <b-button class="btn btn-info" @click="getUserData(user.id)">
                <i class="fa fa-eye"></i>
              </b-button> -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="col-12">
      <div class="d-flex justify-content-between">
        <div>
          <b-pagination
            v-model="currentPage"
            :total-rows="totalItem"
            :per-page="itemPerPage"
            first-text="«"
            prev-text="‹"
            next-text="›"
            last-text="»"
            @change="changePage($event)"
          ></b-pagination>
        </div>
        <div>
          <select
            v-model="itemPerPage"
            class="form-control"
            @change="changeItemPerPage()"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserList",
  props: {},
  data() {
    return {
      userList: [],
      currentPage: 1,
      totalItem: 1,
      itemPerPage: 10,
      user: null,
    };
  },
  mounted() {
    this.getUserList();
  },
  methods: {
    getUserList() {
      let page = 1;
      if (this.$route.query.page) {
        page = this.$route.query.page;
      }

      if (this.$route.query.itemPerPage) {
        this.itemPerPage = this.$route.query.itemPerPage;
      }

      const url = `https://reqres.in/api/users?page=${page}&per_page=${this.itemPerPage}`;

      axios.get(url).then((res) => {
        this.userList = res.data.data;
        this.totalItem = res.data.total;
        setTimeout(() => {
          this.currentPage = page;
        });
      });
    },
    changeItemPerPage() {
      this.$router.push({
        path: "/users",
        query: { page: 1, itemPerPage: this.itemPerPage },
      });
      this.getUserList();
    },
    changePage(page) {
      this.currentPage = page;
      this.$router.push({
        path: "/users",
        query: { page: this.currentPage, itemPerPage: this.itemPerPage },
      });
      this.getUserList();
    },
  },
};
</script>

<style>
.table thead th {
  border-bottom: 0 !important;
}

.table tbody td {
  vertical-align: middle;
  padding: 5px 5px;
}
</style>