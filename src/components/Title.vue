<template>
    <div id="title" class="container-fluid">
        <div class="row">
            <div class="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
                <div class="col-12 mt-5">
                    <img class="logo-img" src="../assets/logo/e-mtiyaz-logo-v3-fondation-white.png"/>
                </div>
                <div class="col-12 margin-3">
                    <p class="lead">Depuis 2013, e-mtiyaz œuvre à faire de l’Algérie une terre d’excellence académique</p>
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
        </div>
    </div>
</template>

<script>

  export default {
    name: 'Title'
  }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';
    #title {
        color: $font-color-light;
        margin-top: 140px;
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

    /** media queries **/
    @media screen and (min-width: 992px) and (max-width: 1134px){
        .button {
            width: 50%;
        }
        .button:hover {
            width: 60%;
        }
    }

    @media screen and (min-width: 992px) { /* medium screen */
        .logo-img {
            width: 75%;
        }
    }
    @media screen and (max-width: 992px) { /* medium screen */
        .logo-img {
            width: 35%;
        }
        .button {
            width: 30%;
        }
        .button:hover {
            width: 35%;
        }
    }
    @media screen and (max-width: 772px) and (min-width: 500px) { /* tablet screen */
        .button {
            font-size: 1em;
            font-weight: 300;
            width: 35%;
        }
        .lead {
            font-size: 1.3rem;
        }
        .button:hover {
            width: 40%;
        }
    }

    @media screen and (max-width: 654px) and (min-width: 332px) {
        .logo-img {
            width: 80%;
        }
        .lead {
            font-size: 1.2rem;
        }
        .button {
            font-size: 1em;
            font-weight: 300;
            width: 70%;
        }
        .button:hover {
            width: 90%;
        }
    }

    @media screen and (max-width: 332px) {
        .logo-img {
            width: 85%;
        }
        .lead {
            font-size: 1.1rem;
        }
        .button {
            font-size: 1em;
            font-weight: 300;
            width: 90%;
        }
        .button:hover {
            width: 95%;
        }
    }

</style>
