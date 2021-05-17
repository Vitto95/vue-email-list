/* Consegna:generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Bonus: far comparire gli indirizzi email solamente quando sono stati tutti generati. */

const app = new Vue({
  el: "#app",
  data: {
    emails: [],
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((resp) => {
          console.log("resp:", resp);
          this.emails.push(resp.data.response);
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    }
    console.log("Array di email: ", this.emails);
  },
  methods: {},
});
