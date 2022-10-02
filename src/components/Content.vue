<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-4">
        <AboutMe></AboutMe>
        <Form></Form>
      </div>
      <div class="col-8">
        <div class="col-12 m-2">
          <div class="form-check">
            <input
                v-model="order"
                @click="clicked"
                class="form-check-input" type="checkbox" id="newestCommentsShow" required>
            <label class="form-check-label" for="newestCommentsShow">
              Show newest comments first
            </label>
          </div>
        </div>
        <div class="card w-100">
          <div class="card-body">
            <h2 class="card-title">TITLE HEADING</h2>
            <h5 class="card-subtitle">Title description, Dec 7, 2020</h5>
            <p class="card-text">
              Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>

          <div
              v-for="comment in comments"
              :key="comment.id"
              class="card w-75 m-3">
            <div class="card-body">
              <h3 class="card-title mb-2">{{ comment.title }}</h3>
              <h5 class="card-subtitle text-black-50 mb-2">{{ comment.name }}</h5>
              <h6 class="card-subtitle text-black-50 mb-2">{{ comment.created_at}}</h6>
              <p class="card-text">{{ comment.content }}</p>
              <a href="#" class="link-primary">{{ comment.email }}</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AboutMe from "./items/AboutMe.vue";
import Form from "./items/Form.vue";
import {computed, onMounted, reactive, ref} from "vue";
import {getComments} from "@/helpers/comments";

const order = ref(false)
const commentsObj = getComments(order.value)

const comments = computed(() => {
  return commentsObj
})

onMounted(() => {
  getComments(order.value)
})

function clicked() {
  order.value = !order.value
  getComments(order.value)
}
</script>