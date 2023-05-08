<template>
        <v-container> 
        <v-chip style="margin: 2px" variant="elevated" v-for="(item, index) in $static.tags.fields.sort(i => {i.name})" :key="item.name">
        {{ item.name }}</v-chip>
        </v-container>
</template>

<static-query>
query {
    tags:__type (name: "Research_Tags") {  
			fields {
        name
      }
    }
}
</static-query>

<script>

export default {
  components: {
  }
};
</script>

