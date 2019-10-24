<template>
    <div class="container-fluid jumbotron">
        <div class="d-flex justify-content-center align-items-center">
            <a class="button Contactez-nous" href="#"
               data-toggle="modal" data-target="#exampleModal" data-whatever="Rejoignez la foundation e-mtiyaz">
                Contribuez par un don!
                <i class="fas fa-arrow-alt-circle-up align-middle ml-1" style="font-size: 1.7rem"></i>
            </a>
<!--            <div class="text-left don-1">-->
<!--                <h3>Don</h3>-->
<!--                <h1><strong>Particulier</strong></h1>-->
<!--                <h5>Don ponctuel</h5>-->
<!--                <ul class="text-left ul-orange">-->
<!--                    <li>5000DZD</li>-->
<!--                    <li>10.000DZD</li>-->
<!--                    <li>30.000DZD</li>-->
<!--                </ul>-->
<!--                <h5>Don par versement mensuel</h5>-->
<!--            </div>-->
<!--            <div class="text-left don-2">-->
<!--                <h3>Don</h3>-->
<!--                <h1><strong>Entreprises</strong></h1>-->
<!--                <h5>Don ponctuel</h5>-->
<!--                <ul class="text-left ul-green">-->
<!--                    <li>50.000DZD</li>-->
<!--                    <li>100.000DZD</li>-->
<!--                    <li>200.000DZD</li>-->
<!--                </ul>-->
<!--                <h5>Don par versement mensuel</h5>-->
<!--            </div>-->
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
    ul {
        list-style-type: none;
        margin-left: 2rem;
        padding-left: 1rem;
        border-left: 2px solid #000;
        transition: 0.5s ease;
        font-weight: 400;
    }
    ul li {
        font-size: 1.1rem;
        margin-bottom: 10px;
        color: $font-color-dark;
    }
    .ul-orange {
        border-left-color: $dark-orange-color;
    }
    .ul-green {
        border-left-color: $dark-green-color;
    }
    .jumbotron {
        padding: 2rem;
    }
    .d-flex {
        padding-inline: 12rem;
    }
    strong {
        font-weight: 500;
    }
    .don-1 {
        color: $dark-orange-color;
    }
    .don-2 {
        color: $dark-green-color;
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

</style>
