<template>
  <div class="flex flex-col items-center">
    <h1>Add Transaction</h1>

    <div class="toggle-switch">
      <input
        type="radio"
        id="debit"
        name="transaction_type"
        v-model="form.type"
        value="debit"
        checked
      />
      <label for="debit">Debit</label>

      <input
        type="radio"
        id="crdit"
        name="transaction_type"
        v-model="form.type"
        value="credit"
      />
      <label for="credit">Credit</label>
    </div>

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
      <div>
        <button>Add</button>
      </div>
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
    };
  },
};
</script>

<style scoped>
.toggle-switch {
  display: flex;
  margin-bottom: 36px;
  overflow: hidden;
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
