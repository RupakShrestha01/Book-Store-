<template>
  <form method="post" @submit.prevent="submitInfo()">
    <h1>hello</h1>
<input type="text" v-model="info.username">
<input type="email"  v-model="info.email">
<input type="password" v-model="info.password">
<button >Submit</button>
{{info}}
  </form>
</template>

<script setup>

const URL = "http://localhost:5000/api/auth/register"
const info = reactive({
  email: "",
  username :"",
  password: ""

}
)
async function submitInfo() {
    const { data, error } = await useFetch(URL,{ method : "post",
            headers: {
            "Content-Type": "application/json",

        },
 body: JSON.stringify(info)})
    
    console.log(data.value,error)
}
</script>

