<template>
    <footer class="mt-4">
        <div class="container-fluid">
            <div class="row text-center">
                <div class="col-md-12">
                    <div class="d-flex justify-content-center align-items-center mt-2">
                        <img class="logo-image" src="../assets/logo/e-mtiyaz-logo-v3-fondation-white.png">
                    </div>
                    <hr class="light">
                    <p>05 52 14 22 44</p>
                    <p>foundation@e-mtiyaz.com</p>
                    <p>Dar Diaf - 98 Lot Benhaddadi Said</p>
                    <p>Chéraga - Alger</p>
                </div>
                <div class="col-12 my-2">
                    <a class="button scrollTo" href="" data-scroll="#section_rendez_vous">Contactez-nous</a>
                </div>
                <div class="col-12">
                    <hr class="light">
                    <p>&reg; foundation.e-mtiyaz.com | Tous droits réservés</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';
    footer {
        background-color: $font-color-dark;
        color: whitesmoke;
        padding-top: 1rem;
        padding-bottom: .7rem;
    }

    .logo-image {
        max-width: 203px;
        margin-right: 10px;
    }
    .display-4 {
        font-size: 1rem;
    }
    .button {
        text-decoration: none;
        border-radius: 200px;
        padding: 10px;
        border: 1px solid $font-color-light;
        color: $font-color-light;
        transition: 0.5s ease;
    }
    .button:hover {
        background: $font-color-light;
        color: $font-color-dark;
    }
</style>
