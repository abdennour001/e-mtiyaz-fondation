<template>
    <div class="container-fluid">
        <div class="row text-center justify-content-center welcome">
            <div class="col-12 mt-4">
                <h1 class="display-5" style="text-transform: uppercase">Vision et missions</h1>
            </div>
            <div class="col-6 mb-4">
                <hr class="blue">
            </div>
        </div>
        <div class="row jumbotron text-center justify-content-center">
            <div class="col-12">
                <p class="lead" id="title-top">
                    Parce que la <strong>réussite scolaire et universitaire</strong> de même que <strong>l’insertion professionnelle</strong> qui
                    en découle ne doit pas dépendre de l’origine économique, sociale et géographique des élèves, la
                    <strong>fondation e-mtiyaz</strong> développe des programmes d’actions en <strong>Algérie</strong> en s’appuyant sur
                    <strong>trois piliers</strong>:
                </p>
            </div>
            <div class="col-12 mt-5">
                <div class="row text-center justify-content-center align-items-center">
                    <div class="col-12">
                        <div class="d-flex flex-column justify-content-between align-items-center h-100">
                            <div class="row text-center justify-content-center align-items-center squeeze-70 mb-4">
                                <div class="col-12">
                                    <div class="circle circle-1 icon-1"></div>
                                </div>
                                <div class="col-12">
                                    <h4 class="display-5">Sensibiliser</h4>
                                </div>
                                <div class="col-12">
                                    <p id="p-1" class="lead">
                                        les élèves à l’importance de<strong> l’éducation</strong> et de la réussite scolaire.
                                    </p>
                                </div>
                            </div>
                            <div class="row text-center squeeze-70 mb-4">
                                <div class="col-12">
                                    <div class="circle-last icon-3"></div>
                                </div>
                                <div class="col-12">
                                    <h4 class="display-5">Orienter</h4>
                                </div>
                                <div class="col-12">
                                    <p id="p-3" class="lead">
                                        les étudiants dans leur projet d’<strong>études universitaires</strong>. Dans un monde où la qualification occupe une place de plus en plus importante, il est indispensable
                                        <strong>d’accompagner</strong> les étudiants dans leurs <strong>choix d’orientation </strong>et les aider à anticiper les
                                        futurs enjeux d’insertion <strong>professionnelle</strong>.
                                    </p>
                                </div>
                            </div>
                            <div class="row text-center squeeze-70">
                                <div class="col-12">
                                    <div class="circle circle-2 icon-2"></div>
                                </div>
                                <div class="col-12">
                                    <h4 class="display-5">Accompagner</h4>
                                </div>
                                <div class="col-12">
                                    <p id="p-2" class="lead">
                                        les étudiants dans leur <strong>projet de carrière</strong> et leur insertion
                                        <strong>professionnelle</strong>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

  import $ from 'jquery';
  import ScrollReveal from 'scrollreveal';

  export default {
    name: 'Vision',
    mounted () {
      $(document).ready(function() {
        window.sr = ScrollReveal({ reset: false });
        sr.reveal('#missile', {
          duration: 1000,
          delay: 500,
          origin: 'bottom',
          distance: '500px'
        })

        sr.reveal('#title-top', {
          duration: 1000,
          origin: 'top',
          distance: '60px'
        })

        sr.reveal('#p-1', {
          duration: 1000,
          origin: 'left',
          distance: '500px',
        })

        sr.reveal('#p-2', {
          duration: 1000,
          origin: 'left',
          distance: '500px'
        })

        sr.reveal('#p-3', {
          duration: 1000,
          origin: 'right',
          distance: '500px'
        })

        sr.reveal('#p-4', {
          duration: 1000,
          origin: 'right',
          distance: '500px'
        })
      });
    }
  }
</script>

<style lang="scss" scoped>

    @import "../variables.scss";

    strong {
        font-weight: 600;
    }
    .circle {
        margin: 0 auto;
        width: 120px;
        height: 120px;
        border-radius: 200px;
        position: relative;
        background-color: $lighter-green-color
    }
/*    .circle-1:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 100%;
        width: 310px;
        z-index: 0;
        border-top: 3px dashed $light-green-color;
    }*/
   /* .circle-2:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 100%;
        width: 250px;
        z-index: 0;
        border-top: 3px dashed $light-green-color;
    }*/
    .circle-last {
        margin: 0 auto;
        width: 120px;
        height: 120px;
        position: relative;
        background-color: $lighter-green-color
    }
  /*  .circle-last:after {
        content: '';
        position: absolute;
        top: 50%;
        left: -292%;
        width: 280px;
        z-index: 0;
        border-top: 3px dashed $light-green-color;
    }*/
    h4 {
        text-transform: uppercase;
        color: $dark-blue-color;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    .icon-1 {
        background: url('../assets/icon/icon-1.png') no-repeat center;
        background-size: 100px;
    }
    .icon-2 {
        background: url('../assets/icon/icon-2.png') no-repeat center;
        background-size: 100px;
    }
    .icon-3 {
        background: url('../assets/icon/icon-5.png') no-repeat center;
        background-size: 100px;
    }
    .jumbotron {
        background: $light-blue-color-transparent;
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
