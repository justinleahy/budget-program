<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
        permanent
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Main Finances"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <router-link style="text-decoration: none;" to="/"><v-list-item prepend-icon="mdi-view-dashboard" title="Overview" value="home"></v-list-item></router-link>
          <v-list-item prepend-icon="mdi-wallet-bifold" title="Accounts" value="accounts"></v-list-item>
          <router-link style="text-decoration: none;" to="/transactions"><v-list-item prepend-icon="mdi-currency-usd" title="Transactions" value="transactions"></v-list-item></router-link>
          <v-list-item prepend-icon="mdi-star" title="Expenses" value="expenses"></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: 'NavigationBar',
}
</script>