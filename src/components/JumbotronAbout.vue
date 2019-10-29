<template>
    <div class="container-fluid">
        <div class="row text-center justify-content-center welcome">
            <div class="col-12 mt-4">
                <h1 class="display-5">e-mtiyaz <span style="text-transform: uppercase">en quelques mots</span></h1>
            </div>
            <div class="col-6 mb-4">
                <hr class="blue">
            </div>
            <div class="col-12">
                <p class="lead" id="t-1">
                    Fort de son <strong>expérience</strong> dans le <strong>coaching scolaire</strong> et <strong>universitaire</strong> et convaincu qu’il est du ressort de chacun d’agir pour l’intérêt général, <strong>e-mtiyaz</strong>
                    a décidé de mettre son <strong>expertise</strong> au service de tous grâce à une <strong>fondation</strong>.
                </p>
            </div>
        </div>
    </div>
</template>

<script>

  import $ from 'jquery';
  import ScrollReveal from 'scrollreveal';

  export default {
    name: 'JumbotronAbout',
    mounted () {
      $(document).ready(function() {
        window.sr = ScrollReveal({ reset: false });
        sr.reveal('#t-1', {
          duration: 1000,
          delay: 200,
          origin: 'left',
          distance: '100px'
        })

        sr.reveal('#t-2', {
          duration: 1000,
          delay: 500,
          origin: 'right',
          distance: '100px'
        })
      });
    }
  }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';

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
