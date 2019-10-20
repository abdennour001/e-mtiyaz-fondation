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
                    e-mtiyaz est un centre éducatif qui œuvre depuis 2013 à faire de l’Algérie une terre d’excellence académique.
                </p>
                <p class="lead">
                    Fort de son expérience dans le coaching scolaire et universitaire et convaincu qu’il est du ressort de chacun d’agir pour l’intérêt général, e-mtiyaz a décidé de mettre son expertise au service de tous au travers d’une fondation.
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

</style>
