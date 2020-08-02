<template>
  <div class="home">
    <div id="nav">
      <h1>後台管理系統</h1>
      <router-link to="/">回到前台</router-link> |
      <router-link to="/admin/products">產品列表</router-link> |
      <router-link to="/admin/coupons">優惠券列表</router-link> |
      <router-link to="/admin/order">訂單列表</router-link> 
    </div>
    <router-view/>
  </div>
</template>