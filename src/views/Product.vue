<template>
  <div>
    <h2>單一產品頁面</h2>
    <h3>{{ this.product.title }}</h3>
    <p>{{ this.product.description }}</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            product: {},
        };
    },
    created(){
        /*console.log(this.$route.params.id);*/
        const { id } = this.$route.params;
        this.$http.get(`${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/product/${id}`)
            .then((res) => {
                this.product = res.data.data;
            });
    },
};
</script>