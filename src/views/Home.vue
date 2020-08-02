<template>
  <div >
    <Loading :active.sync="isLoading"></Loading>
      <div id="nav">
        <router-link to="/">首頁</router-link> |
        <router-link to="/about">關於我們</router-link> |
        <router-link to="/products">產品列表</router-link> |
        <router-link to="/cart">購物車</router-link> |
        <router-link to="/check">結帳</router-link> |
        <router-link to="/admin/products">後台頁面</router-link> 
    </div>
    <HelloWorld msg=""/>
    <router-view/>
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};

</script>
