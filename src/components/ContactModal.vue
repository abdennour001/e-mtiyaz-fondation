<template>
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
                            <input type="text" class="form-control" id="nom" placeholder="Nom et Prénom">
                        </div>
                        <div class="form-group">
                            <label for="email" class="col-form-label">Email:</label>
                            <input type="email" class="form-control" id="email" placeholder="example@gmail.com">
                        </div>
                        <div class="form-group">
                            <label for="tel" class="col-form-label">Téléphone:</label>
                            <input type="number" class="form-control" id="tel" placeholder="Téléphone">
                        </div>
                        <div class="form-group">
                            <label for="etablissement" class="col-form-label">Etablissement:</label>
                            <input type="text" class="form-control" id="etablissement" placeholder="Etablissement">
                        </div>
                        <div class="form-group">
                            <label for="niveau" class="col-form-label">Niveau:</label>
                            <input type="text" class="form-control" id="niveau" placeholder="Niveau">
                        </div>
                        <div class="form-group">
                            <label for="sujet" class="col-form-label">Sujet:</label>
                            <input type="text" class="form-control" id="sujet" placeholder="Sujet">
                        </div>
                        <div class="form-group">
                            <label for="message" class="col-form-label">Message:</label>
                            <textarea class="form-control" id="message" placeholder="Votre Message"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="button-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="button-primary">Send message</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

  import $ from 'jquery';

  export default {
    name: 'ContactModal',
    mounted() {
      $(document).ready(function () {
        $('#exampleModal').on('show.bs.modal', function (event) {
          // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
          // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
          let modal = $(this)
        })
      })
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
</style>
