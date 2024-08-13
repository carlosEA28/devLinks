import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { FormEvent, useState } from "react";

import { db } from "../../Services/firebaseConnection";
import { setDoc, doc } from "firebase/firestore";

export function Newtworks() {
  const [linkedin, setLinkedin] = useState("");
  const [instagram, setInstagram] = useState("");

  async function handleRegister(e: FormEvent) {
    e.preventDefault();

    await setDoc(doc(db, "social", "link"), {
      linkedin: linkedin,
      instagram: instagram,
    })
      .then(() => {
        console.log("Cadastrado");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />

      <h1 className="text-white text-2xl font-medium mt-8 mb-4">
        Minhas Redes Sociais
      </h1>

      <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
        <label className="text-white font-medium mt-2 mb-2" htmlFor="">
          Linkedin
        </label>
        <Input
          placeholder="Digite o link do linkedin"
          type="url"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />

        <label className="text-white font-medium mt-2 mb-2" htmlFor="">
          Linkedin
        </label>
        <Input
          placeholder="Digite o link do Instagram"
          type="url"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />

        <button
          type="submit"
          className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium"
        >
          Salvar Links
        </button>
      </form>
    </div>
  );
}
