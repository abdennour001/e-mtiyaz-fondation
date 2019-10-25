<template>
    <div class="container-fluid jumbotron">
        <div class="d-flex justify-content-center align-items-center">
            <a class="button Contactez-nous" href="#"
               data-toggle="modal" data-target="#exampleModal" data-whatever="Rejoignez la foundation e-mtiyaz">
                Contribuez par un don!
                <i class="fas fa-arrow-alt-circle-up align-middle ml-1" style="font-size: 1.7rem"></i>
            </a>
        </div>
    </div>
</template>

<script>

  import $ from 'jquery';
  import ScrollReveal from 'scrollreveal';

  export default {
    name: 'Don',
    mounted() {

      window.sr = ScrollReveal({ reset: false });
      sr.reveal('.don-1', {
        duration: 1000,
        origin: 'left',
        distance: '60px'
      })
      sr.reveal('.don-2', {
        duration: 1000,
        origin: 'left',
        delay: 500,
        distance: '60px'
      })
    }
  }
</script>

<style lang="scss" scoped>

    @import '../variables.scss';

    strong {
        font-weight: 500;
    }
    .button {
        display: inline-block;
        text-decoration: none;
        border-radius: 200px;
        font-size: 1.2em;
        font-weight: 400;
        width: 35%;
        padding: 10px;
        color: $dark-blue-color;
        border: 1px solid $dark-blue-color;
        transition: 0.5s ease;
    }
    .fa-arrow-alt-circle-up {
        transition: 0.5s ease-out;
    }
    .button:hover {
        background: linear-gradient(173deg, $light-blue-color, $dark-blue-color);
        color: $font-color-light;
        width: 40%;
        border: 1px solid transparent;
        .fa-arrow-alt-circle-up {
            transform: translateX(20px) rotate(90deg + 360deg);
        }
    }

    @media screen and (max-width: 992px) { /* large screen */
        .button {
            width: 40%;
        }
        .button:hover {
            width: 45%;
        }
    }

    @media screen and (max-width: 772px) and (min-width: 500px) { /* tablet screen */
        .button {
            font-size: 1em;
            font-weight: 300;
            width: 50%;
        }
        .button:hover {
            width: 40%;
        }
    }
    @media screen and (max-width: 654px) and (min-width: 332px) {
        .button {
            font-size: 1em;
            font-weight: 300;
            width: 75%;
        }
        .button:hover {
            width: 75%;
        }
    }
    @media screen and (max-width: 332px) {
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
