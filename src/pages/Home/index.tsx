import { useEffect, useState } from "react";
import { Social } from "../../components/Social";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

import { db } from "../../Services/firebaseConnection";
import {
  getDocs,
  collection,
  orderBy,
  query,
  doc,
  getDoc,
} from "firebase/firestore";

interface LinkProps {
  id: string;
  name: string;
  url: string;
  bg: string;
  color: string;
}

interface SocialLinksProps {
  linkedin: string;
  instagram: string;
}

export function Home() {
  const [links, setLinks] = useState<LinkProps[]>([]);
  const [socialLinks, setSocialLinks] = useState<SocialLinksProps>();

  useEffect(() => {
    function loadLinks() {
      const linksRef = collection(db, "links");
      const queryRef = query(linksRef, orderBy("created", "asc"));

      getDocs(queryRef).then((snapshot) => {
        const lista = [] as LinkProps[];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            bg: doc.data().bg,
            color: doc.data().color,
          });
        });
        setLinks(lista);
      });
    }
    loadLinks();
  }, []);

  useEffect(() => {
    function loadSocialLinks() {
      const docRef = doc(db, "social", "link");
      getDoc(docRef).then((snapshot) => {
        if (snapshot !== undefined) {
          setSocialLinks({
            linkedin: snapshot.data()?.linkedin,
            instagram: snapshot.data()?.instagram,
          });
        }
      });
    }
    loadSocialLinks();
  }, []);
  return (
    <div className="flex flex-col w-full py-16 items-center justify-center">
      <h1 className=" md:text-4xl text-3xl font-bold text-white mt-20">
        Carlos Eduardo Alves Duarte
      </h1>
      <span className="text-gray-50 mb-5 mt-3 ">Veja meus Links ⬇️</span>

      <main className="felx flex-col w-11/12 max-w-xl text-center">
        {links.map((link) => (
          <section
            style={{ backgroundColor: link.bg }}
            key={link.id}
            className="bg-white mg-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer"
          >
            <a href={link.url} target="_blank">
              <p className="text-base md:text-lg">{link.name}</p>
            </a>
          </section>
        ))}

        {socialLinks && Object.keys(socialLinks).length > 0 && (
          <footer className="flex justify-center gap-3 my-4">
            <Social url="COLOCAR LINK INSTA">
              <FaInstagram size={35} color="#fff" />
            </Social>

            <Social url="COLOCAR LINK LINKEDIN">
              <FaLinkedin size={35} color="#fff" />
            </Social>
          </footer>
        )}
      </main>
    </div>
  );
}
