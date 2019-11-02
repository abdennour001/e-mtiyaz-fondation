<template>
    <div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Contactez-nous</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body vld-parent text-left" ref="formContainer">
                        <form>
                            <div class="form-group">
                                <label for="nom" class="col-form-label">Nom et Prénom:</label>
                                <input v-model="nom" type="text" class="form-control" id="nom" placeholder="Nom et Prénom">
                                <label v-if="!nom && firstSubmit" for="nom" class="text-danger" style="padding: 0; margin: 0;padding-left: 13px">Champ requis</label>
                            </div>
                            <div class="form-group">
                                <label for="email" class="col-form-label">Email:</label>
                                <input v-model="email" type="email" class="form-control" id="email" placeholder="example@gmail.com">
                                <label v-if="!email && firstSubmit" for="nom" class="text-danger" style="padding: 0; margin: 0;padding-left: 13px">Champ requis</label>
                            </div>
                            <div class="form-group">
                                <label for="tel" class="col-form-label">Téléphone:</label>
                                <input v-model="tel" type="number" class="form-control" id="tel" placeholder="Téléphone">
                                <label v-if="!tel && firstSubmit" for="nom" class="text-danger" style="padding: 0; margin: 0;padding-left: 13px">Champ requis</label>
                            </div>
                            <div class="form-group">
                                <label for="ville" class="col-form-label">Ville:</label>
                                <input v-model="ville" type="text" class="form-control" id="ville" placeholder="ville">
                                <label v-if="!ville && firstSubmit" for="nom" class="text-danger" style="padding: 0; margin: 0;padding-left: 13px">Champ requis</label>
                            </div>
                            <div class="form-group">
                                <label for="etablissement" class="col-form-label">Etablissement:</label>
                                <input v-model="etablissement" type="text" class="form-control" id="etablissement" placeholder="Etablissement">
                                <label v-if="!etablissement && firstSubmit" for="nom" class="text-danger" style="padding: 0; margin: 0;padding-left: 13px">Champ requis</label>
                            </div>
                            <div class="form-group">
                                <div class="py-2">
                                    <hr>
                                </div>
                                <label class="col-form-label">Sujet:</label>
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="choice text-center" :class="{ 'choice-picked' : checked === 'coach' }" @click="choiceClick('coach')">
                                        <span>Coach</span>
                                    </div>
                                    <div class="choice text-center" :class="{ 'choice-picked' : checked === 'mentor' }" @click="choiceClick('mentor')">
                                        <span>Mentor</span>
                                    </div>
                                    <div class="choice text-center" :class="{ 'choice-picked' : checked === 'donateur' }" @click="choiceClick('donateur')">
                                        <span>Donateur</span>
                                    </div>
                                    <div class="choice text-center" :class="{ 'choice-picked' : checked === 'autre' }" @click="choiceClick('autre')">
                                        <span>Autre</span>
                                    </div>
                                </div>
                                <div v-if="checked === 'donateur'">
                                    <label class="col-form-label">Je suis:</label>
                                    <div class="d-flex justify-content-center align-items-center">
                                        <div class="choice text-center" :class="{ 'choice-picked' : this.checkedDon === 'particulier' }" @click="choiceClick2('particulier')">
                                            <span>Particulier</span>
                                        </div>
                                        <div class="choice text-center" :class="{ 'choice-picked' : this.checkedDon === 'entreprise' }" @click="choiceClick2('entreprise')">
                                            <span>Entreprise</span>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="checked === 'coach' || checked === 'mentor'" class="mt-2">
                                    <div class="form-group">
                                        <label for="cv" class="col-form-label">Veuillez insérer votre CV:</label>
                                        <input type="file" accept="application/pdf" class="form-control" id="cv" ref="cv" v-on:change="handleFileUpload()">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="message" class="col-form-label">Message:</label>
                                <textarea v-model="msg" class="form-control" id="message" placeholder="Votre Message"></textarea>
                                <label v-if="!msg && firstSubmit" for="nom" class="text-danger" style="padding: 0; margin: 0;padding-left: 13px">Champ requis</label>
                            </div>
                        </form>
                        <loading :active.sync="isLoading"
                                 :is-full-page="true"></loading>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="button-secondary" data-dismiss="modal">Fermer</button>
                        <button type="button" @click="contactCall" class="button-primary">Envoyer le message</button>
                    </div>
                </div>
            </div>
        </div>

        <div id="success" class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Message a été envoyé</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Vous avez envoyé le message avec succès
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

  import $ from 'jquery';

  import Vue from 'vue';
  // Import component
  import Loading from 'vue-loading-overlay';
  // Import stylesheet
  import 'vue-loading-overlay/dist/vue-loading.css';
  // Init pluginindex
  Vue.use(Loading);


  export default {
    name: 'ContactModal',
    components: Loading,
    data() {
      return {
        nom: '',
        email:'',
        tel:'',
        ville: '',
        etablissement: '',
        msg: '',
        cv: '',
        firstSubmit: false,
        success: false,
        checked: 'autre',
        checkedDon: 'particulier',
      }
    },
    mounted() {

    },
    methods: {
      contactCall() {
        this.firstSubmit = true;
        if (this.nom && this.email && this.tel && this.ville && this.etablissement && this.msg) {

          let loader = this.$loading.show({
            // Optional parameters
            container: this.fullPage ? null : this.$refs.formContainer,
            color: '#2a86c8',
          });

          let data = new FormData();
          data.append('nom', this.nom);
          data.append('email', this.email);
          data.append('tel', this.tel);
          data.append('ville', this.ville);
          data.append('etablissement', this.etablissement);
          data.append('sujet', this.checked);
          data.append('donateur', this.checkedDon);
          data.append('msg', this.msg);
          if (this.checked === 'coach' || this.checked === 'mentor') {
            data.append('cv', this.cv);
          }

          this.axios.post("contact.php", data,
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })
            .then(async response => {
              if (response.data.includes('Message has been sent')) {
                loader.hide();
                $('#exampleModal').modal('hide');
                $('#success').modal('show');
              } else {
                console.log(response);
              }
            })
            .catch(e => {
              console.error(e);
            });
        }
      },
      choiceClick(text) {
        if (this.checked !== text) {
          this.checked = text;
        } else {
          this.checked = 'autre';
        }
      },
      choiceClick2(text) {
        if (this.checkedDon !== text) {
          this.checkedDon = text;
        } else {
          this.checkedDon = 'particulier';
        }
      },
      handleFileUpload() {
        this.cv = this.$refs.cv.files[0];
        console.log(this.cv);
      }
    }
  }
</script>

<style lang="scss" scoped>

    @import '../variables.scss';

    .modal-header {
        background: linear-gradient(256deg, $light-blue-color, $dark-blue-color);
        color: $font-color-light;
    }
    .modal-footer {
        background: linear-gradient(163deg, $light-blue-color, $dark-blue-color);
        color: $font-color-light;
    }
    .button-primary {
        display: inline-block;
        text-decoration: none;
        border-radius: 200px;
        font-size: 1em;
        font-weight: 400;
        padding: 10px;
        color: $font-color-light;
        background: transparent;
        border: 1px solid $font-color-light;
        transition: 0.5s ease;
    }
    .button-primary:hover {
        background: $font-color-light;
        color: $dark-blue-color;
        border: 1px solid transparent;
    }
    .button-secondary {
        display: inline-block;
        text-decoration: none;
        border-radius: 200px;
        font-size: 1em;
        font-weight: 400;
        padding: 10px;
        color: $font-color-light;
        background: transparent;
        border: 1px solid $font-color-light;
        transition: 0.5s ease;
    }
    .button-secondary:hover {
        background: $font-color-light;
        color: $dark-blue-color;
        border: 1px solid transparent;
    }
    input {
        border-radius: 100px;
    }
    textarea {
        border-radius: 10px;
    }
    .choice {
        color: $dark-blue-color;
        background: $font-color-light;
        border: 1px solid $dark-blue-color;
        padding: .5rem;
        margin: .3rem;
        width: 25%;
        border-radius: 200px;
        transition: 0.5s ease;
    }
    .choice:hover {
        cursor: pointer;
        background: linear-gradient(153deg, $light-blue-color, $dark-blue-color);
        color: $font-color-light;
        border: 1px solid transparent;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    }
    .choice:active {
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    }
    .choice-picked {
        background: linear-gradient(153deg, $light-blue-color, $dark-blue-color);
        border: 1px solid transparent;
        color: $font-color-light;
        border-radius: 200px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 576px) { /* mobile screen */
        .choice {
            width: 30%;
            padding: .4rem;
        }
    }
</style>
