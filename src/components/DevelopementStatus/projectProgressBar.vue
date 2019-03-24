<template>
    <div id="projectProgressBar">



        <div class="card" >
            <h5 class="card-header bg-primary">In progress</h5>
            <div class="card-body">

                <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "projectProgressBar",
        props: ["beginDate", "endDate"]
    }
</script>

<style scoped>
#projectProgressBar{
    margin-top: 5%;
    margin-bottom: 5%;
}
</style>