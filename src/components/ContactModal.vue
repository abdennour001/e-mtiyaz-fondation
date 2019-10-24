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
                    <div class="modal-body text-left">
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
                                <label for="etablissement" class="col-form-label">Etablissement:</label>
                                <input v-model="etablissement" type="text" class="form-control" id="etablissement" placeholder="Etablissement">
                                <label v-if="!etablissement && firstSubmit" for="nom" class="text-danger" style="padding: 0; margin: 0;padding-left: 13px">Champ requis</label>
                            </div>
                            <div class="form-group">
                                <label for="niveau" class="col-form-label">Niveau d'étude (si étudiant):</label>
                                <input v-model="niveau" type="text" class="form-control" id="niveau" placeholder="Niveau">
                                <label v-if="!niveau && firstSubmit" for="nom" class="text-danger" style="padding: 0; margin: 0;padding-left: 13px">Champ requis</label>
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
                            </div>
                            <div class="form-group">
                                <label for="message" class="col-form-label">Message:</label>
                                <textarea v-model="msg" class="form-control" id="message" placeholder="Votre Message"></textarea>
                                <label v-if="!msg && firstSubmit" for="nom" class="text-danger" style="padding: 0; margin: 0;padding-left: 13px">Champ requis</label>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="button-secondary" data-dismiss="modal">Close</button>
                        <button type="button" @click="contactCall" class="button-primary">Send message</button>
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

  export default {
    name: 'ContactModal',
    data() {
      return {
        nom: '',
        email:'',
        tel:'',
        niveau: '',
        etablissement: '',
        msg: '',
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
        if (this.nom && this.email && this.tel && this.niveau && this.etablissement && this.msg) {
          let data = new FormData();
          data.append('nom', this.nom);
          data.append('email', this.email);
          data.append('tel', this.telephone);
          data.append('niveau', this.niveau);
          data.append('etablissement', this.etablissement);
          data.append('sujet', this.checked);
          data.append('donateur', this.checkedDon);
          data.append('msg', this.msg);

          this.axios.post("http://127.0.0.1/e-mtiyaz-foundation/contact.php", data)
            .then(async response => {
              if (response.data.includes('Message has been sent')) {
                $('#success').modal('show')
                $('#exampleModal').modal('hide')
              } else {
                alert('something goes wrong...')
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
</style>
