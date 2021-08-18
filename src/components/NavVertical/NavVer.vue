<template>
<div>
    <nav class="navbar navbar-dark bg-dark">
        <div class="container">
            <ul>
                <li class="nav-item">
                    <router-link class="nav-link pe-3" to="/products">Products</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link pe-3" to="/customers">Customers</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link pe-3" to="/vendors">Vendors</router-link>
                </li>
            </ul>
        </div>
        
    </nav>
</div>
  
</template>

<script>
export default {
    name: 'NavVer',
    data(){
        return{

        }
    }

}
</script>

<style>

</style>