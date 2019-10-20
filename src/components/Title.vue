<template>
    <div id="title" class="container-fluid ml-4">
        <div class="row">
            <div class="col-lg-6 col-sm-12">
                <div class="col-12 mt-5">
                    <img class="logo-img" src="../assets/logo/e-mtiyaz-logo-v3-fondation-white.png"/>
                </div>
                <div class="col-12 margin-3">
                    <p class="lead">e-mtiyaz est un centre éducatif qui œuvre depuis 2013 à faire de l’Algérie une terre d’excellence académique</p>
                </div>
                <div class="col-12 margin-2">
                    <a class="button Contactez-nous"
                       data-toggle="modal" data-target="#exampleModal"
                       href="#">
                        Contactez-nous
                        <i class="fas fa-arrow-alt-circle-up align-middle ml-2" style="font-size: 1.7rem"></i>
                    </a>
                </div>
            </div>
            <div class="col-lg-6">
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Title',
  }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';
    #title {
        color: $font-color-light;
        margin-top: 140px;
    }
    h1 {
        font-size: 3em;
        font-weight: 600;
        color: $font-color-light;
    }
    h1.e-mtiyaz {
        font-weight: 300;
    }
    h3 {
        font-weight: 500;
        letter-spacing: 1px;
        color: $font-color-light;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
    .lead-2 {
        font-size: 1.1rem;
        font-weight: 300;
    }
    .button {
        display: inline-block;
        text-decoration: none;
        border-radius: 200px;
        font-size: 1.1em;
        font-weight: 400;
        padding: 10px;
        width: 40%;
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
        width: 45%;
        .fa-arrow-alt-circle-up {
            transform: translateX(30px) rotate(90deg + 360deg);
        }
    }
    .margin-1 {
        margin-top: 10px;
    }
    .margin-2 {
        margin-top: 20px;
    }
    .margin-3 {
        margin-top: 40px;
    }
    .read-more {
        text-decoration: none;
        color: $font-color-light;
        font-size: 1.2em;
        font-weight: 400;
        transition: 0.5s ease;
    }
    .read-more:hover {
        opacity: 0.8;
    }
    .read-more-icon {
        margin-right: 10px;
        transition: 0.5s ease;
    }
    .read-more:hover .read-more-icon {
        transform: translateX(7px);
    }

    /** media queries **/
    @media screen and (min-width: 992px) { /* medium screen */
        .logo-img {
            width: 50%;
        }
    }
    @media screen and (max-width: 992px) { /* medium screen */
        .lead-1 {
            font-size: 1.1rem;
            font-weight: 300;
        }
        .lead-2 {
            font-size: 1.0rem;
            font-weight: 300;
        }
        .logo-img {
            width: 50%;
        }
    }
    @media screen and (max-width: 768px) { /* tablet screen */
        .lead-1 {
            font-size: 1.0rem;
            font-weight: 300;
        }
        .lead-2 {
            font-size: 1rem;
            font-weight: 300;
        }
        .button {
            font-size: 1em;
            font-weight: 300;
        }
    }
    @media (max-width: 576px) { /* mobile screen */
        .lead-1 {
            font-size: 1rem;
            font-weight: 300;
        }
        .lead-2 {
            font-size: 1rem;
            font-weight: 300;
        }
        .button {
            font-size: 1em;
            font-weight: 300;
        }
    }

</style>
