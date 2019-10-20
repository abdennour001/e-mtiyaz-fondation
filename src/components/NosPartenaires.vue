<template>
    <div class="container-fluid my-5 hand">
        <div class="row text-center justify-content-center">
            <div class="col-12 mt-4">
                <h1 class="display-5" style="text-transform: uppercase">Nos Partenaires</h1>
            </div>
            <div class="col-6 mb-4">
                <hr class="blue">
            </div>
        </div>
        <div class="row text-center jumbotron">
            <div class="col-12 mb-4">
                <p class="lead">
                    e-mtiyaz est <strong>membre de l’incubateur d’HEC Paris</strong> en France
                    et <strong>est soutenue par l’Union Européenne</strong> via son programme DIAMED
                    qui accompagne les porteurs de projets euro-méditerranéens.
                </p>
            </div>
        </div>
        <div class="row text-center squeeze-75 mb-4">
            <div class="col-lg-3 col-md-3 col-sm-12 mb-sm-5">
                <img src="../assets/img/union-européenne.png" class="w-75 i-1" alt="">
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 mb-sm-5">
                <img src="../assets/img/inc.png" class="w-75 i-2" alt="">
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 mb-sm-5">
                <img src="../assets/img/heo.png" class="w-75 i-3" alt="">
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 mb-sm-5">
                <img src="../assets/img/diamed.png" class="w-75 i-4" alt="">
            </div>
        </div>
    </div>
</template>

<script>
  import $ from 'jquery';
  import ScrollReveal from 'scrollreveal';
  export default {
    name: 'NosPartenaires',
    mounted () {

      $(document).ready(function() {
        window.sr = ScrollReveal({ reset: false });
        sr.reveal('.i', {
          duration: 1000,
          origin: 'top',
          distance: '50px'
        });
        sr.reveal('.i-1', {
          duration: 1000,
          origin: 'top',
          distance: '70px'
        });
        sr.reveal('.i-2', {
          duration: 1000,
          origin: 'top',
          delay: 250,
          distance: '70px'
        });
        sr.reveal('.i-3', {
          duration: 1000,
          origin: 'top',
          delay: 500,
          distance: '70px'
        });
        sr.reveal('.i-4', {
          duration: 1000,
          origin: 'top',
          delay: 750,
          distance: '70px'
        });
      });
    }
  }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';
    .jumbotron {
        padding: 2rem;
        overflow: hidden;
        background: transparent;
    }
    .hand {
        background: url("../assets/img/handshakemdpi.png") no-repeat top;
        background-position-y: 15px;
    }
    strong {
        font-weight: 500;
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
