<template>
  <div class="flex flex-col items-center" @keyup.enter="addTransaction">
    <h1>Add Transaction</h1>

    <div class="toggle-switch">
      <input
        type="radio"
        id="debit"
        name="transaction_type"
        v-model="form.type"
        value="debit"
      />
      <label for="debit">Debit</label>

      <input
        type="radio"
        id="credit"
        name="transaction_type"
        v-model="form.type"
        value="credit"
      />
      <label for="credit">Credit</label>
    </div>

    <template v-if="errors">
      <ul>
        <li v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
    </template>

    <div class="input-field">
      <label for="description">Description</label>
      <input
        type="text"
        id="description"
        name="transaction_description"
        placeholder="Enter Your Description"
        v-model="form.description"
      />
    </div>
    <div class="input-field">
      <label for="amount">Amount</label>
      <span class="currency">$</span>
      <input
        type="text"
        id="amount"
        name="amount"
        placeholder="Enter Amount"
        v-model="form.amount"
      />
    </div>
    <div class="mb-12">
      <button @click="addTransaction">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        type: 'debit',
        description: '',
        amount: '',
      },
      errors: [],
      error: '',
    };
  },
  methods: {
    addTransaction() {
      if (this.validForm()) {
        this.$store.dispatch('addTransaction', this.form);
        this.$router.push({ path: '/transactions' });
      }
    },
    validForm() {
      this.errors = [];
      if (!this.form.description && !this.form.amount) {
        this.errors.push('Description & Amount are required');
        return false;
      }
      if (!this.form.description) {
        this.errors.push('Description is required');
        return false;
      }
      if (!this.form.amount) {
        this.errors.push('Amount is required');
        return false;
      }
      return true;
    },
  },
};
</script>

<style scoped>
.toggle-switch {
  display: flex;
  margin-bottom: 36px;
  overflow: hidden;
}
.input-field {
  display: flex;
  flex-direction: column;
  width: 20em;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}

.input-field label {
  font-size: 0.75em;
  margin-bottom: 10px;
}

.input-field input {
  padding: 10px 0;
}

.currency {
  font-size: 25px;
  padding: 2px 8px 0 0;
  color: #999;
}

.toggle-switch input {
  position: absolute !important;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  width: 1px;
  border: 0;
  overflow: hidden;
}

.toggle-switch label {
  background-color: #ebf8ff;
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  line-height: 1;
  text-align: center;
  padding: 1.2em 1.6em;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
  transition: all 0.1s ease-in-out;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.2em;
}

.toggle-switch label:hover {
  cursor: pointer;
}

.toggle-switch input:checked + label {
  background-color: #2a4365;
  color: #ebf8ff;
  box-shadow: none;
}

.toggle-switch label:first-of-type {
  border-radius: 10px 0 0 10px;
}

.toggle-switch label:last-of-type {
  border-radius: 0 10px 10px 0;
}
</style>
