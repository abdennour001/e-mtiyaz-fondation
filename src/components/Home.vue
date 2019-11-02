<template>
    <div>
        <!-- Navigation Section -->
        <Navigation></Navigation>
        <div id="section_home" class="header">
            <div class="header-content">
                <!-- Title Section -->
                <Title></Title>
            </div>
        </div>
        <div class="hidden">
            <!-- e-mtiyaz en quelques mots -->
            <JumbotronAbout id="section_quelque_mot"></JumbotronAbout>
            <Vision id="section_vision"></Vision>
            <NotreExpertise id="section_expertise"></NotreExpertise>
            <NosLaureats id="section_laureats"></NosLaureats>
            <!--        <NosPartenaires id="section_partenaires"></NosPartenaires>-->
            <!--        <Temoignages></Temoignages>-->
            <NousSoutenir id="section_soutenir"></NousSoutenir>
            <Don></Don>
            <Location id="contact"></Location>
            <Footer></Footer>

            <ContactModal></ContactModal>
            <!-- Go up button-->
            <a id="topBtn" href=""><i class="fas fa-arrow-up"></i></a>
        </div>
    </div>
</template>

<script>

  import $ from 'jquery';
  import ScrollReveal from 'scrollreveal';


  import Navigation from './Navigation'
  import Title from './Title'
  import JumbotronAbout from './JumbotronAbout'
  import Vision from './Vision'
  import Missions from './Missions'
  import NotreExpertise from './NotreExpertise'
  import NosLaureats from './NosLaureats'
  import NosPartenaires from './NosPartenaires'
  import Temoignages from './Temoignages'
  import NousSoutenir from './NousSoutenir'
  import Don from './Don'
  import Location from './Location'
  import Footer from './Footer'
  import ContactModal from './ContactModal'
  export default {
    name: 'Home',
    components: { ContactModal, Footer, Location, Don, NousSoutenir, Temoignages, NosPartenaires, NosLaureats, NotreExpertise, Missions, Vision, JumbotronAbout, Title, Navigation },
    mounted() {

      window.srTitle = ScrollReveal({ reset: true });
      window.sr = ScrollReveal({ reset: false });
      srTitle.reveal('#title', {
        duration: 1000,
        origin: 'top',
        distance: '50px'
      })
      sr.reveal('.display-5', {
        duration: 1000,
        origin: 'left',
        distance: '250px'
      })
      sr.reveal('.blue', {
        duration: 1000,
        origin: 'right',
        distance: '250px'
      });

      $(window).scroll(() => {
        if($(window).scrollTop() > 100) {
          $('#topBtn').fadeIn("slow");
        } else {
          $('#topBtn').fadeOut("slow");
        }
      });

      // Scroll up button
      $('#topBtn').click((e) => {
        e.preventDefault();
        $('html, body').animate({
          scrollTop : 0
        }, 800)
      });
      $(".scrollTo").on('click', function(e) {
        let getElem = $(this).data('scroll');
        e.preventDefault();
        if ($(getElem).length) {
          let getOffset = $(getElem).offset().top;
          let targetDistance = 70;
          $('html,body').animate({
            scrollTop : getOffset - targetDistance
          }, 500);
        }
        return false;
      });
    }

  }
</script>

<style lang="scss" scoped>

    @import "../variables.scss";

    .header {
        position: relative;
        margin-top: -75px;
        background: url("../assets/background/main-bgmdpi.png") no-repeat center center;
        background-size: cover;
        height: 140vh;
        overflow: hidden;
    }

    .hidden {
        overflow-x: hidden;
    }

    #topBtn {
        text-decoration: none;
        position: fixed;
        padding-top: .5rem;
        bottom: 40px;
        right: 40px;
        font-size: 22px;
        width: 50px;
        height: 50px;
        border-radius: 100px;
        background: $font-color-light;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
        border: none;
        cursor: pointer;
        color: $dark-blue-color;
        transition: 0.5s ease;
        display: none;
    }
    #topBtn:hover {
        color: $font-color-light;
        background: $dark-blue-color;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    }

</style>
