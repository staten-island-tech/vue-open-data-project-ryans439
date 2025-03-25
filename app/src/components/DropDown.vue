<template>
    <div class = "dropdown">
        <button @click = "toggleDropdown">
            {{ selectedSchool || 'Select a School' }}
        </button>
        <ul>v-if = "isDropdownOpen" class = "dropdown-menu"
            v-if selectedSchool.value = school
            <li> v-for = "school in schools" :key = "option" @click = "selectedSchool(school)"
                {{ school }}    
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref , onMounted} from 'vue';
onMounted(async () => { const schools = ref([]);
let selectedSchool = ref(null);
const isDropdownOpen = ref(false);  


}
);
</script>

<style lang="scss" scoped>

</style>