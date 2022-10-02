<template>
  <h2>Create your comment.</h2>
  <form
      class="row g-3 needs-validation"
      novalidate
      @submit.prevent="submit()"
  >
    <div class="col-md-12">
      <label for="validationName" class="form-label">Name</label>
      <input
          type="text"
          class="form-control"
          id="validationName"
          :class="{'is-invalid': !form.name.valid && form.name.touched, 'is-valid': form.name.valid}"
          @blur="form.name.blur"
          v-model="form.name.value"
      >
      <small class="text-muted">min 3 / {{form.name.value.length}} / max 50</small>
      <small class="invalid-feedback" v-if="form.name.errors.required">
        The field cannot be empty!
      </small>
      <small class="invalid-feedback" v-if="form.name.errors.minLength">
        The number of characters is less than the allowed number!
      </small>
      <small class="invalid-feedback" v-if="form.name.errors.maxLength">
        You have exceeded the allowed number of characters!
      </small>
      <small class="valid-feedback" v-if="form.name.valid">
        Looks good!
      </small>
    </div>
    <div class="col-md-12">
      <label for="validationEmail" class="form-label">Email</label>
      <input
          type="text"
          class="form-control"
          id="validationEmail"
          :class="{'is-invalid': !form.email.valid && form.email.touched, 'is-valid': form.email.valid}"
          @blur="form.email.blur"
          v-model="form.email.value"
      >
      <small class="text-muted">min 3 / {{form.email.value.length}} / max 20</small>
      <small class="invalid-feedback" v-if="form.email.errors.required">
        The field cannot be empty!
      </small>
      <small class="invalid-feedback" v-if="form.email.errors.minLength">
        The number of characters is less than the allowed number!
      </small>
      <small class="invalid-feedback" v-if="form.email.errors.maxLength">
        You have exceeded the allowed number of characters!
      </small>
      <small class="invalid-feedback" v-if="form.email.errors.isEmail">
        Your email is not valid!
      </small>
      <small class="valid-feedback" v-if="form.email.valid">
        Looks good!
      </small>
    </div>
    <div class="col-md-12">
      <label for="validationTitle" class="form-label">Title</label>
      <input
          type="text"
          class="form-control"
          id="validationTitle"
          :class="{'is-invalid': !form.title.valid && form.title.touched, 'is-valid': form.title.valid}"
          @blur="form.title.blur"
          v-model="form.title.value"
      >
      <small class="text-muted">min 10 / {{form.title.value.length}} / max 50</small>
      <small class="invalid-feedback" v-if="form.title.errors.required">
        The field cannot be empty!
      </small>
      <small class="invalid-feedback" v-if="form.title.errors.minLength">
        The number of characters is less than the allowed number!
      </small>
      <small class="invalid-feedback" v-if="form.title.errors.maxLength">
        You have exceeded the allowed number of characters!
      </small>
      <small class="valid-feedback" v-if="form.title.valid">
        Looks good!
      </small>
    </div>
    <div class="col-md-12">
      <label for="validationContent" class="form-label">Content</label>
      <textarea
          class="form-control"
          id="validationContent"
          :class="{'is-invalid': !form.content.valid && form.content.touched, 'is-valid': form.content.valid}"
          @blur="form.content.blur"
          v-model="form.content.value"
      ></textarea>
      <small class="text-muted">min 10 / {{form.content.value.length}} / max 300</small>
      <small class="invalid-feedback" v-if="form.content.errors.required">
        The field cannot be empty!
      </small>
      <small class="invalid-feedback" v-if="form.content.errors.minLength">
        The number of characters is less than the allowed number!
      </small>
      <small class="invalid-feedback" v-if="form.content.errors.maxLength">
        You have exceeded the allowed number of characters!
      </small>
      <small class="valid-feedback" v-if="form.content.valid">
        Looks good!
      </small>
    </div>
    <div class="col-12">
      <button
          class="btn btn-primary"
          type="submit"
          :disabled="!form.valid"
      >Create Comment</button>
    </div>
  </form>
</template>

<script setup>
import {useForm} from "@/helpers/form";
import {maxLength, minLength, required, email} from '@/helpers/validation'
import {reactive} from "vue";
import config from '@/config/index'
import api from '@/api/index'

const form = useForm({
  title: {
    value: '',
    validators: {required, minLength: minLength(10), maxLength: maxLength(50)}
  },
  content: {
    value: '',
    validators: {required, minLength: minLength(10), maxLength: maxLength(300)}
  },
  name: {
    value: '',
    validators: {required, minLength: minLength(3), maxLength: maxLength(50)}
  },
  email: {
    value: '',
    validators: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(20),
      isEmail: email
    }
  }
})

function submit() {
  const data = reactive({})
  for (const [key, value] of Object.entries(form)) {
    data[key] = value.value
  }

  api.post(config.url + '/create', data)
    .then(response => {
      console.log(response)
    })
    .catch(error => (console.log(error.toJSON())))
}
</script>