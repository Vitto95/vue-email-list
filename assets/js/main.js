/* Consegna:generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Bonus: far comparire gli indirizzi email solamente quando sono stati tutti generati. */

const app = new Vue({
  el: "#app",
  data: {
    emails: [],
    isEmailsFull: false,
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((resp) => {
          console.log("resp:", resp);
          this.emails.push(resp.data.response);
          console.log("emails in fase di push: ", this.emails);
          if (this.emails.length === 10) {
            this.isEmailsFull = true;
            console.log("Array di email: ", this.emails);
          }
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    }
  },
  methods: {},
});
