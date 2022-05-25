<template>
<div>
  <div>
    <!-- <font-awesome-icon :icon="['fas', 'user']" class="user_icon" /> -->
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view />
      </transition>
  </div>
</div>
</template>

<script>

export default {

}
</script>


<style>
*{
  margin: 0;
  padding: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
