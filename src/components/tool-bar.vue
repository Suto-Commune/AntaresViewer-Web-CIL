<script>
export default {
  methods: {
    reroute_when_clicked(route_name) {
      this.$router.push({ name: route_name });
    },
    retoute_to_outer_URL(url) {
      window.location.href = url;
    },
  },
};
</script>

<template>
  <q-toolbar class="bg-primary text-white shadow-15 q-mb-sm q-pa-sm">
    <div
      class="q-ml-sm q-mr-sm items-center q-ml-md text-h4 text-bold text-center"
    >
      AntaresViewer
    </div>
    <q-separator vertical inset dark color="grey-1" class="q-ml-sm q-mr-lg" />
    <q-btn
      flat
      rounded
      no-caps
      class="q-ml-md text-h5 text-bold"
      :label="$t('home')"
      @click="reroute_when_clicked('index_page')"
    />
    <q-btn
      flat
      rounded
      no-caps
      class="q-ml-md text-h5 text-bold"
      :label="$t('about')"
      @click="reroute_when_clicked('about_page')"
    />
    <q-btn
      flat
      rounded
      label="GitHub"
      no-caps
      class="q-ml-md text-h5 text-bold"
      @click="
        retoute_to_outer_URL('https://github.com/Suto-Commune/AntaresViewer')
      "
    />
    <q-space />
    <q-btn flat rounded no-caps class="text-h6" :label="$t('sign_up')" />
    <q-btn flat rounded no-caps class="q-ml-sm text-h6" :label="$t('log_in')" />
  </q-toolbar>
</template>
