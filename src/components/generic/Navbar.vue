<template>
    <nav class="navigation bg-primaryColor p-3">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/">Lien 1</RouterLink>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    userType: String
  }
}
</script>
