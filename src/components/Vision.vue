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
                <p class="lead">
                    Parce que la <strong>réussite scolaire et universitaire</strong> de même que <strong>l’insertion professionnelle</strong> qui
                    en découle ne doit pas dépendre de l’origine économique, sociale et géographique des élèves, la
                    <strong>fondation e-mtiyaz</strong> développe des programmes d’actions en <strong>Algérie</strong> en s’appuyant sur
                    <strong>trois piliers</strong>.
                </p>
            </div>
            <div class="col-12 mt-5">
                <div class="row text-center">
                    <div class="col-4">
                        <div class="d-flex flex-column justify-content-between h-100">
                            <div class="row">
                                <div class="col-12">
                                    <div class="circle circle-1 icon-1"></div>
                                </div>
                                <div class="col-12">
                                    <h4 class="display-5">Sensibiliser</h4>
                                </div>
                                <div class="col-12">
                                    <p id="p-1">
                                        les élèves à l’importance de l’éducation et de la réussite scolaire.
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="circle circle-2 icon-2"></div>
                                </div>
                                <div class="col-12">
                                    <h4 class="display-5">Accompagner</h4>
                                </div>
                                <div class="col-12">
                                    <p id="p-3">
                                        les étudiants dans leur projet de carrière et leur insertion
                                        professionnelle.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <img id="missile" src="../assets/img/missilemdpi.png" alt="missile" style="width: 65%">
                    </div>
                    <div class="col-4">
                        <div class="d-flex flex-column justify-content-center h-100">
                            <div class="row">
                                <div class="col-12">
                                    <div class="circle-last icon-3"></div>
                                </div>
                                <div class="col-12">
                                    <h4 class="display-5">Orienter</h4>
                                </div>
                                <div class="col-12">
                                    <p id="p-2">
                                        les étudiants dans leur projet d’études universitaires. Dans un monde où la qualification occupe une place de plus en plus importante, il est indispensable
                                        d’accompagner les étudiants dans leurs choix d’orientation et les aider à anticiper les
                                        futurs enjeux d’insertion professionnelle.
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
          duration: 1500,
          delay: 500,
          origin: 'bottom',
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
        width: 100px;
        height: 100px;
        border: 2px solid $light-green-color;
        border-radius: 200px;
        position: relative;
        background-color: $lighter-green-color
    }
    .circle-1:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 100%;
        width: 310px;
        z-index: 0;
        border-top: 3px dashed $light-green-color;
    }
    .circle-2:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 100%;
        width: 250px;
        z-index: 0;
        border-top: 3px dashed $light-green-color;
    }
    .circle-last {
        margin: 0 auto;
        width: 100px;
        height: 100px;
        border: 2px solid $light-green-color;
        border-radius: 200px;
        position: relative;
        background-color: $lighter-green-color
    }
    .circle-last:after {
        content: '';
        position: absolute;
        top: 50%;
        left: -292%;
        width: 280px;
        z-index: 0;
        border-top: 3px dashed $light-green-color;
    }
    h4 {
        text-transform: uppercase;
        color: $light-green-color;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    .icon-1 {
        background: url('../assets/icon/icon-1.png') no-repeat center;
        background-size: cover;
    }
    .icon-2 {
        background: url('../assets/icon/icon-2.png') no-repeat center;
        background-size: cover;
    }
    .icon-3 {
        background: url('../assets/icon/icon-5.png') no-repeat center;
        background-size: cover;
    }

</style>
