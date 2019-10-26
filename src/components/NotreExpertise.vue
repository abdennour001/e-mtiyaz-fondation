<template>
    <div class="container-fluid mb-4">
        <div class="row text-center justify-content-center welcome">
            <div class="col-12 mt-4">
                <h1 class="display-5" style="text-transform: uppercase">Notre Expertise</h1>
            </div>
            <div class="col-6 mb-4">
                <hr class="blue">
            </div>
            <div class="col-12">
                <div class="row text-center justify-content-center">
                    <div class="col-12 my-4">
                        <h4 id='p-1' style="font-weight: 400;">Donner aux étudiants les outils pour entreprendre activement et efficacement leur entrée sur le marché de l’emploi</h4>
                    </div>
                    <div class="col-lg-3 col-md-12 col-12-sm">
                        <div class="d-flex flex-column">
                            <div class="circle mb-3 icon-1"></div>
                            <p id="p-2" class="lead">Mettre notre <strong>expertise</strong> de coaching de profils étudiants au service de leur insertion professionnelle.</p>
                        </div>
                    </div>
                    <div class="col-lg-1 col-md-12 col-sm-12 align-self-center plus">
                        <i class="fas fa-plus fa-lg"></i>
                    </div>
                    <div class="col-lg-3 col-md-12 col-12-sm">
                        <div class="d-flex flex-column">
                            <div class="circle mb-3 icon-2"></div>
                            <p id="p-3" class="lead">Proposer une aide <strong>personnalisée</strong> à chacun des lauréats de nos programmes.</p>
                        </div>
                    </div>
                    <div class="col-lg-1 col-md-12 col-sm-12 align-self-center plus">
                        <i class="fas fa-plus fa-lg"></i>
                    </div>
                    <div class="col-lg-3 col-md-12 col-12-sm">
                        <div class="d-flex flex-column">
                            <div class="circle mb-3 icon-3"></div>
                            <p id="p-4" class="lead">Mettre le <strong>réseau</strong> e-mtiyaz à disposition des primo-demandeurs d’emploi.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 my-4">
                <hr class="dark">
            </div>
            <div class="col-12">
                <div class="row text-center">
                    <div class="col-12 my-4">
                        <h1 class="orange">Pourquoi ?</h1>
                    </div>
                    <div class="col-12">
                        <p class="lead" style="font-size: 1.5rem">
                            Afin de se préparer plus <strong>efficacement</strong> à s’insérer sur <strong>le marché de l’emploi</strong> et
                            impulser sa future <strong>carrière professionnelle</strong> !
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'NotreExpertise'
  }
</script>

<style lang="scss" scoped>

    @import '../variables.scss';
    strong {
        font-weight: 500;
    }
    .circle {
        margin: 0 auto;
        width: 100px;
        height: 100px;
        border: 2px solid $dark-blue-color;
        border-radius: 200px;
        background-color: #49bee6
    }
    .orange{
        color: $dark-orange-color;
        font-weight: normal;
        font-size: 3rem
    }
    .icon-1 {
        background: url("../assets/icon/icon-3.png") no-repeat center;
        background-size: cover;
    }
    .icon-2 {
        background: url("../assets/icon/icon-4.png") no-repeat center;
        background-size: cover;
    }
    .icon-3 {
        background: url("../assets/icon/icon-6.png") no-repeat center;
        background-size: cover;
    }

    /** media queries **/
    @media screen and (min-width: 992px) { /* large screen */

    }
    @media screen and (max-width: 992px) { /* large screen */
        .display-5 {
            font-size: 2rem;
        }
        h4 {
            font-size: 1.8rem;
        }
        .lead {
            font-size: 1.1rem;
        }
        .plus {
            margin-bottom: 10px;
        }
        .orange {
            font-size: 2.8rem;
        }
    }
    @media screen and (max-width: 768px) { /* medium screen */
        .display-5 {
            font-size: 1.8rem;
        }
        h4 {
            font-size: 1.4rem;
        }
        .lead {
            font-size: 1.1rem;
        }
        .plus {
            margin-bottom: 10px;
        }
        .orange {
            font-size: 2.5rem;
        }
    }
    @media (max-width: 576px) { /* mobile screen */
        .display-5 {
            font-size: 1.5rem;
        }
        h4 {
            font-size: 1.3rem;
        }
        .lead {
            font-size: 1rem;
        }
        .plus {
            margin-bottom: 15px;
        }
        .orange {
            font-size: 2rem;
        }
    }
</style>
