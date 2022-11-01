<script setup>
function waytoHomepage(){
    navigateTo("homepage");
}
</script>
<template>
    <div>
        <div class="mx-10 my-5 p-5 flex justify-center">
            login page
        </div>
        <div class="grid grid-cols-3">
            <div class="col-start-2">
                <form class="grid grid-cols-1 p-4">
                    <div class="mb-5">
                        <label class=" mr-12" for="email">Email</label>
                        <input class="border-2 border-black w-52" type="text">
                    </div>
                    <div>
                        <label class=" mr-5" for="password">password</label>
                        <input class="border-2 border-black w-52" type="password">
                    </div>
                    <button class="bg-green-400 p-2 w-20 hover:bg-green-600 rounded-md drop-shadow-md mx-20 my-10" @click.prevent="waytoHomepage()">login</button>
                </form>
            </div>
        </div>
    </div>
</template>