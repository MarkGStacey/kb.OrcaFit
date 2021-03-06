<template>
    <!-- Author intro -->
    <div>
    <Author :show-title="true" />
    <!-- List posts -->
     <Tabs/>
    </div>
</template>
<script>
import Tabs from '~/components/General/Tabs.vue'
import Author from '~/components/Author.vue'
export default {
  components: {
    Author,
    Tabs
  }
}
</script>