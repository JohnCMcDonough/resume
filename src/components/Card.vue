<template>
    <div class="card">
        <div class="card-title">
            <i :class="cardData.iconClass" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;{{cardData.title}}</div>

        <div v-for="(value,index) in cardData.sections" :item="item" :index="index" :key="value" class="card-section">
            <div class="card-header">{{value.jobTitle}}
                <span v-if="value.jobTitle">@</span>{{value.title}}</div>
            <!-- <div class="card-job-title">{{value.jobTitle}}</div> -->
            <div class="card-date">{{value.date}}</div>
            <div class="card-text">{{value.text}}</div>
            <br>
            <ul>
                <li v-for="(b,i) in value.bullets" :item="b" :index="i" :key="i">
                    {{b}}
                </li>
            </ul>
            <hr v-if="index < cardData.sections.length-1">
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.component("jmcd-card", {
    name: 'jmcd-card',
    props: ["cardData"]
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
    padding-left: 30px;
}

.card {
    margin-top: 25px;
    background-color: #FAFCFB;
    /* border-radius: 3px; */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 25px;
    transition: 0.3s;
    /* as per google spec */
    font-family: 'Roboto', sans-serif;
    color: #727272;
    width: 100%;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.card-title {
    font-size: 25px;
}

.card-section {
    margin-top: 15px;
    padding-left: 45px;
    transition-duration: .2s;
}

@media (max-width: 768px) {
    .card-section {
        padding-left: 0px;
    }
}

.card-text {
    margin-top: 10px;
    font-size: 16px;
}

.card-header {
    font-size: 18px;
}

.card-date {
    color: #64B5F6;
    margin-top: 5px;
    font-size: 13px;
}

.card-job-title {
    margin-top: 5px;
    font-size: 14px;
    color: rgba(114, 114, 114, .5)
}
</style>
