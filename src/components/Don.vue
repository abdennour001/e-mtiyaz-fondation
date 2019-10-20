<template>
    <div class="container-fluid jumbotron">
        <div class="d-flex justify-content-between">
            <div class="text-left don-1">
                <h3>Don</h3>
                <h1><strong>Particulier</strong></h1>
                <h5>Don ponctuel</h5>
                <ul class="text-left ul-orange">
                    <li>5000DZD</li>
                    <li>10.000DZD</li>
                    <li>30.000DZD</li>
                </ul>
                <h5>Don par versement mensuel</h5>
            </div>
            <div class="text-left don-2">
                <h3>Don</h3>
                <h1><strong>Entreprises</strong></h1>
                <h5>Don ponctuel</h5>
                <ul class="text-left ul-green">
                    <li>50.000DZD</li>
                    <li>100.000DZD</li>
                    <li>200.000DZD</li>
                </ul>
                <h5>Don par versement mensuel</h5>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Don'
  }
</script>

<style lang="scss" scoped>

    @import '../variables.scss';
    ul {
        list-style-type: none;
        margin-left: 2rem;
        padding-left: 1rem;
        border-left: 2px solid #000;
        transition: 0.5s ease;
        font-weight: 400;
    }
    ul li {
        font-size: 1.1rem;
        margin-bottom: 10px;
        color: $font-color-dark;
    }
    .ul-orange {
        border-left-color: $dark-orange-color;
    }
    .ul-green {
        border-left-color: $dark-green-color;
    }
    .jumbotron {
        padding: 2rem;
    }
    .d-flex {
        padding-inline: 12rem;
    }
    strong {
        font-weight: 500;
    }
    .don-1 {
        color: $dark-orange-color;
    }
    .don-2 {
        color: $dark-green-color;
    }

</style>
