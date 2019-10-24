<template>
    <div class="container-fluid">
        <div class="row text-center justify-content-center welcome">
            <div class="col-12 mt-2">
                <h1 class="display-5" style="text-transform: uppercase">Nos Lauréats</h1>
            </div>
            <div class="col-6 mb-4">
                <hr class="blue">
            </div>
            <div class="col-12 my-2">
                <h3 id='p-1' style="font-weight: 400;">Nos lauréats sont issus :</h3>
            </div>
            <div class="col-12 my-4 content">
                <div class="row justify-content-center align-items-center">
                    <div class="col-12" style="margin-bottom: 5rem">
                        <div class="row align-items-center">
                            <div class="col-4">
                                <p id="p-3" class="lead">D'un échantillon annuel de <strong>30</strong> à <strong>50</strong>
                                    participants issus d’un programme de sélection.</p>
                            </div>
                            <div class="col-4">
                                <div class="circle icon-1"></div>
                            </div>
                            <div class="col-4"></div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row align-items-center">
                            <div class="col-4"></div>
                            <div class="col-4">
                                <div class="circle-last icon-2"></div>
                            </div>
                            <div class="col-4">
                                <p id="p-2" class="lead">D’horizons <strong>sociaux</strong> et <strong>géographiques</strong>
                                    représentatifs de <strong>la diversité de l’Algérie</strong>. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row text-center justify-content-center align-items-center jumbotron">
            <div class="col-12">
                <h4 style="font-weight: 400;">Ils sont sélectionnés au travers de critères de sélection <strong>démocratiques</strong>
                    et <strong>ouverts à toutes et à tous</strong>.</h4>
            </div>
            <div class="col-12 mt-4">
                <a class="button Contactez-nous" href="#"
                   data-toggle="modal" data-target="#exampleModal" data-whatever="Devenez lauréat">
                    Devenez lauréat
                    <i class="fas fa-arrow-alt-circle-up align-middle ml-1" style="font-size: 1.7rem"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'NosLaureats'
  }
</script>

<style lang="scss" scoped>

    @import '../variables.scss';
    .circle {
        margin: 0 auto;
        width: 150px;
        height: 150px;
        border: 2px solid $dark-blue-color;
        border-radius: 200px;
        transition: 0.5s ease;
    }
    .circle:after {
        content: '';
        position: absolute;
        top: 0%;
        left: 49.9%;
        z-index: -1;
        height: 248px;
        border-left: 3px dashed $dark-blue-color;
    }
    .circle-last {
        margin: 0 auto;
        width: 150px;
        height: 150px;
        border: 2px solid $dark-blue-color;
        border-radius: 200px;
    }
    .icon-1 {
        background: url("../assets/img/img-services-1.png") no-repeat center;
        background-size: cover;
    }
    .icon-2 {
        background: url("../assets/img/alg.jpg") no-repeat center;
        background-size: cover;
    }
    strong {
        font-weight: 600;
    }
    .button {
        display: inline-block;
        text-decoration: none;
        border-radius: 200px;
        font-size: 1.2em;
        font-weight: 400;
        width: 20%;
        padding: 10px;
        color: $font-color-light;
        border: 1px solid $font-color-light;
        transition: 0.5s ease;
    }
    .fa-arrow-alt-circle-up {
        transition: 0.5s ease-out;
    }
    .button:hover {
        background: $font-color-light;
        color: $dark-blue-color;
        width: 25%;
        border: 1px solid transparent;
        .fa-arrow-alt-circle-up {
            transform: translateX(20px) rotate(90deg + 360deg);
        }
    }
    h4 {
        color: $font-color-light;
    }
    .jumbotron {
        background: linear-gradient(175deg, $light-blue-color, $dark-blue-color);
        transition: 1s ease;
    }
    .jumbotron:hover {
        background: linear-gradient(185deg, $light-blue-color, $dark-blue-color);
    }
    .content {
        padding-left: 6rem;
        padding-right: 6rem;
    }
</style>
