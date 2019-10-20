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
                <p class="lead">
                    <strong>e-mtiyaz</strong> est un <strong>centre éducatif </strong>qui œuvre depuis <strong>2013</strong> à faire de l’Algérie une terre <strong>d’excellence académique</strong>.
                </p>
                <p class="lead">
                    Fort de son <strong>expérience</strong> dans le <strong>coaching scolaire</strong> et <strong>universitaire</strong> et convaincu qu’il est du ressort de chacun d’agir pour l’intérêt général, <strong>e-mtiyaz</strong>
                    a décidé de mettre son <strong>expertise</strong> au service de tous au travers d’une <strong>fondation</strong>.
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
          origin: 'left',
          distance: '50px'
        })
        sr.reveal('#t-2', {
          duration: 1000,
          origin: 'right',
          delay: 250,
          distance: '50px'
        })
        sr.reveal('#t-3', {
          duration: 1000,
          origin: 'left',
          delay: 500,
          distance: '50px'
        })
        sr.reveal('#p-1', {
          duration: 1000,
          origin: 'left',
          delay: 750,
          distance: '50px'
        })
        sr.reveal('#p-2', {
          duration: 1000,
          origin: 'left',
          delay: 750,
          distance: '50px'
        })
        sr.reveal('#p-3', {
          duration: 1000,
          origin: 'left',
          delay: 750,
          distance: '50px'
        })
        sr.reveal('#p-4', {
          duration: 1000,
          origin: 'left',
          delay: 750,
          distance: '50px'
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

</style>
