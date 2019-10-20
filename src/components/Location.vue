<template>
    <div class="row text-center" style="margin-top: 6rem;">
        <div class="col-12">
            <h1 class="display-5">Besoin de plus d'informations ?</h1>
        </div>
        <div class="col-12 mb-4">
            <hr class="blue" style="width: 20%;">
        </div>
        <div class="col-12">
            <h2 class="display-6">Contactez-nous au:</h2>
            <p class="lead">05 52 14 22 44</p>
            <h2 class="display-6">Par email:</h2>
            <p class="lead">foundation@e-mtiyaz.com</p>
            <p class="lead" style="text-transform: uppercase;">Dar Diaf - 98 Lot Benhaddadi Said</p>
            <p class="lead" style="text-transform: uppercase;">Chéraga - Alger</p>
        </div>
        <div class="col-12">
            <iframe class="py-4" src="https://www.google.com/maps/d/embed?mid=1rVEb_-u7GMsu1Vv1Kv3jJVJuNL0" width="100%" height="450" frameBorder="0"></iframe>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Location'
  }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';
    .display-5 {
        color: $dark-blue-color;
        font-weight: 300;
    }
    strong {
        font-weight: 500;
    }
    .lead {
        font-size: 1.2rem;
        font-weight: 500;
        color: $dark-orange-color;
    }
    .display-6 {
        font-size: 1.3rem;
        color: $font-color-dark;
        font-weight: 400;
    }
    /** media queries **/
    @media screen and (min-width: 992px) { /* large screen */

    }
    @media screen and (max-width: 992px) { /* large screen */
        .display-5 {
            font-size: 2rem;
        }
        .lead {
            font-size: 1.1rem;
        }
    }
    @media screen and (max-width: 768px) { /* medium screen */
        .display-5 {
            font-size: 1.8rem;
        }
        .lead {
            font-size: 1.1rem;
        }
    }
    @media (max-width: 576px) { /* mobile screen */
        .display-5 {
            font-size: 1.5rem;
        }
        .lead {
            font-size: 1rem;
        }
    }
</style>
