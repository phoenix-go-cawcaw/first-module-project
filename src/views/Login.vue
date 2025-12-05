<script>

</script>




<template>
    <div class="login-container">
        <div class="login-card">
            <h2> LOGIN </h2>
            <form @submit.prevent="submitLogin">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" v-model="username" required />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model="password" required />
                </div>
            </form>
                <button type="submit"> Login </button>
        </div>
    </div>
</template>




<style>



</style>