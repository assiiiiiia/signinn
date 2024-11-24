<template>
    <div class="modal" v-if="isModalVisible">
      <article class="modal-container">
        <header class="modal-container-header">
          <span class="modal-container-title">
            <svg
              aria-hidden="true"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M14 9V4H5v16h6.056c.328.417.724.785 1.18 1.085l1.39.915H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8v1h-7zm-2 2h9v5.949c0 .99-.501 1.916-1.336 2.465L16.5 21.498l-3.164-2.084A2.953 2.953 0 0 1 12 16.95V11zm2 5.949c0 .316.162.614.436.795l2.064 1.36 2.064-1.36a.954.954 0 0 0 .436-.795V13h-5v3.949z"
                fill="currentColor"
              ></path>
            </svg>
            Terms and Services
          </span>
          <button class="icon-button" @click="closeModal">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </header>
        <section class="modal-container-body rtf">
          <!-- Add your content here -->
          <p>Lorem ipsum dolor sit amet...</p>
          <ul>
            <li>First term</li>
            <li>Second term</li>
          </ul>
        </section>
        <footer class="modal-container-footer">
          <button class="button is-ghost" @click="closeModal">Decline</button>
          <button class="button is-primary">Accept</button>
        </footer>
      </article>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Reactive state for modal visibility
  const isModalVisible = ref(true);
  
  function closeModal() {
    isModalVisible.value = false;
  }
  </script>
  
  <style scoped>
  /* Paste your CSS here */
  .button,
  .input,
  .select,
  .textarea {
    font: inherit;
  }
  
  a {
    color: inherit;
  }
  
  /* Modal Styles */
  .modal-container {
    max-height: 400px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    background-color: #fff;
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.25);
  }
  
  /* Responsive */
  @media (max-width: 600px) {
    .modal-container {
      width: 90%;
    }
  }
  @import "vuetify/styles";
  /* Additional styles (add the rest here) */
  </style>
  