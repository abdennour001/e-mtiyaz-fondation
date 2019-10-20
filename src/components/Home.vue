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
        <!-- e-mtiyaz en quelques mots -->
        <JumbotronAbout id="section_quelque_mot"></JumbotronAbout>
        <Vision></Vision>
        <NotreExpertise></NotreExpertise>
        <NosLaureats></NosLaureats>
        <NosPartenaires></NosPartenaires>
        <Temoignages></Temoignages>
        <NousSoutenir></NousSoutenir>
        <Don></Don>
        <Location></Location>
        <Footer></Footer>
    </div>
</template>

<script>
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
  export default {
    name: 'Home',
    components: { Footer, Location, Don, NousSoutenir, Temoignages, NosPartenaires, NosLaureats, NotreExpertise, Missions, Vision, JumbotronAbout, Title, Navigation }
  }
</script>

<style lang="scss" scoped>

    @import "../variables.scss";

    .header {
        position: relative;
        margin-top: -75px;
        background: url(../assets/background/main-bg-final-testmdpi.svg) no-repeat center;
        background-size: cover;
        height: 140vh;
        overflow: hidden;
    }

</style>
