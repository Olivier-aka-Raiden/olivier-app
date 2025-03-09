import React from 'react';
import AIImageGallery from "./AIImageGallery";
import AIVideoMusicGallery from "./AIVideoMusicGallery";
import AIVideoGallery from "./AIVideoGallery";
import PromptCarousel from "./PromptCarousel";



const AIWork: React.FC = () => {
    const images = [
        {
            original: "/assets/img/lamborghini.webp",
            thumbnail: "/assets/img/lamborghini.webp",
        },
        {
            original: "/assets/img/black_lambo.webp",
            thumbnail: "/assets/img/black_lambo.webp",
        },
        {
            original: "/assets/img/wildlife.webp",
            thumbnail: "/assets/img/wildlife.webp",
        },
        {
            original: "/assets/img/ramen.webp",
            thumbnail: "/assets/img/ramen.webp",
        },
        {
            original: "/assets/img/BigMac.webp",
            thumbnail: "/assets/img/BigMac.webp",
        },
        {
            original: "/assets/img/beauty.webp",
            thumbnail: "/assets/img/beauty.webp",
        },
        {
            original: "/assets/img/cutie.webp",
            thumbnail: "/assets/img/cutie.webp",
        },
        {
            original: "/assets/img/demon.webp",
            thumbnail: "/assets/img/demon.webp",
        },
        {
            original: "/assets/img/hair.webp",
            thumbnail: "/assets/img/hair.webp",
        },
        {
            original: "/assets/img/koreanbeauty.webp",
            thumbnail: "/assets/img/koreanbeauty.webp",
        },
        {
            original: "/assets/img/masterpiece.webp",
            thumbnail: "/assets/img/masterpiece.webp",
        },
        {
            original: "/assets/img/model.webp",
            thumbnail: "/assets/img/model.webp",
        },
        {
            original: "/assets/img/mountainbiker.webp",
            thumbnail: "/assets/img/mountainbiker.webp",
        },
        {
            original: "/assets/img/mountainbiker_alps.webp",
            thumbnail: "/assets/img/mountainbiker_alps.webp",
        },
        {
            original: "/assets/img/mysteriousman.webp",
            thumbnail: "/assets/img/mysteriousman.webp",
        },
        {
            original: "/assets/img/stunningkorean.webp",
            thumbnail: "/assets/img/stunningkorean.webp",
        },
    ];

    const loraImages = [
        {
            original: "/assets/img/dr_strange_olivier.webp",
            thumbnail: "/assets/img/dr_strange_olivier.webp",
        },
        {
            original: "/assets/img/deadpool.webp",
            thumbnail: "/assets/img/deadpool.webp",
        },
        {
            original: "/assets/img/deadpool2.webp",
            thumbnail: "/assets/img/deadpool2.webp",
        },
        {
            original: "/assets/img/godfather.webp",
            thumbnail: "/assets/img/godfather.webp",
        },
        {
            original: "/assets/img/godfather_2.webp",
            thumbnail: "/assets/img/godfather_2.webp",
        },
        {
            original: "/assets/img/olivier_jedi2.webp",
            thumbnail: "/assets/img/olivier_jedi2.webp",
        },
        {
            original: "/assets/img/olivier_ww2.webp",
            thumbnail: "/assets/img/olivier_ww2.webp",
        },
        {
            original: "/assets/img/egypt.webp",
            thumbnail: "/assets/img/egypt.webp",
        },
        {
            original: "/assets/img/pyramides.webp",
            thumbnail: "/assets/img/pyramides.webp",
        },
        {
            original: "/assets/img/samurai2.webp",
            thumbnail: "/assets/img/samurai2.webp",
        },
        {
            original: "/assets/img/samurai3.webp",
            thumbnail: "/assets/img/samurai3.webp",
        },
        {
            original: "/assets/img/samurai4.webp",
            thumbnail: "/assets/img/samurai4.webp",
        },
    ];


    const conversations = [
        {
            prompt: "Explique l'histoire du film Forrest Gump de la pire manière possible",
            response: "Il était une fois, dans un univers où le destin est contrôlé par une crevette cosmique hyper-intelligente, une plume consciente qui décide de se poser sur la chaussure d’un homme nommé Forrest Gump—une anomalie humaine dont le QI avoisine celui d’un bol de soupe tiède, mais dont la statistique de chance est boostée à 999. Forrest, être surnaturel guidé par des prophéties à base de fruits de mer et la capacité inexplicable d’être présent à chaque moment historique important, entame un voyage défiant toutes les lois connues de l’espace, du temps et de la logique narrative.  \n" +
                "\n" +
                "Enfant, Forrest porte des attelles aux jambes, ce qui signifie, de façon tout à fait logique, qu’il est destiné à courir plus vite que la lumière dès que le *scénario* décide qu’il en a fini avec le handicap. Il s’envole ainsi vers une bourse universitaire en football américain, alors qu’il ne connaît manifestement ni les règles ni le concept du jeu. Impressionné par cette bizarrerie, le gouvernement l’envoie au Vietnam, où il devient un héros de guerre légendaire simplement en courant dans des explosions comme un golden retriever poursuivant une balle. Il sauve son escouade à lui tout seul, y compris un homme nommé Bubba, qui ne parle que de crevettes et meurt dans un tragique accident de *trop de crevettes*. Forrest pleure environ 0,2 seconde avant de décider de fonder un empire de la crevette parce que *bien sûr*.  \n" +
                "\n" +
                "Pendant ce temps, son amour d’enfance, Jenny, suit une trajectoire parallèle où elle prend, sans exception, toutes les pires décisions possibles. Elle apparaît et disparaît de la vie de Forrest comme une hallucination fiévreuse, tandis que lui, en mode *touriste du destin*, devient champion de ping-pong par erreur, milliardaire en investissant dans Apple avant même que les ordinateurs existent, et met fin au communisme en saluant des gens bizarrement. Accessoirement, il invente aussi le jogging en courant sans s’arrêter, simplement parce que quelqu’un lui a dit de le faire, et son unique talent dans la vie est de prendre tout au pied de la lettre.  \n" +
                "\n" +
                "Finalement, Jenny revient, lui dépose un enfant surprise (potentiellement conçu par pure nécessité scénaristique), puis quitte cette réalité parce que le film a besoin d’un moment triste. Forrest, désormais père célibataire, s’assoit sur un banc et raconte toute son histoire à des inconnus trop polis (ou trop terrifiés) pour partir. La crevette cosmique le regarde avec bienveillance, et alors que la plume s’envole à nouveau, nous comprenons :  \n" +
                "\n" +
                "Rien de tout ça n’a de sens.  \n" +
                "\n" +
                "Mais la vie non plus.  \n" +
                "\n" +
                "Et c’est ça, le vrai message.  \n" +
                "\n" +
                "*Bruit de crevettes en fond.*  \n",
            model: "GPT-4o"
        },
        {
            prompt: "En suivant le même style de narration et d'abérance scénaristique raconte l'histoire d'interstellar comme la suite de Forest Gump.",
            response: "D’accord, voici *Forrest Gump 2 : Intercrevettar* \n" +
                "\n" +
                "---\n" +
                "\n" +
                "Forrest Gump, milliardaire malgré lui et inventeur du jogging, mène une vie paisible avec son fils, Forrest Jr., quand soudain, la NASA le recrute. Pourquoi ? Parce qu’il a, par pur hasard, dessiné une équation quantique révolutionnaire sur une serviette en mangeant des crevettes et, sans le savoir, résolu le problème de la gravité. Il ne comprend pas pourquoi tout le monde panique autour de lui, mais bon, on lui dit d’aller dans l’espace, alors il y va.  \n" +
                "\n" +
                "À bord du vaisseau *Crevette-1*, il est envoyé à travers un trou de ver vers une autre galaxie pour trouver une nouvelle planète habitable, car la Terre est en train de devenir un gigantesque bac à poussière. L’équipage comprend des scientifiques brillants, dont un robot sarcastique qui trouve que *« la probabilité que Forrest comprenne quelque chose est de 0,00001% »*. Mais Forrest, en bon Forrest, s’adapte sans poser de questions. Il appuie sur des boutons au hasard, évite la mort accidentellement à chaque instant et finit par atterrir sur une planète où le temps passe plus lentement qu’un discours présidentiel.  \n" +
                "\n" +
                "Il reste là-bas 10 minutes, mais quand il revient sur le vaisseau, il découvre que sur Terre, 25 ans se sont écoulés. Son fils est devenu un vieux scientifique désabusé qui lui en veut d’être allé chercher du pain et d’avoir fini dans l’espace.  \n" +
                "\n" +
                "Soudain, Forrest tombe dans un trou noir (littéralement). Il se retrouve dans une dimension parallèle où le temps et l’espace sont pliés en spaghetti quantiques. Là, il découvre que *c’est lui* qui a toujours influencé le destin du monde en envoyant des messages codés à travers le temps... avec des crevettes. Oui. Chaque moment clé de l’histoire était guidé par des signaux invisibles sous forme de taches de sauce cocktail qu’il laissait un peu partout depuis des décennies.  \n" +
                "\n" +
                "En larmes, il comprend enfin la vérité cosmique :  \n" +
                "\n" +
                "**« La vie, c’est comme une boîte de crevettes. On sait jamais quelle galaxie on va explorer. »**  \n" +
                "\n" +
                "Dans un dernier effort, il manipule l’espace-temps pour envoyer un message en morse crevettien à son fils, qui trouve la solution pour sauver l’humanité. Forrest est ensuite expulsé du trou noir et se réveille… dans une maison de retraite spatiale orbitant autour de Saturne.  \n" +
                "\n" +
                "Il regarde par le hublot et sourit.  \n" +
                "\n" +
                "La crevette cosmique flotte dans l’espace, et il sait qu’elle veille sur lui.  \n" +
                "\n" +
                "---\n" +
                "\n" +
                "Fin.  \n" +
                "\n" +
                "**PS :** Veux-tu un troisième film où Forrest voyage dans le multivers et rencontre des versions alternatives de lui-même, comme un Forrest Gump ninja ou un Forrest Gump cyberpunk ? Parce que ça, c’est faisable.",
            model: "GPT-4o"
        },
        // Add more conversations as needed
    ];

    return (
        <div>
            <h2 className="content__title">AI Art</h2>
            <div className="galleries">
                <div>
                    <h3 className="gallery-title">AI Generated Images</h3>
                    <p className="gallery-description">
                        Explore a collection of my best images made with FLUX 1.dev model.
                    </p>
                    <div className="gallery">
                        <AIImageGallery images={images}/>
                    </div>
                </div>
                <div>
                    <h3 className="gallery-title">AI Finetuning</h3>
                    <p className="gallery-description">
                        Explore a collection of images from a model I trained to include my face.
                    </p>
                    <div className="gallery">
                        <AIImageGallery images={loraImages}/>
                    </div>
                    <div className="gallery">
                        <AIVideoGallery/>
                    </div>
                </div>
                <div>
                    <h3 className="gallery-title">AI Generated Songs</h3>
                    <p className="gallery-description">
                        Explore a collection of songs I made using RVC models or Suno AI
                    </p>
                    <div className="gallery">
                    <AIVideoMusicGallery/>
                    </div>
                </div>
                <div>
                    <h3 className="gallery-title">Prompts hall of fame</h3>
                    <p className="gallery-description">
                        Some interesting conversations with AI
                    </p>
                    <PromptCarousel conversations={conversations} />
                </div>
            </div>

        </div>
    );
};
export default AIWork;