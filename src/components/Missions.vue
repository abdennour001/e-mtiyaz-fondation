<template>
    <div class="container-fluid content">
        <div class="row">
            <div class="col-12 mb-3">
                <div class="row align-items-lg-center">
                    <div class="col-lg-3 col-md-3 col-sm-12">
                        <div class="circle icon-4"></div>
                    </div>
                    <div class="col-lg-9 col-md-9 col-sm-12">
                        <div class="d-flex flex-column">
                            <div class="row">
                                <div class="col-12">
                                    <div class="row text-lg-left text-md-left text-sm-center">
                                        <div class="col-12">
                                            <h4 class="display-5">Sensibiliser</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="row text-lg-left text-md-left text-sm-center">
                                        <div class="col-12">
                                            <p id="p-1" class="lead">
                                                les élèves à l’importance de l’éducation et de la réussite scolaire
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mb-3">
                <div class="row align-items-lg-center">
                    <div class="col-lg-3 col-md-3 col-sm-12">
                        <div class="circle icon-5"></div>
                    </div>
                    <div class="col-lg-9 col-md-9 col-sm-12">
                        <div class="d-flex flex-column">
                            <div class="row">
                                <div class="col-12">
                                    <div class="row text-lg-left text-md-left text-sm-center">
                                        <div class="col-12">
                                            <h4 class="display-5">Orienter</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="row text-lg-left text-md-left text-sm-center">
                                        <div class="col-12">
                                            <p id="p-2" class="lead">
                                                les étudiants dans leur projet d’études universitaires. Dans un monde où la qualification occupe une place de plus en plus importante, il est indispensable
                                                d’accompagner les étudiants dans leurs choix d’orientation et les aider à anticiper les
                                                futurs enjeux d’insertion professionnelle
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="row align-items-lg-center">
                    <div class="col-lg-3 col-md-3 col-sm-12">
                        <div class="circle-last icon-6"></div>
                    </div>
                    <div class="col-lg-9 col-md-9 col-sm-12">
                        <div class="d-flex flex-column">
                            <div class="row">
                                <div class="col-12">
                                    <div class="row text-lg-left text-md-left text-sm-center">
                                        <div class="col-12">
                                            <h4 class="display-5">Accompagner</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="row text-lg-left text-md-left text-sm-center">
                                        <div class="col-12">
                                            <p id="p-3" class="lead">
                                                les étudiants dans leur projet de carrière et leur insertion
                                                professionnelle
                                            </p>
                                        </div>
                                    </div>
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
    name: 'Missions',
    mounted () {
      $(document).ready(function() {
        window.sr = ScrollReveal({ reset: false });
        sr.reveal('#p-1', {
          duration: 2000,
          origin: 'top',
          distance: '50px'
        })
        sr.reveal('#p-2', {
          duration: 2000,
          origin: 'top',
          distance: '50px'
        })
        sr.reveal('#p-3', {
          duration: 2000,
          origin: 'top',
          distance: '50px'
        })
      });
    }
  }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';

    .display-5 {
        color: $dark-blue-color;
        font-weight: 400;
    }

    .content {
        width: 80%;
        margin: 0 auto;
    }
    .circle:after {
        content: '';
        position: absolute;
        top: 0%;
        left: 50%;
        z-index: -1;
        height: 300px;
        border-left: 3px solid $dark-blue-color;
    }
    .circle {
        margin: 0 auto;
        width: 120px;
        height: 120px;
        border: 3px solid $dark-blue-color;
        border-radius: 200px;
        background-color: #49bee6
    }
    .circle-last {
        margin: 0 auto;
        width: 120px;
        height: 120px;
        border: 3px solid $dark-blue-color;
        border-radius: 200px;
        background-color: #49bee6
    }
    .icon-4 {
        position: relative;
        /*background: url("../assets/icons/icon-4.png") no-repeat center;*/
        /*background-size: cover;*/
    }
    icon-4:after {
        content: '';
        position: absolute;
        top: 0%;
        left: 0%;
        height: 50px;
        border: 2px solid #000;
    }
    .icon-5 {
        /*background: url("../assets/icons/icon-5.png") no-repeat center;*/
        /*background-size: cover;*/
    }
    .icon-6 {
        /*background: url("../assets/icons/icon-6.png") no-repeat center;*/
        /*background-size: cover;*/
    }
    .lead {
        font-size: 1.1rem;
    }
    h4 {
        text-transform: uppercase;
        color: $dark-blue-color;
    }

    /** media queries **/
    @media screen and (min-width: 992px) { /* medium screen */
    }
    @media screen and (max-width: 992px) { /* medium screen */
        .display-5 {
            font-weight: 300;
        }
        .lead {
            font-size: 1rem;
        }
        .content {
            width: 95%;
        }
        .circle:after {
            display: none;
        }
    }
    @media screen and (max-width: 768px) { /* tablet screen */
        .display-5 {
            font-weight: 300;
        }
        .lead {
            font-size: 1rem;
        }
        .circle {
            margin-bottom: 20px;
        }
        .circle-last {
            margin-bottom: 20px;
        }
    }
    @media (max-width: 576px) { /* mobile screen */
        .display-5 {
            font-size: 1.3rem;
            font-weight: 300;
        }
        .lead {
            font-size: 1rem;
        }
        .circle {
            margin-bottom: 20px;
        }
        .circle-last {
            margin-bottom: 20px;
        }
    }
</style>
