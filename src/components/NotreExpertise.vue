<template>
    <div class="container-fluid cool mb-5">
        <div class="row text-center justify-content-center welcome">
            <div class="col-12 mt-4">
                <h1 class="display-5" style="text-transform: uppercase">Notre Expertise</h1>
            </div>
            <div class="col-6 mb-4">
                <hr class="blue">
            </div>
            <div class="col-12">
                <div class="row text-center justify-content-center">
                    <div class="col-12 my-5">
                        <h4 id='p-1' style="font-weight: 400;">Donner aux étudiants les outils pour entreprendre activement et efficacement leur entrée sur le marché de l’emploi</h4>
                    </div>
                    <div class="col-lg-3 col-md-12 col-12-sm">
                        <div class="d-flex flex-column">
                            <div class="circle mb-3 icon-1"></div>
                            <p id="p-2" class="lead">Mettre notre expertise de coaching de profils étudiants au service de leur insertion professionnelle.</p>
                        </div>
                    </div>
                    <div class="col-lg-1 col-md-12 col-sm-12 align-self-center plus">
                        <i class="fas fa-plus fa-lg"></i>
                    </div>
                    <div class="col-lg-3 col-md-12 col-12-sm">
                        <div class="d-flex flex-column">
                            <div class="circle mb-3 icon-2"></div>
                            <p id="p-3" class="lead">Proposer une aide personnalisée à chacun des lauréats de nos programmes.</p>
                        </div>
                    </div>
                    <div class="col-lg-1 col-md-12 col-sm-12 align-self-center plus">
                        <i class="fas fa-plus fa-lg"></i>
                    </div>
                    <div class="col-lg-3 col-md-12 col-12-sm">
                        <div class="d-flex flex-column">
                            <div class="circle mb-3 icon-3"></div>
                            <p id="p-4" class="lead">Mettre le réseau e-mtiyaz à disposition des primo-demandeurs d’emploi.</p>
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
                        <h1 class="orange" style="font-weight: normal; font-size: 3.5rem">Pourquoi ?</h1>
                    </div>
                    <div class="col-12">
                        <p class="lead" style="font-size: 2rem">
                            Afin de se préparer plus efficacement à s’insérer sur le marché de l’emploi et impulser sa future carrière professionnelle !
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
    }
    .cool {
        background: url("../assets/background/cool-bgmdpi.png") no-repeat center;
        background-size: cover;
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
</style>
